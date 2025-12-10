import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";               
import NavbarShopNode_xx from "@/components/midterm/NavbarShopNode_xx"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// ✅ 補上 geistMono 的完整定義
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ... (Metadata 定義) ...

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavbarShopNode_xx /> 
        {children}
        {/* ... */}
      </body>
    </html>
  );
}