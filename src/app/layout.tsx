"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { metadata } from "../../metadata"; 


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  // States for user details (if needed in the future)
  const [userName] = useState("");
  const [shopName] = useState("");
  const [profilePic] = useState("");

  useEffect(() => {
    console.log("Dashboard layout mounted");
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}

