"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, ArrowRight, Play, Pause, BookOpen, Headphones, Award, TrendingUp, Clock, Users, Eye, Bookmark, Share2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookRating } from "@/components/book/book-rating"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { Carousel, CarouselSlide } from '@/components/Carousel';

export default function HomePage() {
  const { wishlist, toggleWishlist, cart, addToCart } = useContext(WishlistCartContext)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Hero carousel data
  const heroSlides: CarouselSlide[] = [
    {
      id: 'mark-twain',
      title: 'MARK TWAIN',
      author: 'Ron Chernow',
      description: "Dive deep into the life of one of America's literary geniuses through the eyes of a master biographer.",
      image: '/images/mark-twain-cover.webp',
      link: '/books/mark-twain',
      badge: '$5 OFF',
      type: 'Deals',
    },
    {
      id: 'fearless',
      title: 'FEARLESS',
      author: 'Lauren Roberts',
      description: 'A gripping tale of courage and resilience in the face of adversity.',
      image: '/images/fearless-cover.webp',
      link: '/books/fearless',
      badge: 'NEW',
      type: 'New Release',
    },
    {
      id: 'the-tenant',
      title: 'THE TENANT',
      author: 'Freida McFadden',
      description: 'A psychological thriller that will keep you guessing until the very end.',
      image: '/images/the-tenant-cover.webp',
      link: '/books/the-tenant',
      badge: 'BESTSELLER',
      type: 'Bestseller',
    },
    {
      id: 'silver-feet-and-her-wonder',
      title: 'SILVER FEET AND HER WONDER',
      author: 'Nana Ndlovana-Mthimkhulu',
      description: 'A captivating story of wonder and discovery that will enchant readers of all ages.',
      image: '/images/silver-feet-cover.png',
      link: '/books/silver-feet-and-her-wonder',
      badge: 'FEATURED',
      type: 'Featured',
    },
  ];

  // Use slides in fixed order to prevent hydration mismatch
  const slides = heroSlides

  // Featured books data
  const featuredBooks = [
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
      link: "/books/the-monkey-blanket",
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
      link: "/books/fearless",
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
      link: "/books/great-big-beautiful-life",
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
      link: "/books/the-tenant",
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
      link: "/books/remarkably-bright-creatures",
      badge: "Award Winner"
    }
  ]

  // Categories data
  const categories = [
    { name: "Fiction", icon: BookOpen, count: "2.5k", color: "bg-blue-500", link: "/categories/fiction" },
    { name: "Non-Fiction", icon: BookOpen, count: "1.8k", color: "bg-green-500", link: "/categories/nonfiction" },
    { name: "Audiobooks", icon: Headphones, count: "1.2k", color: "bg-purple-500", link: "/audiobooks" },
    { name: "Children's", icon: BookOpen, count: "950", color: "bg-yellow-500", link: "/categories/children" },
    { name: "Academic", icon: BookOpen, count: "750", color: "bg-red-500", link: "/categories/academic" },
    { name: "Magazines", icon: BookOpen, count: "500", color: "bg-indigo-500", link: "/categories/magazines" }
  ]

  // Stats data
  const stats = [
    { label: "Books Available", value: "50,000+", icon: BookOpen },
    { label: "Happy Customers", value: "100,000+", icon: Users },
    { label: "Audiobooks", value: "15,000+", icon: Headphones },
    { label: "Fast Delivery", value: "24-48h", icon: Clock }
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying, slides.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        handlePreviousSlide()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        handleNextSlide()
      } else if (event.key === ' ') {
        event.preventDefault()
        setIsPlaying(!isPlaying)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPlaying])

  // Touch/swipe support
  useEffect(() => {
    let startX = 0
    let endX = 0

    const handleTouchStart = (e: Event) => {
      const touchEvent = e as TouchEvent
      startX = touchEvent.touches[0].clientX
    }

    const handleTouchEnd = (e: Event) => {
      const touchEvent = e as TouchEvent
      endX = touchEvent.changedTouches[0].clientX
      const diff = startX - endX
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          handleNextSlide()
        } else {
          handlePreviousSlide()
        }
      }
    }

    const slideshowElement = document.querySelector('.slideshow-container')
    if (slideshowElement) {
      slideshowElement.addEventListener('touchstart', handleTouchStart)
      slideshowElement.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (slideshowElement) {
        slideshowElement.removeEventListener('touchstart', handleTouchStart)
        slideshowElement.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index)
  }

  const handleAddToCart = (bookId: string) => {
    if (!cart.includes(bookId)) {
      addToCart(bookId)
    }
  }

  const handleToggleWishlist = (bookId: string) => {
    toggleWishlist(bookId)
  }

  const mockBooks = [
    { id: "silver-feet-and-her-wonder", title: "Silver Feet and Her Wonder", author: "Nana Ndlovana-Mthimkhulu", coverImage: "/images/silver-feet-cover.png", rating: 4.8, reviewCount: 37, price: 24.99, originalPrice: 29.99, stock: 10, link: "/books/silver-feet-and-her-wonder", badge: "NEW" },
    { id: "the-monkey-blanket", title: "The Monkey Blanket", author: "Nana Ndlovana-Mthimkhulu", coverImage: "/images/the-monkey-blanket-cover.png", rating: 4.9, reviewCount: 45, price: 19.99, originalPrice: 24.99, stock: 0, link: "/books/the-monkey-blanket", badge: "BESTSELLER" },
    { id: "fearless", title: "Fearless", author: "Lauren Roberts", coverImage: "/images/fearless-cover.webp", rating: 4.9, reviewCount: 41, price: 29.99, originalPrice: 34.99, stock: 5, link: "/books/fearless", badge: "DEAL" },
  ];

  return (
    <div className="min-h-screen">
      <Carousel
        slides={heroSlides}
        currentSlide={currentSlide}
        isPlaying={isPlaying}
        wishlist={wishlist}
        onSlideChange={setCurrentSlide}
        onPlayPause={() => setIsPlaying((prev) => !prev)}
        onPrev={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        onNext={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Featured Books Section */}
      <section className="py-8 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Featured Books</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Discover our handpicked selection of must-read titles</p>
            </div>
            <Link href="/books">
              <Button variant="outline" className="w-full sm:w-auto">
                View All Books
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6">
            {mockBooks.map((book) => (
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
                  
                  {/* Badge */}
                  <Badge className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-primary text-primary-foreground text-xs">
                    {book.badge}
                  </Badge>

                  {/* Stock Status */}
                  <Badge 
                    className={`absolute top-1 right-1 sm:top-2 sm:right-2 text-xs ${
                      book.stock > 0 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {book.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Badge>

                  {/* Action Buttons */}
                  <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleAddToCart(book.id)}
                      disabled={book.stock === 0}
                      data-track-add-to-cart={book.id}
                      className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                    >
                      <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleToggleWishlist(book.id)}
                      className={`h-6 w-6 sm:h-8 sm:w-8 p-0 ${
                        wishlist.includes(book.id) 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'hover:text-red-500'
                      }`}
                    >
                      <Heart 
                        className="h-3 w-3 sm:h-4 sm:w-4" 
                        fill={wishlist.includes(book.id) ? "currentColor" : "none"}
                      />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-2 sm:p-4">
                  <Link href={book.link}>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-xs sm:text-sm">
                      {book.title}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">{book.author}</p>
                  
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                    <div className="text-right min-w-0 flex-shrink-0 ml-2">
                      <div className="flex flex-col items-end">
                        <span className="font-semibold text-foreground text-xs sm:text-sm truncate">${book.price}</span>
                        {book.originalPrice > book.price && (
                          <span className="text-xs text-muted-foreground line-through truncate">
                            ${book.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 sm:gap-2">
                    <Button
                      onClick={() => handleAddToCart(book.id)}
                      disabled={book.stock === 0}
                      data-track-add-to-cart={book.id}
                      className="flex-1 text-xs"
                      size="sm"
                    >
                      <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleWishlist(book.id)}
                      className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                    >
                      <Heart 
                        className="h-3 w-3 sm:h-4 sm:w-4" 
                        fill={wishlist.includes(book.id) ? "currentColor" : "none"}
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Find your next favorite book in our curated categories</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.link}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-3 sm:p-6">
                    <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-xs sm:text-sm">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count} books</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">{stat.value}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-8 sm:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Stay Updated</h2>
          <p className="text-primary-foreground/80 mb-4 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Get notified about new releases, exclusive deals, and reading recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 sm:px-4 py-2 rounded-md text-foreground text-sm sm:text-base"
            />
            <Button variant="secondary" className="bg-card text-primary hover:bg-card/90 text-sm sm:text-base">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}