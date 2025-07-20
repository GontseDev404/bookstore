"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Heart, User, Menu, Filter, BookOpen, Headphones, Star, X, ChevronDown } from "lucide-react"
import { useContext, useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SearchContext } from "@/components/search-context"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { EnhancedSidebar } from "./enhanced-sidebar"

export function Header() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext)
  const { cart } = useContext(WishlistCartContext)
  const router = useRouter()
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Search suggestions data
  const searchSuggestions = [
    "The Great Gatsby",
    "To Kill a Mockingbird", 
    "1984",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "Lord of the Flies",
    "Animal Farm",
    "The Hobbit",
    "Fahrenheit 451",
    "Brave New World"
  ]

  // Popular searches
  const popularSearches = [
    { term: "Bestsellers", count: "2.3k" },
    { term: "New Releases", count: "1.8k" },
    { term: "Audiobooks", count: "1.5k" },
    { term: "Children's Books", count: "1.2k" },
    { term: "Science Fiction", count: "950" },
    { term: "Mystery", count: "890" },
  ]

  // Quick filters
  const quickFilters = [
    { name: "All Books", icon: BookOpen, active: true },
    { name: "Audiobooks", icon: Headphones, active: false },
    { name: "Bestsellers", icon: Star, active: false },
    { name: "New Releases", active: false },
    { name: "Staff Picks", active: false },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setShowSearchDropdown(false)
      router.push(`/books?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    if (e.target.value.length > 0) {
      setShowSearchDropdown(true)
    } else {
      setShowSearchDropdown(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSearchDropdown(false)
    router.push(`/books?search=${encodeURIComponent(suggestion)}`)
  }

  const handlePopularSearchClick = (term: string) => {
    setSearchQuery(term)
    setShowSearchDropdown(false)
    router.push(`/books?search=${encodeURIComponent(term)}`)
  }

  const handleQuickFilterClick = (filter: string) => {
    setSearchQuery(filter)
    setShowSearchDropdown(false)
    router.push(`/books?category=${encodeURIComponent(filter.toLowerCase())}`)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <EnhancedSidebar />
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/2books-logo.png" alt="BookHaven Logo" width={32} height={32} className="h-8 w-auto sm:h-10" />
              <span className="hidden text-lg font-bold sm:text-xl md:inline-block">BookHaven</span>
            </Link>
          </div>

          <div className="hidden flex-1 px-4 sm:px-6 md:block" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search by title, author, ISBN, or genre..."
                  className="w-full pl-8 sm:pl-10 pr-16 sm:pr-20 text-sm sm:text-base"
                  value={searchQuery}
                  onChange={handleSearchInput}
                  onFocus={() => searchQuery.length > 0 && setShowSearchDropdown(true)}
                />
                <Search className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-muted-foreground" />
                <div className="absolute right-1 sm:right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                    className="h-5 w-5 sm:h-6 sm:w-auto px-1 sm:px-2 text-xs"
                  >
                    <Filter className="h-2 w-2 sm:h-3 sm:w-3 mr-0 sm:mr-1" />
                    <span className="hidden sm:inline">Filters</span>
                  </Button>
                  <Button type="submit" size="sm" className="h-5 w-5 sm:h-6 sm:w-auto px-1 sm:px-3 text-xs">
                    <span className="hidden sm:inline">Search</span>
                    <Search className="h-3 w-3 sm:hidden" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Search Dropdown */}
              {showSearchDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border rounded-lg shadow-lg z-50 max-h-80 sm:max-h-96 overflow-y-auto">
                  <div className="p-3 sm:p-4">
                    {/* Quick Filters */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm font-medium text-foreground mb-2">Quick Filters</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {quickFilters.map((filter, index) => (
                          <Badge
                            key={index}
                            variant={filter.active ? "secondary" : "outline"}
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground text-xs"
                            onClick={() => handleQuickFilterClick(filter.name)}
                          >
                            {filter.icon && <filter.icon className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />}
                            {filter.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Search Suggestions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Popular Searches */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-foreground mb-2">Popular Searches</h4>
                        <div className="space-y-1">
                          {popularSearches.map((search, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-1 sm:p-2 rounded-md hover:bg-muted cursor-pointer"
                              onClick={() => handlePopularSearchClick(search.term)}
                            >
                              <span className="text-xs sm:text-sm text-foreground">{search.term}</span>
                              <span className="text-xs text-muted-foreground">{search.count} searches</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Trending Books */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-foreground mb-2">Trending Books</h4>
                        <div className="space-y-1">
                          {searchSuggestions.slice(0, 6).map((suggestion, index) => (
                            <div
                              key={index}
                              className="flex items-center p-1 sm:p-2 rounded-md hover:bg-muted cursor-pointer"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              <Search className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2 text-muted-foreground" />
                              <span className="text-xs sm:text-sm text-foreground">{suggestion}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Advanced Search */}
                    {showAdvancedSearch && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t">
                        <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3">Advanced Search</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          <div>
                            <label className="text-xs font-medium text-foreground">Genre</label>
                            <select className="w-full mt-1 p-1 sm:p-2 border rounded text-xs">
                              <option>All Genres</option>
                              <option>Fiction</option>
                              <option>Non-Fiction</option>
                              <option>Mystery</option>
                              <option>Romance</option>
                              <option>Sci-Fi</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-medium text-foreground">Format</label>
                            <select className="w-full mt-1 p-1 sm:p-2 border rounded text-xs">
                              <option>All Formats</option>
                              <option>Hardcover</option>
                              <option>Paperback</option>
                              <option>Audiobook</option>
                              <option>E-book</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-medium text-foreground">Price Range</label>
                            <select className="w-full mt-1 p-1 sm:p-2 border rounded text-xs">
                              <option>Any Price</option>
                              <option>Under $10</option>
                              <option>$10 - $20</option>
                              <option>$20 - $30</option>
                              <option>Over $30</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-medium text-foreground">Rating</label>
                            <select className="w-full mt-1 p-1 sm:p-2 border rounded text-xs">
                              <option>Any Rating</option>
                              <option>4+ Stars</option>
                              <option>3+ Stars</option>
                              <option>2+ Stars</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-3">
              <Button variant="ghost" size="icon" className="md:hidden h-8 w-8 sm:h-9 sm:w-9">
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Search</span>
              </Button>

              <Link href="/account">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>

              <Link href="/wishlist">
                <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Wishlist</span>
                </Button>
              </Link>

              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9">
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="absolute right-0 top-0 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-primary text-[8px] sm:text-[10px] text-primary-foreground">
                    {cart.length}
                  </span>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 mt-2 sm:mt-3">
          <Link href="/books" className="text-sm font-medium hover:text-primary">
            All Books
          </Link>
          <Link href="/bestsellers" className="text-sm font-medium hover:text-primary">
            Bestsellers
          </Link>
          <Link href="/new-releases" className="text-sm font-medium hover:text-primary">
            New Releases
          </Link>
          <Link href="/categories" className="text-sm font-medium hover:text-primary">
            Categories
          </Link>
          <Link href="/deals" className="text-sm font-medium hover:text-primary">
            Deals
          </Link>
        </nav>
      </div>
    </header>
  )
}
