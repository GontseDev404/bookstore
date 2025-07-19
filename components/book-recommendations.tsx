"use client"

import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { BookRating } from "@/components/book/book-rating"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import { WishlistCartContext } from "@/components/wishlist-cart-context"

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
}

// Sample book database with categories and tags for recommendations
const allBooks: Book[] = [
  {
    id: "silver-feet-and-her-wonder",
    title: "Silver Feet and Her Wonder",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/silver-feet-cover.png",
    rating: 4.8,
    reviewCount: 37,
    price: 24.99,
    category: "children",
    tags: ["children", "adventure", "family", "african"]
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
    tags: ["children", "adventure", "family", "african"]
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
    tags: ["romance", "fantasy", "young-adult", "adventure"]
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
    tags: ["romance", "contemporary", "women-fiction", "humor"]
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
    tags: ["mystery", "thriller", "suspense", "psychological"]
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
    tags: ["fiction", "literary", "family", "emotional"]
  },
  {
    id: "emperor-of-gladness",
    title: "The Emperor of Gladness",
    author: "Ocean Vuong",
    coverImage: "/images/the-emperor-of-gladness-cover.webp",
    rating: 4.9,
    reviewCount: 42,
    price: 28.99,
    category: "fiction",
    tags: ["fiction", "literary", "poetry", "asian-american"]
  },
  {
    id: "run-for-the-hills",
    title: "Run for the Hills",
    author: "Kevin Wilson",
    coverImage: "/images/run-for-the-hills-cover.webp",
    rating: 4.7,
    reviewCount: 36,
    price: 24.99,
    category: "fiction",
    tags: ["fiction", "humor", "family", "contemporary"]
  },
  {
    id: "speak-to-me-of-home",
    title: "Speak to Me of Home",
    author: "Jeanine Cummins",
    coverImage: "/images/speak-to-me-of-home-cover.webp",
    rating: 4.6,
    reviewCount: 31,
    price: 26.99,
    category: "fiction",
    tags: ["fiction", "immigration", "family", "drama"]
  },
  {
    id: "sleep",
    title: "Sleep: A Novel",
    author: "Honor Jones",
    coverImage: "/images/sleep-cover.webp",
    rating: 4.4,
    reviewCount: 28,
    price: 23.99,
    category: "fiction",
    tags: ["fiction", "literary", "contemporary", "family"]
  },
  {
    id: "marble-hall-murders",
    title: "Marble Hall Murders",
    author: "Anthony Horowitz",
    coverImage: "/images/marble-hall-murders-cover.webp",
    rating: 4.8,
    reviewCount: 39,
    price: 27.99,
    category: "mystery",
    tags: ["mystery", "detective", "british", "historical"]
  },
  {
    id: "big-dumb-eyes",
    title: "Big Dumb Eyes: Stories from a Comedian",
    author: "Nate Bargatze",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%286%29-RTR1mIiouECBNXhGHvnA1jkty7ROcf.webp",
    rating: 4.5,
    reviewCount: 32,
    price: 24.99,
    category: "humor",
    tags: ["humor", "comedy", "memoir", "stand-up"]
  }
]

export function BookRecommendations({ title = "You might also like", maxItems = 6 }: BookRecommendationsProps) {
  const { wishlist, toggleWishlist, cart, addToCart, removeFromCart } = useContext(WishlistCartContext)

  // Get user's current interests from cart and wishlist
  const userBooks = [...wishlist, ...cart]
  const userBookData = allBooks.filter(book => userBooks.includes(book.id))

  // Generate recommendations based on user's interests
  const getRecommendations = (): Book[] => {
    if (userBookData.length === 0) {
      // If no user data, return popular books
      return allBooks
        .sort((a, b) => b.rating - a.rating)
        .slice(0, maxItems)
    }

    // Extract user's interests (categories and tags)
    const userCategories = new Set(userBookData.map(book => book.category))
    const userTags = new Set(userBookData.flatMap(book => book.tags))

    // Score books based on user's interests
    const scoredBooks = allBooks
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">Based on your interests and selections</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {recommendations.map((book) => (
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
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600 mb-1">{book.author}</p>
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