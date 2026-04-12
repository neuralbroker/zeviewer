import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zeviewer - AI Model Review Platform | Rate & Review AI Models",
    template: "%s | Zeviewer",
  },
  description: "Zeviewer is an open AI model review platform. Browse, rate, and review the latest AI models from OpenAI, Google, Anthropic, Meta, DeepSeek and more. 1000+ models including GPT-5, Claude 4, Gemini 3, Llama 4, DeepSeek R2.",
  keywords: "AI model reviews, ChatGPT reviews, Claude reviews, Gemini reviews, AI ratings, machine learning reviews, OpenAI, Anthropic, Google DeepMind, Meta AI, DeepSeek, Llama, Qwen, review AI models, rate AI models",
  authors: [{ name: "Zeviewer" }],
  creator: "Zeviewer",
  publisher: "Zeviewer",
  metadataBase: new URL("https://zeviewer.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeviewer.com",
    siteName: "Zeviewer",
    title: "Zeviewer - AI Model Review Platform",
    description: "Browse, rate, and review the latest AI models. Open and transparent community-driven platform with 1000+ AI models.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeviewer - AI Model Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeviewer - AI Model Review Platform",
    description: "Browse, rate, and review the latest AI models from OpenAI, Google, Anthropic, Meta, and more.",
    images: ["/og-image.png"],
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
  other: {
    "cache-control": "public, max-age=3600, s-maxage=86400",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
