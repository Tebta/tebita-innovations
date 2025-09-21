import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Tebita Innovations - Dropping Innovation Into Your Business",
  description:
    "Ethiopian tech company specializing in e-commerce solutions, landing pages, appointment systems, and online ordering. Transform your business with modern technology.",

  keywords:
    "tech company, e-commerce, landing pages, appointment scheduling, online ordering, Ethiopia, web development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  )
}
