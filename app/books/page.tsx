"use client"

import Image from "next/image"
import Link from "next/link"
import { AppShell } from "@/components/layout/app-shell"
import { BookRating } from "@/components/book/book-rating"
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { SearchContext } from "@/components/search-context"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    category: "children",
  },
  {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/the-monkey-blanket-cover.png",
    rating: 4.9,
    reviewCount: 45,
    price: 22.99,
    category: "children",
  },
  {
    id: "fearless",
    title: "Fearless",
    author: "Lauren Roberts",
    coverImage: "/images/fearless-cover.webp",
    rating: 4.9,
    reviewCount: 41,
    price: 29.99,
    category: "romance",
  },
  {
    id: "great-big-beautiful-life",
    title: "Great Big Beautiful Life",
    author: "Emily Henry",
    coverImage: "/images/great-big-beautiful-life-cover.webp",
    rating: 4.5,
    reviewCount: 33,
    price: 26.99,
    category: "romance",
  },
  {
    id: "the-tenant",
    title: "The Tenant",
    author: "Freida McFadden",
    coverImage: "/images/the-tenant-cover.webp",
    rating: 4.8,
    reviewCount: 39,
    price: 27.99,
    category: "mystery",
  },
  {
    id: "remarkably-bright-creatures",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    coverImage: "/images/remarkably-bright-creatures-cover.webp",
    rating: 4.6,
    reviewCount: 35,
    price: 25.99,
    category: "fiction",
  },
]

export default function BooksPage() {
  const [mounted, setMounted] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentSort, setCurrentSort] = useState('relevance');
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [searchFilters, setSearchFilters] = useState<SearchFiltersType>({
    query: "",
    category: "",
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
    const query = searchQuery.toLowerCase()
    const title = book.title.toLowerCase()
    const author = book.author.toLowerCase()
    
    // Basic search
    const matchesQuery = title.includes(query) || author.includes(query)
    
    // Advanced filters
    const matchesCategory = searchFilters.category === "all" || book.category === searchFilters.category
    const matchesAuthor = !searchFilters.author || author.includes(searchFilters.author.toLowerCase())
    const matchesRating = book.rating >= searchFilters.rating
    const matchesPrice = book.price >= searchFilters.priceRange[0] && book.price <= searchFilters.priceRange[1]
    
    return matchesQuery && matchesCategory && matchesAuthor && matchesRating && matchesPrice
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
  
  if (!mounted) {
    return (
      <AppShell>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Books</h1>
            <p className="text-gray-600">Browse our full collection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppShell>
    );
  }
  
  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Books</h1>
          <p className="text-gray-600">Browse our full collection</p>
          {searchQuery && (
            <p className="text-sm text-gray-500 mt-2">Searching for: "{searchQuery}"</p>
          )}
        </div>

        {/* Enhanced Search Results Header */}
        <SearchResults
          resultsCount={sortedBooks.length}
          onSortChange={setCurrentSort}
          onViewChange={setCurrentView}
          onFiltersToggle={() => setShowFilters(!showFilters)}
          currentSort={currentSort}
          currentView={currentView}
        />

        {/* Advanced Filters */}
        <SearchFilters
          onFiltersChange={handleFiltersChange}
          isOpen={showFilters}
          onToggle={() => setShowFilters(!showFilters)}
        />

        {/* Search Suggestions */}
        <SearchSuggestions
          query={searchQuery}
          isVisible={showSuggestions && searchQuery.length > 0}
          onSelect={handleSuggestionSelect}
          onClose={() => setShowSuggestions(false)}
        />

        {/* Books Grid/List */}
        <div className={`grid gap-6 ${
          currentView === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {sortedBooks.map((book) => (
            <div key={book.id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    className="absolute top-2 right-2 z-10"
                    onClick={() => toggleWishlist(book.id)}
                    aria-label="Add to wishlist"
                  >
                    <Heart fill={wishlist.includes(book.id) ? "#e11d48" : "none"} className="h-5 w-5 text-pink-600" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                  <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  <div className="mt-4 flex gap-2">
                    <Button
                      variant={cart.includes(book.id) ? "default" : "outline"}
                      size="sm"
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
            <div className="col-span-full text-center text-gray-500">No books found.</div>
          )}
        </div>

        {/* Recently Viewed Books */}
        <RecentlyViewed />

        {/* Book Recommendations */}
        <BookRecommendations />
      </div>
    </AppShell>
  )
}
