import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer & Designer",
  description:
    "Personal portfolio showcasing my work as a software engineer and designer. Building elegant solutions for the web.",
  generator: "Next.js",
  keywords: [
    "portfolio",
    "software engineer",
    "developer",
    "designer",
    "web development",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Software Engineer & Designer",
    description:
      "Personal portfolio showcasing my work as a software engineer and designer.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
