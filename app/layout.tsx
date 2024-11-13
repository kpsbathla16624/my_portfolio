import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "./components/navbar";
import Particlebackground from "./components/particlebackground";

import { Dancing_Script } from 'next/font/google';
import BottomNavbar from "./components/bottomNavbar";

// Initialize the font with options like subsets and weight (optional)
const dancingScript = Dancing_Script({
  subsets: ['latin'], // Choose the subset(s) you need
  weight: ['400', '700'], // Optional: specify font weights
  variable: '--font-dancing-script', // Optional: specify a custom CSS variable 
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "kpsbathla",
  description: "Personal portfolio of kpsbathla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable}  antialiased`}
        >
      
        <Providers>
     
          <div className="-z-10">
          <Particlebackground/>
          </div>
          {/* <MyNavbar/> */}
          {children}
        </Providers>
        <BottomNavbar/>
      </body>
    </html>
  );
}
