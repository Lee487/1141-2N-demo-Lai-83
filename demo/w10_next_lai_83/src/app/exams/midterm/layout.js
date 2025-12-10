import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import NavbarShop_xx from "@/components/midterm/NavbarShop_xx";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "midterm p2_xx",
  description: "1141 Midterm P2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarShop_xx />
        {children}
      </body>
    </html>
  );
}
