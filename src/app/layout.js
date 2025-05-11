import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default: "Next-Hero",
    template: "%s | Next Hero"
  },
  description: "Choose Your Meal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Navbar></Navbar>
       <div className="min-h-screen">
       {children}
       </div>
        <footer className="h-40 bg-black text-white">
          This is the Footer
        </footer>
      </body>
    </html>
  );
}
