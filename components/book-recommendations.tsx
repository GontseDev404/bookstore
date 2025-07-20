"use client"

import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { BookRating } from "@/components/book/book-rating"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { getAllBooks } from "@/lib/book-data"

interface Book {
  id: string
  title: string
  author: string
  coverImage: string
  rating: number
  reviewCount: number
  price: number
  category: string
  tags: string[]
}

interface BookRecommendationsProps {
  title?: string
  maxItems?: number
  excludeBooks?: string[] // Array of book IDs to exclude from recommendations
}

// Get all books from centralized data source
const allBooksData = getAllBooks()

// Transform centralized data to match the expected format
const allBooks: Book[] = allBooksData.map(book => ({
  id: book.id,
  title: book.title,
  author: book.author,
  coverImage: book.coverImage,
  rating: book.rating,
  reviewCount: book.reviewCount,
  price: book.formats[0]?.price || 0,
  category: "fiction", // Default category
  tags: ["fiction", "literary"] // Default tags
}))

export function BookRecommendations({ 
  title = "You might also like", 
  maxItems = 6,
  excludeBooks = []
}: BookRecommendationsProps) {
  const { wishlist, toggleWishlist, cart, addToCart, removeFromCart } = useContext(WishlistCartContext)

  // Get user's current interests from cart and wishlist
  const userBooks = [...wishlist, ...cart]
  const userBookData = allBooks.filter(book => userBooks.includes(book.id))

  // Generate recommendations based on user's interests
  const getRecommendations = (): Book[] => {
    // Filter out books that should be excluded (e.g., already shown in main list)
    const availableBooks = allBooks.filter(book => !excludeBooks.includes(book.id))
    
    if (userBookData.length === 0) {
      // If no user data, return popular books (excluding already shown books)
      return availableBooks
        .sort((a, b) => b.rating - a.rating)
        .slice(0, maxItems)
    }

    // Extract user's interests (categories and tags)
    const userCategories = new Set(userBookData.map(book => book.category))
    const userTags = new Set(userBookData.flatMap(book => book.tags))

    // Score books based on user's interests
    const scoredBooks = availableBooks
      .filter(book => !userBooks.includes(book.id)) // Exclude already owned books
      .map(book => {
        let score = 0
        
        // Category match
        if (userCategories.has(book.category)) {
          score += 3
        }
        
        // Tag matches
        const matchingTags = book.tags.filter(tag => userTags.has(tag))
        score += matchingTags.length * 2
        
        // Rating bonus
        score += book.rating * 0.5
        
        return { ...book, score }
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, maxItems)

    return scoredBooks
  }

  const recommendations = getRecommendations()

  if (recommendations.length === 0) {
    return null
  }

  return (
    <div className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">Based on your interests and selections</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {recommendations.map((book) => (
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
                  className="absolute top-2 right-2 z-10"
                  onClick={() => toggleWishlist(book.id)}
                  aria-label="Add to wishlist"
                >
                  <Heart fill={wishlist.includes(book.id) ? "#e11d48" : "none"} className="h-5 w-5 text-pink-600" />
                </Button>
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