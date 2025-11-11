import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qasa IA - A IA que Vende Mais para Sua Imobiliária",
  description: "Atendimento humanizado 24/7 no WhatsApp que qualifica, recomenda imóveis e agenda visitas automaticamente. Converta 60% mais leads com a IA que realmente fecha negócios.",
  keywords: ["IA imobiliária", "chatbot imobiliário", "WhatsApp imobiliário", "leads imobiliários", "automação imobiliária", "IA para corretores"],
  authors: [{ name: "Qasa IA" }],
  creator: "Qasa IA",
  publisher: "Qasa IA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://qasa.ai",
    title: "Qasa IA - A IA que Vende Mais para Sua Imobiliária",
    description: "Atendimento humanizado 24/7 no WhatsApp. Converta 60% mais leads com a IA que realmente fecha negócios.",
    siteName: "Qasa IA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qasa IA - Inteligência Artificial para Imobiliárias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qasa IA - A IA que Vende Mais para Sua Imobiliária",
    description: "Atendimento humanizado 24/7 no WhatsApp. Converta 60% mais leads.",
    images: ["/og-image.jpg"],
    creator: "@qasaia",
  },
  metadataBase: new URL('https://qasa.ai'),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF6F3C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
