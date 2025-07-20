import type React from "react"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"
import { AppShell } from "@/components/layout/app-shell"
import "./globals.css"
import "../styles/sidebar.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BookHaven - Your Online Bookstore for All Ages",
  description: "Discover your next favorite book at BookHaven - Where every reader finds their perfect story, from children's literature to staff-curated favorites",
  generator: 'v0.dev'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppShell>
            {children}
          </AppShell>
        </Providers>
      </body>
    </html>
  )
}
