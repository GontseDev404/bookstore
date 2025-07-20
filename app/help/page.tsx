"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Search, 
  Mail, 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ShoppingCart,
  CreditCard,
  Truck,
  Shield,
  RefreshCw,
  User,
  Heart,
  ArrowLeft,
  Home,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // Shopping & Orders
  {
    question: "How do I place an order?",
    answer: "Browse our books, add items to your cart, and proceed to checkout. You can create an account or checkout as a guest. We accept all major credit cards and PayPal.",
    category: "Shopping & Orders"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, Discover, and PayPal. All payments are processed securely through our trusted payment partners.",
    category: "Shopping & Orders"
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "You can modify or cancel your order within 1 hour of placing it. Contact our customer service team immediately if you need to make changes.",
    category: "Shopping & Orders"
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.",
    category: "Shopping & Orders"
  },
  // Shipping & Delivery
  {
    question: "How much does shipping cost?",
    answer: "Standard shipping is $4.99 for orders under $35. Orders $35 and over ship FREE! Express shipping is available for $9.99.",
    category: "Shipping & Delivery"
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. International shipping takes 7-14 business days.",
    category: "Shipping & Delivery"
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location.",
    category: "Shipping & Delivery"
  },
  {
    question: "What if my package is damaged?",
    answer: "If your package arrives damaged, please take photos and contact us within 48 hours. We'll arrange a replacement or refund.",
    category: "Shipping & Delivery"
  },
  // Returns & Refunds
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items in new condition. Some items may have different return policies as noted on the product page.",
    category: "Returns & Refunds"
  },
  {
    question: "How do I return an item?",
    answer: "Log into your account, find your order, and select 'Return Item'. Print the return label and ship the item back to us.",
    category: "Returns & Refunds"
  },
  {
    question: "When will I receive my refund?",
    answer: "Refunds are processed within 3-5 business days after we receive your return. The time to appear on your statement depends on your bank.",
    category: "Returns & Refunds"
  },
  // Account & Security
  {
    question: "How do I create an account?",
    answer: "Click 'Sign Up' in the top navigation. You can create an account with your email address or use your Google/Facebook account.",
    category: "Account & Security"
  },
  {
    question: "I forgot my password. How do I reset it?",
    answer: "Click 'Forgot Password' on the login page. Enter your email address and we'll send you a link to reset your password.",
    category: "Account & Security"
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes! We use industry-standard SSL encryption to protect your personal and payment information. We never store your credit card details.",
    category: "Account & Security"
  },
  // Website & Features
  {
    question: "How do I search for books?",
    answer: "Use the search bar at the top of any page. You can search by title, author, ISBN, or keywords. Use our advanced filters to narrow results.",
    category: "Website & Features"
  },
  {
    question: "How do I add books to my wishlist?",
    answer: "Click the heart icon on any book to add it to your wishlist. You can view your wishlist by clicking the heart icon in the top navigation.",
    category: "Website & Features"
  },
  {
    question: "Can I save my payment information?",
    answer: "Yes! When you create an account, you can save your payment methods for faster checkout. All information is encrypted and secure.",
    category: "Website & Features"
  }
]

const categories = ["All", "Shopping & Orders", "Shipping & Delivery", "Returns & Refunds", "Account & Security", "Website & Features"]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <BreadcrumbPage>Help Center</BreadcrumbPage>
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
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions, get support, and learn how to make the most of BookHaven
            </p>
          </div>
        </div>
        
        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Link href="/settings">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </Link>
          <Link href="/orders">
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Orders
            </Button>
          </Link>
          <Link href="/books">
            <Button variant="outline" size="sm">
              <BookOpen className="h-4 w-4 mr-2" />
              Browse Books
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-lg py-6"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <ShoppingCart className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Order Status</h3>
            <p className="text-sm text-muted-foreground">Track your orders and view order history</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <RefreshCw className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Returns</h3>
            <p className="text-sm text-muted-foreground">Start a return or exchange</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <User className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Account</h3>
            <p className="text-sm text-muted-foreground">Manage your account settings</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-muted-foreground">Get in touch with our team</p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader 
                className="pb-3 cursor-pointer"
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      {item.category}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-4">
                    {expandedItems.has(index) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              {expandedItems.has(index) && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No help articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse all categories
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>

      <Separator className="my-12" />

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Still Need Help?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Get a response within 24 hours</p>
              <Button variant="outline" className="w-full">
                support@bookhaven.com
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Available Mon-Fri, 9AM-6PM EST</p>
              <Button variant="outline" className="w-full">
                1-800-BOOKS-1
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">Chat with us in real-time</p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Store Information */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">Visit Our Store</h3>
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Book Street, Reading City, RC 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 