"use client"

import Image from "next/image"
import Link from "next/link"
import { AppShell } from "@/components/layout/app-shell"
import { BookRating } from "@/components/book/book-rating"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart, Trash2, Minus, Plus, CreditCard, Truck, User, ArrowLeft, Home, Heart } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { GuestCheckout } from "@/components/guest-checkout"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

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

export default function CartPage() {
  const [mounted, setMounted] = useState(false)
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [showGuestCheckout, setShowGuestCheckout] = useState(false)
  const { cart, removeFromCart } = useContext(WishlistCartContext)

  useEffect(() => {
    setMounted(true)
    // Initialize quantities for cart items
    const initialQuantities: Record<string, number> = {}
    cart.forEach(itemId => {
      initialQuantities[itemId] = (initialQuantities[itemId] || 0) + 1
    })
    setQuantities(initialQuantities)
  }, [cart])

  // Filter books that are in the cart
  const cartBooks = allBooks.filter(book => cart.includes(book.id))

  // Calculate totals
  const subtotal = cartBooks.reduce((total, book) => {
    const quantity = quantities[book.id] || 1
    return total + (book.price * quantity)
  }, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const updateQuantity = (bookId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(bookId)
      const newQuantities = { ...quantities }
      delete newQuantities[bookId]
      setQuantities(newQuantities)
    } else {
      setQuantities(prev => ({ ...prev, [bookId]: newQuantity }))
    }
  }

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your items and proceed to checkout</p>
        </div>
        <div className="text-center py-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

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
            <BreadcrumbPage>Shopping Cart</BreadcrumbPage>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">Review your items and proceed to checkout</p>
          </div>
        </div>
        
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/books">
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <Link href="/wishlist">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </Button>
          </Link>
          <Link href="/deals">
            <Button variant="outline" size="sm">
              <Truck className="h-4 w-4 mr-2" />
              Deals
            </Button>
          </Link>
          <Link href="/help">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Help
            </Button>
          </Link>
        </div>
      </div>

      {cartBooks.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Start shopping to add items to your cart!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/books">
              <Button>Browse Books</Button>
            </Link>
            <Link href="/popular">
              <Button variant="outline">Popular Books</Button>
            </Link>
            <Link href="/new-releases">
              <Button variant="outline">New Releases</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Cart Items ({cartBooks.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartBooks.map((book) => (
                  <div key={book.id} className="flex gap-4 p-4 border rounded-lg">
                    <div className="relative w-20 h-28 flex-shrink-0">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{book.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                      <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(book.id, (quantities[book.id] || 1) - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center">{quantities[book.id] || 1}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(book.id, (quantities[book.id] || 1) + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-primary">
                            ${((book.price * (quantities[book.id] || 1)).toFixed(2))}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeFromCart(book.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cartBooks.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="standard" name="shipping" defaultChecked />
                  <Label htmlFor="standard">Standard Shipping (3-5 days) - FREE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="express" name="shipping" />
                  <Label htmlFor="express">Express Shipping (1-2 days) - $9.99</Label>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Button className="w-full" size="lg">
                <CreditCard className="h-4 w-4 mr-2" />
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setShowGuestCheckout(true)}>
                <User className="h-4 w-4 mr-2" />
                Guest Checkout
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showGuestCheckout} onOpenChange={setShowGuestCheckout}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Guest Checkout</DialogTitle>
            <DialogDescription>
              Complete your purchase without creating an account. Your information will be saved for future orders.
            </DialogDescription>
          </DialogHeader>
          <GuestCheckout
            onGuestCheckout={(guestData) => {
              console.log('Guest checkout data:', guestData)
              alert('Guest checkout completed! (Demo)')
              setShowGuestCheckout(false)
            }}
            onAccountCheckout={() => {
              alert('Redirecting to account creation...')
              setShowGuestCheckout(false)
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
} 