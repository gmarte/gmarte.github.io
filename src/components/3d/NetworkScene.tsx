// src/components/3d/NetworkScene.tsx
"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const geo = useMemo(() => {
    // Large grid to create the sweeping digital topography
    const g = new THREE.PlaneGeometry(80, 80, 70, 70);
    g.rotateX(-Math.PI / 2);
    return g;
  }, []);

  useFrame((_, delta) => {
    timeRef.current += delta;
    const t = timeRef.current * 0.4;

    // Smooth Executive Parallax
    const targetX = mousePosition.x * 0.1;
    const targetY = mousePosition.y * 0.1;
    
    if (meshRef.current && wireframeRef.current) {
        meshRef.current.rotation.z += (targetX - meshRef.current.rotation.z) * 0.05;
        meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
        
        // Sync wireframe rotation with the base mesh
        wireframeRef.current.rotation.z = meshRef.current.rotation.z;
        wireframeRef.current.rotation.x = meshRef.current.rotation.x;
    }

    const positions = geo.attributes.position;
    const count = positions.count;
    
    for (let i = 0; i < count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      
      // Topographic wave math (Rolling data landscape)
      const y = Math.sin(x * 0.1 + t) * 1.5 
              + Math.cos(z * 0.12 - t * 0.8) * 1.5 
              + Math.sin((x + z) * 0.05 + t) * 1.0;

      positions.setY(i, y);
    }
    
    positions.needsUpdate = true;
    geo.computeVertexNormals();
  });

  return (
    <group position={[0, -6, -10]}>
      {/* Solid Dark Base Plane */}
      <mesh ref={meshRef} geometry={geo}>
        <meshStandardMaterial 
          color="#050505" 
          roughness={0.9} 
          metalness={0.2}
        />
      </mesh>
      
      {/* Red Architectural Wireframe Grid */}
      <mesh ref={wireframeRef} geometry={geo} position={[0, 0.05, 0]}>
        <meshBasicMaterial 
          color="#a40000" 
          wireframe={true} 
          transparent={true}
          opacity={0.3} 
        />
      </mesh>
    </group>
  );
}

// Background atmosphere
function BackgroundDust() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 200;

  const [positions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        pos[i] = (Math.random() - 0.5) * 50;
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.03} transparent opacity={0.15} />
    </points>
  );
}

export default function NetworkScene() {
  return (
    <div className="absolute inset-0 z-0 bg-graphite-950 overflow-hidden pointer-events-none">
      {/* Heavy gradient at the top so it blends perfectly into the black background */}
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-950 via-transparent to-transparent z-10 pointer-events-none" />
      <Canvas camera={{ position: [0, 2, 12], fov: 60 }}>
        <fog attach="fog" args={["#0a0a0a", 8, 35]} />
        <ambientLight intensity={0.5} />
        {/* Deep red directional light grazing the terrain */}
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#cc0000" />
        <Terrain />
        <BackgroundDust />
      </Canvas>
    </div>
  );
}
