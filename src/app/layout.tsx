import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});

export const metadata: Metadata = {
  title: "Aayush Karki — Engineering Manager & Full Stack Engineer",
  description:
    "Engineering Manager and hands-on Full Stack Software Engineer building scalable software, leading engineering teams, and designing production systems for healthcare and modern web applications.",
  keywords: [
    "Engineering Manager",
    "Full Stack Engineer",
    "Software Engineer",
    "Healthcare Technology",
    "System Design",
    "Technical Leadership",
    "Aayush Karki",
  ],
  authors: [{ name: "Aayush Karki" }],
  openGraph: {
    title: "Aayush Karki — Engineering Manager & Full Stack Engineer",
    description:
      "Building scalable software, leading engineering teams, and designing production systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Karki — Engineering Manager & Full Stack Engineer",
    description:
      "Building scalable software, leading engineering teams, and designing production systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Nav />
        <ScrollProgress />
        {children}
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
