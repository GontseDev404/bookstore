"use client"

import { useState, useContext } from "react"
import { Heart, ShoppingCart, Eye, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { BookRating } from "@/components/book/book-rating"
import Link from "next/link"
import Image from "next/image"

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useContext(WishlistCartContext)
  const [isLoading, setIsLoading] = useState(false)

  // Mock wishlist books data
  const wishlistBooks = [
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
      link: "/books/silver-feet-and-her-wonder",
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
      link: "/books/the-monkey-blanket",
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
      link: "/books/fearless",
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
      link: "/books/great-big-beautiful-life",
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
      link: "/books/the-tenant",
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
      link: "/books/remarkably-bright-creatures",
    },
  ]

  const handleAddToCart = async (bookId: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      addToCart(bookId)
      alert("Book added to cart!")
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveFromWishlist = async (bookId: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300))
      toggleWishlist(bookId)
    } catch (error) {
      console.error("Error removing from wishlist:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMoveAllToCart = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      wishlistBooks.forEach(book => {
        if (book.inStock) {
          addToCart(book.id)
        }
      })
      alert("All available books added to cart!")
    } catch (error) {
      console.error("Error moving all to cart:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearWishlist = async () => {
    if (confirm("Are you sure you want to clear your wishlist?")) {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500))
        wishlistBooks.forEach(book => {
          toggleWishlist(book.id)
        })
      } catch (error) {
        console.error("Error clearing wishlist:", error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  // Filter books that are actually in the wishlist
  const filteredWishlistBooks = wishlistBooks.filter(book => wishlist.includes(book.id))

  if (filteredWishlistBooks.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center py-12">
          <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">Start adding books to your wishlist to see them here!</p>
          <Link href="/books">
            <Button className="bg-primary hover:bg-primary/90">
              Browse Books
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Wishlist</h1>
            <p className="text-muted-foreground">Books you've saved for later</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleMoveAllToCart}
              disabled={isLoading}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Move All to Cart
            </Button>
            <Button
              onClick={handleClearWishlist}
              disabled={isLoading}
              variant="outline"
              className="flex items-center gap-2 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">{filteredWishlistBooks.length} book{filteredWishlistBooks.length !== 1 ? 's' : ''} in your wishlist</p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {filteredWishlistBooks.filter(book => book.inStock).length} in stock
            </span>
            <span className="text-sm text-muted-foreground">
              {filteredWishlistBooks.filter(book => !book.inStock).length} out of stock
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredWishlistBooks.map((book) => (
          <Card key={book.id} className="group hover:shadow-lg transition-shadow">
            <div className="relative">
              <Link href={book.link}>
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              
              {/* Stock Status Badge */}
              <Badge 
                className={`absolute top-2 left-2 ${
                  book.inStock 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}
              >
                {book.inStock ? 'In Stock' : 'Out of Stock'}
              </Badge>

              {/* Price Badge */}
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                ${book.price}
              </Badge>

              {/* Action Buttons */}
              <div className="absolute bottom-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleAddToCart(book.id)}
                  disabled={!book.inStock || isLoading}
                  className="h-8 w-8 p-0"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleRemoveFromWishlist(book.id)}
                  disabled={isLoading}
                  className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <CardContent className="p-4">
              <Link href={book.link}>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
              
              <div className="flex items-center justify-between mb-3">
                <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                <div className="text-right">
                  <span className="font-semibold text-foreground">${book.price}</span>
                  {book.originalPrice > book.price && (
                    <span className="text-sm text-muted-foreground line-through ml-1">
                      ${book.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => handleAddToCart(book.id)}
                  disabled={!book.inStock || isLoading}
                  className="flex-1"
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemoveFromWishlist(book.id)}
                  disabled={isLoading}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 