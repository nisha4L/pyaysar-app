import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ToastBar from "@/components/ToastBar/ToastBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight : ["300","400","500","600","700"],
  style : ["normal"],
  variable : "--font-spaceGrotesk",
  adjustFontFallback : false,
 });

export const metadata: Metadata = {
  title: "Pyaysar App",
  description: "Ivoices Generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <main className="font-normal">
          <ToastBar/>
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
