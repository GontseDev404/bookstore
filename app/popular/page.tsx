"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, ShoppingCart, Search, Filter, SortAsc, ArrowLeft, Home, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { useContext } from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

// Popular books data
const popularBooks = [
  {
    id: "mark-twain",
    title: "Mark Twain",
    author: "Ron Chernow",
    price: 29.99,
    rating: 4.8,
    reviews: 1247,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32256_SkinnyHero_MarkTwain_05_13_25.jpg-ieGy9Wrk3iHupSOYgAaVRF0HwO4j9R.jpeg",
    category: "Biography",
    isNew: true,
    isBestseller: true,
    description: "A comprehensive biography of America's most beloved author and humorist."
  },
  {
    id: "remarkably-bright-creatures",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    price: 24.99,
    rating: 4.6,
    reviews: 892,
    image: "/images/remarkably-bright-creatures-cover.webp",
    category: "Fiction",
    isNew: false,
    isBestseller: true,
    description: "A heartwarming story about unlikely friendships and second chances."
  },
  {
    id: "the-murderbot-diaries",
    title: "The Murderbot Diaries",
    author: "Martha Wells",
    price: 19.99,
    rating: 4.7,
    reviews: 1563,
    image: "/images/murderbot-diaries-cover.webp",
    category: "Science Fiction",
    isNew: false,
    isBestseller: true,
    description: "A thrilling series about a self-aware security android."
  },
  {
    id: "native-nations",
    title: "Native Nations",
    author: "Kathleen DuVal",
    price: 32.99,
    rating: 4.5,
    reviews: 445,
    image: "/images/native-nations-cover.webp",
    category: "History",
    isNew: false,
    isBestseller: true,
    description: "A groundbreaking history of Native American nations."
  },
  {
    id: "the-emperor-of-gladness",
    title: "The Emperor of Gladness",
    author: "Robert McGill",
    price: 26.99,
    rating: 4.4,
    reviews: 678,
    image: "/images/the-emperor-of-gladness-cover.webp",
    category: "Fiction",
    isNew: false,
    isBestseller: true,
    description: "A novel about art, ambition, and the search for meaning."
  },
  {
    id: "the-tenant",
    title: "The Tenant",
    author: "Katy Loutzenhiser",
    price: 22.99,
    rating: 4.3,
    reviews: 523,
    image: "/images/the-tenant-cover.webp",
    category: "Mystery",
    isNew: false,
    isBestseller: true,
    description: "A gripping psychological thriller about secrets and lies."
  },
  {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Sarah Crossan",
    price: 18.99,
    rating: 4.6,
    reviews: 789,
    image: "/images/the-monkey-blanket-cover.png",
    category: "Children's",
    isNew: false,
    isBestseller: true,
    description: "A touching story about family, love, and the power of imagination."
  },
  {
    id: "we-can-do-hard-things",
    title: "We Can Do Hard Things",
    author: "Glennon Doyle",
    price: 25.99,
    rating: 4.7,
    reviews: 2341,
    image: "/images/we-can-do-hard-things-cover.webp",
    category: "Self-Help",
    isNew: false,
    isBestseller: true,
    description: "Inspirational wisdom for navigating life's challenges."
  }
]

export default function PopularBooksPage() {
  const { addToCart, toggleWishlist, cart, wishlist } = useContext(WishlistCartContext)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popularity")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filteredBooks, setFilteredBooks] = useState(popularBooks)

  // Filter and sort books
  useEffect(() => {
    let filtered = popularBooks.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = filterCategory === "all" || book.category === filterCategory
      return matchesSearch && matchesCategory
    })

    // Sort books
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "reviews":
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
      case "popularity":
      default:
        // Keep original order (already sorted by popularity)
        break
    }

    setFilteredBooks(filtered)
  }, [searchQuery, sortBy, filterCategory])

  const categories = ["all", ...Array.from(new Set(popularBooks.map(book => book.category)))]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Popular Books</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header with Back Navigation */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Popular Books</h1>
            <p className="text-muted-foreground">Discover the most loved and talked-about books of the moment</p>
          </div>
        </div>
        
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/bestsellers">
            <Button variant="outline" size="sm">
              <Star className="h-4 w-4 mr-2" />
              Bestsellers
            </Button>
          </Link>
          <Link href="/new-releases">
            <Button variant="outline" size="sm">
              <Badge className="h-4 w-4 mr-2" />
              New Releases
            </Button>
          </Link>
          <Link href="/categories">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Categories
            </Button>
          </Link>
          <Link href="/deals">
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Deals
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search popular books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px]">
                <SortAsc className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviewed</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredBooks.length} of {popularBooks.length} popular books
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map((book) => {
          const isInCart = cart.includes(book.id)
          const isInWishlist = wishlist.includes(book.id)

          return (
            <Card key={book.id} className="group hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="relative">
                  <Link href={`/books/${book.id}`}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  </Link>
                  <div className="absolute top-2 left-2 flex gap-1">
                    {book.isNew && (
                      <Badge variant="secondary" className="text-xs">
                        New
                      </Badge>
                    )}
                    {book.isBestseller && (
                      <Badge variant="destructive" className="text-xs">
                        Bestseller
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div>
                    <Link href={`/books/${book.id}`} className="hover:text-primary">
                      <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{book.rating}</span>
                    <span className="text-sm text-muted-foreground">({book.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">${book.price}</span>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleWishlist(book.id)}
                        className={`h-8 w-8 ${isInWishlist ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'}`}
                      >
                        <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => addToCart(book.id)}
                        className={`h-8 w-8 ${isInCart ? 'text-green-500' : 'text-muted-foreground hover:text-green-500'}`}
                      >
                        <ShoppingCart className={`h-4 w-4 ${isInCart ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
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
              setSortBy("popularity")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
} 