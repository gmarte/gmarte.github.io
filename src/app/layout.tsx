import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gmarte.com"),
  title: "Giancarlo Marte | Technology & Innovation Leader",
  description: "Giancarlo Marte — Technology leader with 10+ years of experience in enterprise systems, SAP, integrations, digital transformation, and AI-driven innovation.",
  keywords: ["Giancarlo Marte", "Technology and Innovation Manager", "SAP Solutions Architect", "Enterprise Systems Leader", "CargoWise", "Logistics Technology", "Digital Transformation"],
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
    description: "Giancarlo Marte — Technology leader with 10+ years of experience in enterprise systems, SAP integrations, and AI-driven innovation.",
    siteName: "Giancarlo Marte",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
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
    description: "Giancarlo Marte — Technology leader with 10+ years of experience in enterprise systems, SAP integrations, and AI-driven innovation.",
    images: ["/profile.jpg"],
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
      className={`${inter.variable} ${outfit.variable} dark antialiased h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        
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
              description: "Technology leader with 10+ years of experience in enterprise systems, SAP integrations, digital transformation, and AI-driven innovation.",
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

        {/* Optimized Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-T2EFX6WNEZ`}
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

        <Navigation />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
