"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react"
import { useContext, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SearchContext } from "@/components/search-context"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
export function Header() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext)
  const { cart } = useContext(WishlistCartContext)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Redirect to books page with search query
      router.push(`/books?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="grid gap-6 py-6">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                    Home
                  </Link>
                  <Link href="/books" className="flex items-center gap-2 font-semibold">
                    Books
                  </Link>
                  <Link href="/bestsellers" className="flex items-center gap-2 font-semibold">
          Staff Favorites
                  </Link>
                  <Link href="/new-releases" className="flex items-center gap-2 font-semibold">
                    New Releases
                  </Link>
                  <Link href="/categories" className="flex items-center gap-2 font-semibold">
                    Categories
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
                      <Image src="/images/2books-logo.png" alt="BookHaven Logo" width={40} height={40} className="h-10 w-auto" />
        <span className="hidden text-xl font-bold md:inline-block">BookHaven</span>
            </Link>
          </div>

          <div className="hidden flex-1 px-6 md:block">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search by title, author, or ISBN"
                className="w-full pl-10"
                value={searchQuery}
                onChange={handleSearchInput}
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </form>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {cart.length}
                </span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>
        </div>

        <nav className="hidden md:mt-2 md:block">
          <ul className="flex gap-6">
            <li>
              <Link href="/books" className="text-sm font-medium hover:text-primary">
                Books
              </Link>
            </li>
            <li>
              <Link href="/bestsellers" className="text-sm font-medium hover:text-primary">
              Staff Favorites
              </Link>
            </li>
            <li>
              <Link href="/new-releases" className="text-sm font-medium hover:text-primary">
                New Releases
              </Link>
            </li>
            <li>
              <Link href="/categories" className="text-sm font-medium hover:text-primary">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/deals" className="text-sm font-medium hover:text-primary">
                Deals
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
