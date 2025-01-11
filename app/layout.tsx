import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const firaCode = localFont({
  src: [
    {
      path: "./fonts/FiraCode-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Joan Boix",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} light:bg-white light:text-black dark:bg-black dark:text-white h-screen flex flex-col font-fira-code w-2/5 min-w-96 px-4 m-auto scrollbar-hide overflow-y-scroll`}
      >
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
