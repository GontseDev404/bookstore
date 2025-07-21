import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { DesktopSidebar } from "./desktop-sidebar"
import { ErrorBoundary } from '@/components/layout/ErrorBoundary';

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen">
        <DesktopSidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}
