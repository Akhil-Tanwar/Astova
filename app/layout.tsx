import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Astova - AI-Powered Astrology & Kundli Services",
  description:
    "Discover your cosmic destiny with Astova's AI-powered astrology services. Get instant Kundli generation, matchmaking, daily predictions, and personalized astrological insights.",
  keywords:
    "AI astrology, Kundli generator, matchmaking, daily horoscope, birth chart, astrological predictions, vedic astrology, online astrology",
  authors: [{ name: "Astova" }],
  creator: "Astova",
  publisher: "Astova",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://astova.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Astova - AI-Powered Astrology & Kundli Services",
    description:
      "Discover your cosmic destiny with Astova's AI-powered astrology services. Get instant Kundli generation, matchmaking, daily predictions, and personalized astrological insights.",
    url: "https://astova.com",
    siteName: "Astova",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Astova - AI-Powered Astrology Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astova - AI-Powered Astrology & Kundli Services",
    description: "Discover your cosmic destiny with Astova's AI-powered astrology services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} cosmic-bg`}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
