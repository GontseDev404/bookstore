"use client"

import { useState } from "react"
import { AppShell } from "@/components/layout/app-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GuestCheckout } from "@/components/guest-checkout"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { useContext } from "react"
import { WishlistCartContext } from "@/components/wishlist-cart-context"
import { CreditCard, User, Lock, Truck, CheckCircle } from "lucide-react"

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
]

export default function CheckoutPage() {
  const { cart } = useContext(WishlistCartContext)
  const [checkoutStep, setCheckoutStep] = useState<'guest' | 'payment' | 'complete'>('guest')
  const [guestData, setGuestData] = useState(null)

  const cartItems = allBooks.filter(book => cart.includes(book.id))
  const subtotal = cartItems.reduce((sum, book) => sum + book.price, 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  const handleGuestCheckout = (data: any) => {
    setGuestData(data)
    setCheckoutStep('payment')
  }

  const handlePaymentComplete = () => {
    setCheckoutStep('complete')
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-4">
              Add some books to your cart before checking out.
            </p>
            <Button onClick={() => window.history.back()}>
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (checkoutStep === 'complete') {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for your order. You'll receive a confirmation email shortly.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Order #: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p>Estimated delivery: 3-5 business days</p>
            </div>
            <Button className="mt-4" onClick={() => window.location.href = '/'}>
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Checkout Form */}
        <div>
          {checkoutStep === 'guest' ? (
            <GuestCheckout
              onGuestCheckout={handleGuestCheckout}
              onAccountCheckout={() => alert('Account creation coming soon!')}
            />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </CardTitle>
                <CardDescription>
                  Complete your purchase with secure payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Secure Payment</h4>
                        <p className="text-sm text-blue-700">
                          Your payment information is encrypted and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Card Number</label>
                      <input 
                        type="text" 
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-3 border rounded-md mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium">Expiry Date</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY"
                          className="w-full p-3 border rounded-md mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">CVV</label>
                        <input 
                          type="text" 
                          placeholder="123"
                          className="w-full p-3 border rounded-md mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handlePaymentComplete}
                  >
                    Pay ${total.toFixed(2)}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cartItems.map((book) => (
                  <div key={book.id} className="flex gap-3">
                    <div className="w-16 h-20 bg-gray-200 rounded-md flex-shrink-0">
                      <img 
                        src={book.coverImage} 
                        alt={book.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{book.title}</h4>
                      <p className="text-xs text-gray-600">by {book.author}</p>
                      <p className="text-sm font-bold">${book.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Free Shipping</span>
                </div>
                <p className="text-xs text-green-700 mt-1">
                  Orders over $25 ship free. Estimated delivery: 3-5 business days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <NewsletterSignup
            title="Stay Updated"
            description="Get exclusive offers and new release notifications."
            showBenefits={false}
          />
        </div>
      </div>
    </div>
  )
} 