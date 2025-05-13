import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import imagem from "./next.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pet Mania",
  description: "Sistema de gerenciamento Pet Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <header style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <Image src={imagem} alt="Next" width="100" height={100}></Image>
          <h1>PET MANIA</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
