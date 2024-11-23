import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "./components/navbar";
import Particlebackground from "./components/particlebackground";

import { Dancing_Script, Share_Tech_Mono } from 'next/font/google';
import BottomNavbar from "./components/bottomNavbar";

// add font Share Tech Mono from next google font
const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-share-tech-mono',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-dancing-script',  
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
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${shareTechMono.variable} antialiased `}
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
