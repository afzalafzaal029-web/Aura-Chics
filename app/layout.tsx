import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./components/Navbar";   
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura Chics - Discover Your True Glow",
  description: "Aura Chics is your premier destination for beauty and self-care. Our salon offers a wide range of services, from haircuts and styling to skincare treatments, all designed to help you look and feel your best. Book your appointment online today and experience the ultimate in beauty and relaxation.",//new seo optimized best performer description for aura chics salon booking website, which is a beauty salon booking website. This description is optimized for search engines and will help attract more visitors to the site.",
  keywords: ["salon", "beauty", "chics","Aura chics", "booking"],

  openGraph: {
    title: "Aura Chics - Discover Your True Glow",
    description: "Aura Chics is your premier destination for beauty and self-care. Our salon offers a wide range of services, from haircuts and styling to skincare treatments, all designed to help you look and feel your best. Book your appointment online today and experience the ultimate in beauty and relaxation.",
    url: "https://aurachics.vercel.app", // Replace with your actual URL
    siteName: "Aura Chics",
    images: [
      {
        url: "https://aurachics.vercel.app/og-image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Aura Chics Salon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Chics - Discover Your True Glow",
    description: "Aura Chics is your premier destination for beauty and self-care. Our salon offers a wide range of services, from haircuts and styling to skincare treatments, all designed to help you look and feel your best. Book your appointment online today and experience the ultimate in beauty and relaxation.",
    images: ["https://aurachics.vercel.app/og-image.png"], // Replace with your actual Twitter image URL
  }, 
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />   
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}