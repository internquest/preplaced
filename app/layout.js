import { Geist, Geist_Mono,Inter,Hedvig_Letters_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
   subsets: ["latin"],
  variable: "--font-inter",});

const hedvig= Hedvig_Letters_Sans({
  subsets: ["latin"],
  variable: "--font-hedvig",
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${hedvig.variable} ${geistMono.variable} ${inter.variable} bg-white text-black font-hedvig antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}