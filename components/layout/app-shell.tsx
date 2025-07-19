import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { DesktopSidebar } from "./desktop-sidebar"

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen">
      <DesktopSidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
