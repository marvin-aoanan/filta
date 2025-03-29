import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filta - Tasteology Orchard",
  description: "Tasteology Orchard, taste the colors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
