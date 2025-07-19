"use client"

import Image from "next/image"
import Link from "next/link"
import { AppShell } from "@/components/layout/app-shell"
import { BookRating } from "@/components/book/book-rating"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { WishlistCartContext } from "@/components/wishlist-cart-context"

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

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false)
  const { wishlist, toggleWishlist, cart, addToCart, removeFromCart } = useContext(WishlistCartContext)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter books that are in the wishlist
  const wishlistBooks = allBooks.filter(book => wishlist.includes(book.id))

  if (!mounted) {
    return (
      <AppShell>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-gray-600">Books you've saved for later</p>
          </div>
          <div className="text-center py-8">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">Books you've saved for later</p>
        </div>

        {wishlistBooks.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Start adding books to your wishlist to see them here!</p>
            <Link href="/books">
              <Button>Browse Books</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">{wishlistBooks.length} book{wishlistBooks.length !== 1 ? 's' : ''} in your wishlist</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  wishlistBooks.forEach(book => {
                    if (!cart.includes(book.id)) {
                      addToCart(book.id)
                    }
                  })
                }}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add All to Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistBooks.map((book) => (
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
                        variant="default"
                        size="icon"
                        className="absolute top-2 right-2 z-10"
                        onClick={() => toggleWishlist(book.id)}
                        aria-label="Remove from wishlist"
                      >
                        <Heart fill="#e11d48" className="h-5 w-5 text-pink-600" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                      <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">${book.price}</span>
                        <div className="flex gap-2">
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
                            {cart.includes(book.id) ? "In Cart" : "Add to Cart"}
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => toggleWishlist(book.id)}
                            aria-label="Remove from wishlist"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </AppShell>
  )
} 