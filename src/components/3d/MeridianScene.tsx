"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";

/**
 * "The Meridian" — an abstract enterprise flow-field.
 *
 * A cloud of particles morphs between scattered noise ("complexity")
 * and an ordered lattice of meridian rings ("control") driven by scroll.
 * Sparse route lines carry red signal pulses — data moving through
 * an operation under control. Monochrome + one signal color, by design.
 */

const COUNT = 1900;
const RINGS = 9;
const RADIUS = 5.2;
const LAT_MIN = -0.32; // radians
const LAT_MAX = 0.78;
const LON_SPAN = Math.PI * 0.66;

type Refs = {
  progressRef: MutableRefObject<number>;
  visibleRef: MutableRefObject<boolean>;
  reduced: boolean;
};

function buildLattice() {
  const ordered = new Float32Array(COUNT * 3);
  const chaos = new Float32Array(COUNT * 3);
  const seeds = new Float32Array(COUNT);
  const perRing = Math.floor(COUNT / RINGS);

  for (let i = 0; i < COUNT; i++) {
    const ring = Math.min(Math.floor(i / perRing), RINGS - 1);
    const idx = i % perRing;
    const lat =
      LAT_MIN +
      (ring / (RINGS - 1)) * (LAT_MAX - LAT_MIN) +
      (Math.random() - 0.5) * 0.015;
    const lon =
      -LON_SPAN + (idx / (perRing - 1)) * LON_SPAN * 2 + (Math.random() - 0.5) * 0.01;
    const r = RADIUS + (Math.random() - 0.5) * 0.06;

    ordered[i * 3] = r * Math.cos(lat) * Math.sin(lon);
    ordered[i * 3 + 1] = r * Math.sin(lat);
    ordered[i * 3 + 2] = r * Math.cos(lat) * Math.cos(lon) - RADIUS;

    chaos[i * 3] = (Math.random() - 0.5) * 13;
    chaos[i * 3 + 1] = (Math.random() - 0.5) * 7.5;
    chaos[i * 3 + 2] = (Math.random() - 0.5) * 5.5 - 1.8;

    seeds[i] = Math.random();
  }
  return { ordered, chaos, seeds };
}

function ringPoint(lat: number, lon: number): THREE.Vector3 {
  return new THREE.Vector3(
    RADIUS * Math.cos(lat) * Math.sin(lon),
    RADIUS * Math.sin(lat),
    RADIUS * Math.cos(lat) * Math.cos(lon) - RADIUS
  );
}

const vertexShader = /* glsl */ `
  attribute vec3 aChaos;
  attribute float aSeed;
  uniform float uTime;
  uniform float uOrder;
  uniform float uPr;
  varying float vSeed;

  void main() {
    float s = aSeed * 6.28318;
    vec3 drift = vec3(
      sin(uTime * 0.16 + s * 7.0),
      cos(uTime * 0.21 + s * 5.0),
      sin(uTime * 0.13 + s * 3.0)
    ) * 0.5;
    vec3 breathe = position * (1.0 + sin(uTime * 0.4 + s) * 0.004);
    vec3 p = mix(aChaos + drift, breathe, uOrder);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float size = mix(1.1, 2.2, fract(aSeed * 7.31));
    gl_PointSize = min(size * uPr * (34.0 / -mv.z), 4.4 * uPr);
    vSeed = aSeed;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uFade;
  varying float vSeed;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float disc = smoothstep(0.5, 0.14, d);
    bool signal = vSeed > 0.987;
    vec3 col = signal ? vec3(0.92, 0.34, 0.40) : vec3(0.80, 0.82, 0.86);
    float alpha = disc * (signal ? 0.9 : 0.24) * uFade;
    if (alpha < 0.002) discard;
    gl_FragColor = vec4(col, alpha);
  }
`;

function Field({ progressRef, visibleRef, reduced }: Refs) {
  const group = useRef<THREE.Group>(null!);
  const pulses = useRef<THREE.Mesh[]>([]);
  const smooth = useRef({ x: 0, y: 0, order: reduced ? 1 : 0 });

  const { ordered, chaos, seeds } = useMemo(buildLattice, []);

  const routes = useMemo(() => {
    const list: THREE.CatmullRomCurve3[] = [];
    for (let r = 0; r < 6; r++) {
      const lat = LAT_MIN + ((r * 1.7 + 1) % RINGS) / (RINGS - 1) * (LAT_MAX - LAT_MIN);
      const pts: THREE.Vector3[] = [];
      const steps = 5;
      for (let k = 0; k <= steps; k++) {
        const lon = -LON_SPAN + (k / steps) * LON_SPAN * 2;
        const wobble = (Math.sin(r * 3.1 + k * 1.7) * 0.5 + 0.5) * 0.12;
        pts.push(ringPoint(lat + wobble - 0.06, lon));
      }
      list.push(new THREE.CatmullRomCurve3(pts));
    }
    return list;
  }, []);

  const routeGeometries = useMemo(
    () =>
      routes.map((curve) => {
        const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(90));
        return geo;
      }),
    [routes]
  );

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOrder: { value: reduced ? 1 : 0 },
      uFade: { value: 0 },
      uPr: { value: 1 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((state, delta) => {
    if (!visibleRef.current) return;
    const t = state.clock.elapsedTime;
    uniforms.uPr.value = state.gl.getPixelRatio();
    uniforms.uFade.value = Math.min(uniforms.uFade.value + delta * 0.55, 1);

    if (!reduced) {
      uniforms.uTime.value = t;
      // scroll story: loose order at rest → full control as you scroll through hero
      const target = 0.3 + 0.7 * Math.min(Math.max(progressRef.current, 0), 1);
      smooth.current.order += (target - smooth.current.order) * Math.min(delta * 2.2, 1);
      uniforms.uOrder.value = smooth.current.order;
    }

    // pointer parallax
    const p = state.pointer;
    smooth.current.x += (p.x - smooth.current.x) * Math.min(delta * 3, 1);
    smooth.current.y += (p.y - smooth.current.y) * Math.min(delta * 3, 1);

    if (group.current) {
      group.current.rotation.y =
        (reduced ? 0 : t * 0.026) + smooth.current.x * 0.11;
      group.current.rotation.x = -0.1 - smooth.current.y * 0.06;
    }

    // signal pulses along routes — only visible once the lattice forms
    const order = uniforms.uOrder.value;
    pulses.current.forEach((mesh, i) => {
      if (!mesh) return;
      const speed = 0.028 + (i % 3) * 0.012;
      const tt = reduced ? (i * 0.17) % 1 : (t * speed + i * 0.17) % 1;
      const pos = routes[i].getPointAt(tt);
      mesh.position.copy(pos);
      const vis = Math.max(0, (order - 0.45) / 0.55);
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = vis * (0.55 + 0.45 * Math.sin(t * 2 + i));
      mesh.scale.setScalar(0.8 + 0.4 * Math.sin(t * 3 + i * 2));
    });
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ordered, 3]} />
          <bufferAttribute attach="attributes-aChaos" args={[chaos, 3]} />
          <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {routeGeometries.map((geo, i) => (
        <primitive
          key={i}
          object={
            new THREE.Line(
              geo,
              new THREE.LineBasicMaterial({
                color: 0x878c96,
                transparent: true,
                opacity: 0.07,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
              })
            )
          }
        />
      ))}

      {routes.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) pulses.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.045, 10, 10]} />
          <meshBasicMaterial
            color={0xe4636b}
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function MeridianScene(props: Refs) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 8], fov: 50 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <Field {...props} />
    </Canvas>
  );
}
