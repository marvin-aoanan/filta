import type { Metadata } from "next";;
import "./globals.css";

//👇 Import Open Sans font
import { Open_Sans } from 'next/font/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Filta - Tasteology Orchard",
  description: "Tasteology Orchard, taste the colors.",
  openGraph: {
    title: 'Filta - Tasteology Orchard',
    description: 'Tasteology Orchard, taste the colors.',
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
