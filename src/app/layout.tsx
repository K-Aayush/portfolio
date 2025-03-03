import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});

export const metadata: Metadata = {
  title: "Aayush Karki portfolio",
  description: "Aayush Karki portfolio website with Nextjs",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
