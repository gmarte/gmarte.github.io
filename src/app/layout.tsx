import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060607",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gmarte.com"),
  title: "Giancarlo Marte | Technology & Innovation Leader",
  description:
    "Giancarlo Marte — Technology leader with 10+ years of experience in enterprise systems, SAP, integrations, digital transformation, and AI-driven innovation.",
  keywords: [
    "Giancarlo Marte",
    "Technology and Innovation Manager",
    "SAP Solutions Architect",
    "Enterprise Systems Leader",
    "Digital Transformation Leader",
    "SAP ECC",
    "SAP EWM",
    "CargoWise",
    "Logistics Technology",
    "Supply Chain Technology",
    "AI Enablement",
    "Enterprise Integrations",
  ],
  authors: [{ name: "Giancarlo Marte", url: "https://gmarte.com" }],
  creator: "Giancarlo Marte",
  alternates: {
    canonical: "https://gmarte.com",
  },
  verification: {
    google: "c6ef35b8606c5d6f",
  },
  openGraph: {
    type: "profile",
    url: "https://gmarte.com",
    title: "Giancarlo Marte | Technology & Innovation Leader",
    description:
      "Technology leader with 10+ years of experience in enterprise systems, SAP, integrations, digital transformation, and AI-driven innovation.",
    siteName: "Giancarlo Marte",
    images: [
      {
        url: "/generated/og-cover.jpg",
        width: 1376,
        height: 768,
        alt: "Giancarlo Marte — Technology & Innovation Leader",
      },
    ],
    firstName: "Giancarlo",
    lastName: "Marte",
    username: "gmarte",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giancarlo Marte | Technology & Innovation Leader",
    description:
      "Technology leader with 10+ years of experience in enterprise systems, SAP, integrations, digital transformation, and AI-driven innovation.",
    images: ["/generated/og-cover.jpg"],
    creator: "@gmarte621",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png" },
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSerif.variable} ${plexMono.variable} antialiased`}
    >
      <body className="bg-ink text-porcelain font-sans">
        {/* Schema.org Person structured data */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Giancarlo Marte",
              url: "https://gmarte.com",
              image: "https://gmarte.com/profile.jpg",
              jobTitle: "Technology & Innovation Manager",
              description:
                "Technology leader with 10+ years of experience in enterprise systems, SAP integrations, digital transformation, and AI-driven innovation.",
              worksFor: {
                "@type": "Organization",
                name: "Caribetrans",
              },
              sameAs: [
                "https://www.linkedin.com/in/gmarte/",
                "https://github.com/gmarte",
              ],
              knowsAbout: [
                "SAP",
                "Enterprise Systems",
                "Digital Transformation",
                "AI-driven Innovation",
                "Logistics Technology",
                "CargoWise",
              ],
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T2EFX6WNEZ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T2EFX6WNEZ');
            `,
          }}
        />

        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>

        {/* Cinematic film grain over everything (below nav) */}
        <div
          aria-hidden
          className="grain pointer-events-none fixed inset-0 z-40 opacity-[0.05] mix-blend-overlay"
        />
      </body>
    </html>
  );
}
