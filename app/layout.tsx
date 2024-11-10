import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "./components/navbar";
import Particlebackground from "./components/particlebackground";

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
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
        >
          <div className="-z-10">
          <Particlebackground/>
          </div>
        {" "}
        <Providers>
        <MyNavbar/>
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
