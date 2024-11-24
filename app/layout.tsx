import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "./components/navbar";
import Particlebackground from "./components/particlebackground";

import { Dancing_Script, Share_Tech_Mono } from "next/font/google";
import BottomNavbar from "./components/bottomNavbar";

// add font Share Tech Mono from next google font
const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech-mono",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
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
          {/* Block site on mobile */}
          <div className="block md:hidden fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
            <h1 className="text-2xl font-bold">Site Not Supported on Mobile</h1>
            <p className="mt-2 text-lg">Please visit on a larger screen.</p>
          </div>

          {/* Main content for larger screens */}
          <div className="hidden md:block">
            <div className="-z-10">
              <Particlebackground />
            </div>
            {/* <MyNavbar /> */}
            {children}
          </div>
        </Providers>

        <BottomNavbar />
      </body>
    </html>
  );
}
