"use client"

import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { BookRating } from "@/components/book/book-rating"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Clock } from "lucide-react"
import { WishlistCartContext } from "@/components/wishlist-cart-context"

interface RecentlyViewedBook {
  id: string
  title: string
  author: string
  coverImage: string
  rating: number
  reviewCount: number
  price: number
  viewedAt: number
}

interface RecentlyViewedProps {
  maxItems?: number
}

const allBooks = [
  {
    id: "silver-feet-and-her-wonder",
    title: "Silver Feet and Her Wonder",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/silver-feet-cover.png",
    rating: 4.8,
    reviewCount: 37,
    price: 24.99,
  },
  {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/the-monkey-blanket-cover.png",
    rating: 4.9,
    reviewCount: 45,
    price: 22.99,
  },
  {
    id: "fearless",
    title: "Fearless",
    author: "Lauren Roberts",
    coverImage: "/images/fearless-cover.webp",
    rating: 4.9,
    reviewCount: 41,
    price: 29.99,
  },
  {
    id: "great-big-beautiful-life",
    title: "Great Big Beautiful Life",
    author: "Emily Henry",
    coverImage: "/images/great-big-beautiful-life-cover.webp",
    rating: 4.5,
    reviewCount: 33,
    price: 26.99,
  },
  {
    id: "the-tenant",
    title: "The Tenant",
    author: "Freida McFadden",
    coverImage: "/images/the-tenant-cover.webp",
    rating: 4.8,
    reviewCount: 39,
    price: 27.99,
  },
  {
    id: "remarkably-bright-creatures",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    coverImage: "/images/remarkably-bright-creatures-cover.webp",
    rating: 4.6,
    reviewCount: 35,
    price: 25.99,
  },
]

export function RecentlyViewed({ maxItems = 6 }: RecentlyViewedProps) {
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedBook[]>([])
  const { wishlist, toggleWishlist, cart, addToCart, removeFromCart } = useContext(WishlistCartContext)

  // Load recently viewed books from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewedBooks')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setRecentlyViewed(parsed.slice(0, maxItems))
      } catch (error) {
        console.error('Error parsing recently viewed books:', error)
      }
    }
  }, [maxItems])

  // Add book to recently viewed
  const addToRecentlyViewed = (bookId: string) => {
    const book = allBooks.find(b => b.id === bookId)
    if (!book) return

    const newRecentlyViewed = [
      {
        ...book,
        viewedAt: Date.now()
      },
      ...recentlyViewed.filter(b => b.id !== bookId)
    ].slice(0, maxItems)

    setRecentlyViewed(newRecentlyViewed)
    localStorage.setItem('recentlyViewedBooks', JSON.stringify(newRecentlyViewed))
  }

  // Format time ago
  const getTimeAgo = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    return 'Just now'
  }

  if (recentlyViewed.length === 0) {
    return null
  }

  return (
    <div className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          Recently Viewed
        </h2>
        <p className="text-muted-foreground">Books you've looked at recently</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {recentlyViewed.map((book) => (
          <div key={book.id} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Link 
                  href={`/books/${book.id}`} 
                  className="absolute inset-0"
                  onClick={() => addToRecentlyViewed(book.id)}
                >
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
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {getTimeAgo(book.viewedAt)}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-1">{book.author}</p>
                <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">${book.price}</span>
                  <Button
                    variant={cart.includes(book.id) ? "default" : "outline"}
                    size="sm"
                    className="h-6 px-2 text-xs"
                    onClick={() =>
                      cart.includes(book.id)
                        ? removeFromCart(book.id)
                        : addToCart(book.id)
                    }
                  >
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    {cart.includes(book.id) ? "In Cart" : "Add"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Hook to track book views
export function useTrackBookView() {
  return (bookId: string) => {
    const book = allBooks.find(b => b.id === bookId)
    if (!book) return

    const stored = localStorage.getItem('recentlyViewedBooks')
    const recentlyViewed = stored ? JSON.parse(stored) : []
    
    const newRecentlyViewed = [
      {
        ...book,
        viewedAt: Date.now()
      },
      ...recentlyViewed.filter((b: any) => b.id !== bookId)
    ].slice(0, 6) // Keep only 6 most recent

    localStorage.setItem('recentlyViewedBooks', JSON.stringify(newRecentlyViewed))
  }
} 