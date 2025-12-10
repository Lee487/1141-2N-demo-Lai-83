
import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";               
import NavbarShop_xx from "@/components/midterm/NavbarShopSupa_xx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 若你用 TypeScript：import type { Metadata } from "next";
// export const metadata: Metadata = { ... }
export const metadata = {
  title: "midterm p2_xx",
  description: "1141 Midterm P2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* ✅ 這裡要用真正的 JSX 標籤，不要 &lt; / &gt; */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavbarShop_xx />
        {/* 版面主容器：讓內容置中並有左右間距 */}
        <main className="page-container">
          {children}
        </main>
      </body>
    </html>
  );
}
