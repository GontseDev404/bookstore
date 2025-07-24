import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { DesktopSidebar } from "./desktop-sidebar"
import { ErrorBoundary } from '@/components/layout/ErrorBoundary';
import { searchSuggestions, popularSearches, quickFilters } from "@/data/search";
import { companyInfo, quickLinks, customerService, contactInfo } from "@/data/footer";

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen">
        <DesktopSidebar />
        <div className="flex flex-1 flex-col">
          <Header 
            searchSuggestions={searchSuggestions}
            popularSearches={popularSearches}
            quickFilters={quickFilters}
          />
          <main className="flex-1">{children}</main>
          <Footer 
            companyInfo={companyInfo}
            quickLinks={quickLinks}
            customerService={customerService}
            contactInfo={contactInfo}
          />
        </div>
      </div>
    </ErrorBoundary>
  )
}
