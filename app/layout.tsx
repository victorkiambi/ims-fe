import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {CartProvider} from "@/app/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ims",
  description: "Generated by create flowbite react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
      <CartProvider>
      <Navbar/>
      <main className="container mx-auto p-6">
          {children}
      </main>
      <Footer/>
      </CartProvider>
      </body>
    </html>
);
}
