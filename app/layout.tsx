import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "cn-lit-tw-starter/styles"
import "./globals.css"
import WebComponentsProvider from "@/components/WebComponentsProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js App with Lit Components",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebComponentsProvider>{children}</WebComponentsProvider>
      </body>
    </html>
  )
}
