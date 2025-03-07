import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Orbitron, Fira_Code } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const cascadia = Fira_Code({
  subsets: ["latin"],
  variable: "--font-cascadia",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CRESA - Creativity, Innovation, Excellence",
  description:
    "CRESA is a student organization dedicated to fostering creativity, innovation, and excellence across various domains.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrains.variable} ${orbitron.variable} ${cascadia.variable} font-cascadia`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

