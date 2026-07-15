import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://loopwork-deskhrx.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LoopWork + DeskHRX | Unified HR & Project Management Software",
    template: "%s | LoopWork + DeskHRX",
  },
  description:
    "Run your entire workforce from one platform. LoopWork delivers Kanban, Gantt, and AI-driven project management; DeskHRX delivers payroll, HR, and compliance — bundle both and save 30%. Start your free 2-month trial.",
  keywords: [
    "LoopWork",
    "DeskHRX",
    "project management software",
    "HR management software",
    "payroll software",
    "workforce management platform",
    "HRIS",
    "team workflow software",
    "employee management system",
  ],
  authors: [{ name: "LoopWork + DeskHRX" }],
  category: "Business Software",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "LoopWork + DeskHRX",
    title: "LoopWork + DeskHRX | Unified HR & Project Management Software",
    description:
      "Combine the heavy-duty project management of LoopWork with the intelligent HR solutions of DeskHRX to scale faster. Bundle both and save 30%.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LoopWork + DeskHRX — Unified HR & Workflow Powerhouse",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoopWork + DeskHRX | Unified HR & Project Management Software",
    description:
      "Combine LoopWork's project management with DeskHRX's HR & payroll tools. Bundle both and save 30%. Start your free trial today.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "LoopWork + DeskHRX",
        url: siteUrl,
      },
      {
        "@type": "SoftwareApplication",
        name: "LoopWork",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Project management reimagined with Kanban, Gantt, and AI-driven workload balancing.",
        offers: {
          "@type": "Offer",
          price: "69",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
        },
        brand: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: "DeskHRX",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Unified employee profiles, automated payroll, and enterprise-grade HR compliance.",
        offers: {
          "@type": "Offer",
          price: "49",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
        },
        brand: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="bg-background text-on-surface font-body-md overflow-x-hidden mesh-bg antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
