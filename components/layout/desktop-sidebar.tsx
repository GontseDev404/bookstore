"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Home, 
  BookOpen, 
  Star, 
  Calendar, 
  Tag, 
  ShoppingCart, 
  Heart, 
  User, 
  Settings, 
  HelpCircle,
  TrendingUp,
  Gift,
  Search,
  Menu,
  X,
  ChevronRight,
  PanelLeftClose,
  Sparkles,
  Grid
} from "lucide-react"
import { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { WishlistCartContext } from "@/components/wishlist-cart-context"

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
  badge?: string
  description?: string
}

const mainNavItems: SidebarItem[] = [
  {
    icon: Home,
    label: "Home",
    href: "/",
    description: "Browse our homepage"
  },
  {
    icon: BookOpen,
    label: "All Books",
    href: "/books",
    description: "Browse our complete collection"
  },
  {
    icon: Star,
    label: "Bestsellers",
    href: "/bestsellers",
    description: "Most popular books"
  },
  {
    icon: Calendar,
    label: "New Releases",
    href: "/new-releases",
    description: "Fresh arrivals this month"
  },
  {
    icon: Tag,
    label: "Categories",
    href: "/categories",
    description: "Browse by genre"
  },
  {
    icon: TrendingUp,
    label: "Popular Books",
    href: "/popular",
    description: "Trending and highly-rated books"
  },
  {
    icon: Gift,
    label: "Deals",
    href: "/deals",
    description: "Special offers & discounts"
  }
]

const userNavItems: SidebarItem[] = [
  {
    icon: User,
    label: "My Account",
    href: "/profile",
    description: "Manage your profile"
  },
  {
    icon: Heart,
    label: "Wishlist",
    href: "/wishlist",
    description: "Your saved books"
  },
  {
    icon: ShoppingCart,
    label: "Cart",
    href: "/cart",
    description: "Your shopping cart"
  }
]

const helpNavItems: SidebarItem[] = [
  {
    icon: HelpCircle,
    label: "Help Center",
    href: "/help",
    description: "Get support"
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
    description: "Account preferences"
  }
]

export function DesktopSidebar() {
  const { cart, wishlist } = useContext(WishlistCartContext)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const SidebarItem = ({ item, isActive = false }: { item: SidebarItem; isActive?: boolean }) => (
    <Link
      href={item.href}
      className={`sidebar-item group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
        isActive ? 'active bg-accent text-accent-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      <div className={`sidebar-icon flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
        isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground'
      }`}>
        <item.icon className="h-4 w-4" />
      </div>
      {!isCollapsed && (
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span>{item.label}</span>
            {item.badge && (
              <Badge variant="secondary" className="sidebar-badge ml-auto text-xs">
                {item.badge}
              </Badge>
            )}
          </div>
          {item.description && (
            <p className="text-xs text-muted-foreground group-hover:text-foreground">
              {item.description}
            </p>
          )}
        </div>
      )}
      {!isCollapsed && (
        <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
      )}
    </Link>
  )

  const SidebarSection = ({ title, items, showBadges = false }: { 
    title: string; 
    items: SidebarItem[]; 
    showBadges?: boolean 
  }) => (
    <div className="space-y-1">
      {!isCollapsed && (
        <h3 className="sidebar-section-header px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-1">
        {items.map((item) => (
          <SidebarItem
            key={item.href}
            item={{
              ...item,
              badge: showBadges && item.label === "Cart" ? cart.length.toString() : 
                     showBadges && item.label === "Wishlist" ? wishlist.length.toString() : 
                     item.badge
            }}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className={`sidebar-collapsible hidden lg:flex h-screen flex-col border-r bg-card transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-card">
        {!isCollapsed && (
          <Link href="/" className="sidebar-logo flex items-center gap-2">
            <Image 
              src="/images/2books-logo.png" 
              alt="BookHaven Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto" 
            />
            <span className="text-lg font-bold text-card-foreground">BookHaven</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8"
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      {/* Search Bar */}
      {!isCollapsed && (
        <div className="p-4 border-b bg-card">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search by title, author, or ISBN..."
              className="sidebar-search w-full pl-10 pr-4 py-2 text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
            />
          </div>
        </div>
      )}

      {/* Navigation Content */}
      <div className="sidebar-content flex-1 overflow-y-auto p-4 space-y-6">
        {/* Main Navigation */}
        <SidebarSection title="Browse" items={mainNavItems} />
        
        {!isCollapsed && <Separator className="my-6" />}
        
        {/* User Navigation */}
        <SidebarSection title="My Account" items={userNavItems} showBadges />
        
        {!isCollapsed && <Separator className="my-6" />}
        
        {/* Help Navigation */}
        <SidebarSection title="Support" items={helpNavItems} />
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t bg-card">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:support@bookhaven.com" className="text-primary hover:text-primary/80">
                support@bookhaven.com
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 