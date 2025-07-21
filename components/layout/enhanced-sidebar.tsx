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
  Sparkles,
  Grid
} from "lucide-react"
import { useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
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
    label: "Staff Favorites",
    href: "/bestsellers",
    description: "Curated picks from our team"
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
    description: "Most popular books"
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

export function EnhancedSidebar() {
  const { cart, wishlist } = useContext(WishlistCartContext)
  const [isOpen, setIsOpen] = useState(false)

  const SidebarItem = ({ item, isActive = false }: { item: SidebarItem; isActive?: boolean }) => (
    <Link
      href={item.href}
      className={`sidebar-item group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
        isActive ? 'active bg-accent text-accent-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div className={`sidebar-icon flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
        isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground'
      }`}>
        <item.icon className="h-4 w-4" />
      </div>
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
      <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
    </Link>
  )

  const SidebarSection = ({ title, items, showBadges = false }: { 
    title: string; 
    items: SidebarItem[]; 
    showBadges?: boolean 
  }) => (
    <div className="space-y-1">
      <h3 className="sidebar-section-header px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0 bg-background h-screen">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">Access the main navigation menu for BookHaven</SheetDescription>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-card">
          <Link href="/" className="sidebar-logo flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Image 
              src="/images/2books-logo.png" 
              alt="BookHaven Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto" 
            />
            <span className="text-lg font-bold text-card-foreground">BookHaven</span>
          </Link>
        </div>

        {/* Search Bar */}
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

        {/* Navigation Content */}
        <div className="sidebar-content flex-1 h-full overflow-y-auto p-4 space-y-6">
          {/* Main Navigation */}
          <SidebarSection title="Browse" items={mainNavItems} />
          
          <Separator className="my-6" />
          
          {/* User Navigation */}
          <SidebarSection title="My Account" items={userNavItems} showBadges />
          
          <Separator className="my-6" />
          
          {/* Help Navigation */}
          <SidebarSection title="Support" items={helpNavItems} />
        </div>

        {/* Footer */}
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
      </SheetContent>
    </Sheet>
  )
} 