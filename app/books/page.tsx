"use client"

import Image from "next/image"
import Link from "next/link"
import { AppShell } from "@/components/layout/app-shell"
import { BookRating } from "@/components/book/book-rating"
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { SearchContext } from "@/components/search-context"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { Heart, ShoppingCart, Search, Filter, SortAsc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchFilters, type SearchFilters as SearchFiltersType } from "@/components/search-filters"
import { SearchSuggestions } from "@/components/search-suggestions"
import { SearchResults } from "@/components/search-results"
import { BookRecommendations } from "@/components/book-recommendations"
import { RecentlyViewed } from "@/components/recently-viewed"

const books = [
  {
    id: "silver-feet-and-her-wonder",
    title: "Silver Feet and Her Wonder",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/silver-feet-cover.png",
    rating: 4.8,
    reviewCount: 37,
    price: 24.99,
    originalPrice: 29.99,
    inStock: true,
    category: "children",
    badge: "Bestseller"
  },
  {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/the-monkey-blanket-cover.png",
    rating: 4.9,
    reviewCount: 45,
    price: 19.99,
    originalPrice: 24.99,
    inStock: true,
    category: "children",
    badge: "New Release"
  },
  {
    id: "fearless",
    title: "Fearless",
    author: "Lauren Roberts",
    coverImage: "/images/fearless-cover.webp",
    rating: 4.9,
    reviewCount: 41,
    price: 22.99,
    originalPrice: 27.99,
    inStock: false,
    category: "romance",
    badge: "Popular"
  },
  {
    id: "great-big-beautiful-life",
    title: "Great Big Beautiful Life",
    author: "Emily Henry",
    coverImage: "/images/great-big-beautiful-life-cover.webp",
    rating: 4.5,
    reviewCount: 33,
    price: 18.99,
    originalPrice: 23.99,
    inStock: true,
    category: "romance",
    badge: "Staff Pick"
  },
  {
    id: "the-tenant",
    title: "The Tenant",
    author: "Freida McFadden",
    coverImage: "/images/the-tenant-cover.webp",
    rating: 4.8,
    reviewCount: 39,
    price: 21.99,
    originalPrice: 26.99,
    inStock: true,
    category: "mystery",
    badge: "Thriller"
  },
  {
    id: "remarkably-bright-creatures",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    coverImage: "/images/remarkably-bright-creatures-cover.webp",
    rating: 4.6,
    reviewCount: 35,
    price: 20.99,
    originalPrice: 25.99,
    inStock: true,
    category: "fiction",
    badge: "Award Winner"
  },
]

const categories = ["all", "children", "romance", "mystery", "fiction"]

export default function BooksPage() {
  const [mounted, setMounted] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentSort, setCurrentSort] = useState('relevance');
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchFilters, setSearchFilters] = useState<SearchFiltersType>({
    query: "",
    category: "all",
    priceRange: [0, 100] as [number, number],
    rating: 0,
    format: [],
    author: "",
    inStock: true,
    onSale: false,
  });
  
  const { searchQuery, setSearchQuery } = useContext(SearchContext)
  const { wishlist, toggleWishlist, cart, addToCart, removeFromCart } = useContext(WishlistCartContext)
  const searchParams = useSearchParams()
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Handle search query from URL parameters
  useEffect(() => {
    if (mounted) {
      const urlSearchQuery = searchParams.get('search')
      if (urlSearchQuery && urlSearchQuery !== searchQuery) {
        setSearchQuery(urlSearchQuery)
        setSearchFilters(prev => ({ ...prev, query: urlSearchQuery }))
      }
    }
  }, [searchParams, mounted, searchQuery, setSearchQuery])
  
  // Enhanced filtering logic
  const filteredBooks = books.filter((book) => {
    const query = searchQuery.toLowerCase().trim()
    const title = book.title.toLowerCase()
    const author = book.author.toLowerCase()
    
    // Basic search - only filter if there's a search query
    const matchesQuery = !query || title.includes(query) || author.includes(query)
    
    // Category filter
    const matchesCategory = filterCategory === "all" || book.category === filterCategory
    
    return matchesQuery && matchesCategory
  })
  
  // Sort books
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (currentSort) {
      case 'title-asc':
        return a.title.localeCompare(b.title)
      case 'title-desc':
        return b.title.localeCompare(a.title)
      case 'author-asc':
        return a.author.localeCompare(b.author)
      case 'author-desc':
        return b.author.localeCompare(a.author)
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'rating-desc':
        return b.rating - a.rating
      default:
        return 0
    }
  })
  
  const handleSuggestionSelect = (suggestion: any) => {
    setSearchQuery(suggestion.text)
    setShowSuggestions(false)
  }
  
  const handleFiltersChange = (filters: SearchFiltersType) => {
    setSearchFilters(filters)
    if (filters.query) {
      setSearchQuery(filters.query)
    }
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setShowSuggestions(e.target.value.length > 0)
  }
  
  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">All Books</h1>
          <p className="text-muted-foreground">Browse our full collection</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="group">
              <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Link href={`/books/${book.id}`}>
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                  <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">All Books</h1>
        <p className="text-muted-foreground">Browse our full collection</p>
        {searchQuery && (
          <p className="text-sm text-muted-foreground mt-2">Searching for: "{searchQuery}"</p>
        )}
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by title, author, or ISBN..."
              value={searchQuery}
              onChange={handleSearchInput}
              onFocus={() => setShowSuggestions(searchQuery.length > 0)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={currentSort} onValueChange={setCurrentSort}>
              <SelectTrigger className="w-[140px]">
                <SortAsc className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="title-asc">Title A-Z</SelectItem>
                <SelectItem value="title-desc">Title Z-A</SelectItem>
                <SelectItem value="author-asc">Author A-Z</SelectItem>
                <SelectItem value="author-desc">Author Z-A</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating-desc">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {sortedBooks.length} of {books.length} books
        </p>
      </div>

      {/* Search Suggestions */}
      <div className="relative">
        <SearchSuggestions
          query={searchQuery}
          isVisible={showSuggestions && searchQuery.length > 0}
          onSelect={handleSuggestionSelect}
          onClose={() => setShowSuggestions(false)}
        />
      </div>

      {/* Books Grid/List */}
      <div className={`grid gap-6 ${
        currentView === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {sortedBooks.map((book) => (
          <div key={book.id} className="group">
            <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Link href={`/books/${book.id}`} className="absolute inset-0">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <Button
                  variant={wishlist.includes(book.id) ? "default" : "outline"}
                  size="icon"
                  onClick={() => toggleWishlist(book.id)}
                  aria-label="Add to wishlist"
                  className="absolute top-2 right-2 z-10 h-8 w-8"
                >
                  <Heart fill={wishlist.includes(book.id) ? "#e11d48" : "none"} className="h-4 w-4 text-pink-600" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground text-sm">${book.price}</span>
                    {book.originalPrice > book.price && (
                      <span className="text-xs text-muted-foreground line-through">
                        ${book.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    variant={wishlist.includes(book.id) ? "default" : "outline"}
                    size="icon"
                    onClick={() => toggleWishlist(book.id)}
                    aria-label="Add to wishlist"
                    className="h-8 w-8"
                  >
                    <Heart fill={wishlist.includes(book.id) ? "#e11d48" : "none"} className="h-4 w-4 text-pink-600" />
                  </Button>
                </div>
                <div className="mt-3">
                  <Button
                    variant={cart.includes(book.id) ? "default" : "outline"}
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      cart.includes(book.id)
                        ? removeFromCart(book.id)
                        : addToCart(book.id)
                    }
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    {cart.includes(book.id) ? "Remove from Cart" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {sortedBooks.length === 0 && (
          <div className="col-span-full text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No books found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setFilterCategory("all")
                setCurrentSort("relevance")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Recently Viewed Books */}
      <RecentlyViewed />

      {/* Book Recommendations */}
      <BookRecommendations />
    </div>
  )
}
