"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronUp, HelpCircle, ShoppingBag, Truck, RotateCcw, Shield, User, Globe, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const faqData: FAQItem[] = [
    // Shopping & Orders
    {
      id: "1",
      question: "How do I place an order?",
      answer: "Browse our books, add items to your cart, and proceed to checkout. You can create an account or checkout as a guest. We accept all major credit cards and PayPal.",
      category: "Shopping & Orders",
      tags: ["order", "checkout", "payment"]
    },
    {
      id: "2",
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 1 hour of placing it. Contact our customer service team immediately if you need to make changes.",
      category: "Shopping & Orders",
      tags: ["order", "cancel", "modify"]
    },
    {
      id: "3",
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.",
      category: "Shopping & Orders",
      tags: ["tracking", "order", "shipping"]
    },
    {
      id: "4",
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, American Express, Discover, PayPal, and Apple Pay. All payments are processed securely.",
      category: "Shopping & Orders",
      tags: ["payment", "credit card", "paypal"]
    },

    // Shipping & Delivery
    {
      id: "5",
      question: "How much does shipping cost?",
      answer: "Standard shipping is $4.99 for orders under $35. Orders $35 and over ship FREE! Express shipping is available for $9.99.",
      category: "Shipping & Delivery",
      tags: ["shipping", "cost", "free shipping"]
    },
    {
      id: "6",
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. International shipping takes 7-14 business days.",
      category: "Shipping & Delivery",
      tags: ["shipping", "delivery time", "express"]
    },
    {
      id: "7",
      question: "Do you ship internationally?",
      answer: "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location.",
      category: "Shipping & Delivery",
      tags: ["international", "shipping", "worldwide"]
    },
    {
      id: "8",
      question: "What if my package arrives damaged?",
      answer: "If your package arrives damaged, please take photos and contact us within 48 hours. We'll arrange a replacement or refund.",
      category: "Shipping & Delivery",
      tags: ["damaged", "replacement", "refund"]
    },

    // Returns & Refunds
    {
      id: "9",
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery for most items in original condition. Some items may have different return policies.",
      category: "Returns & Refunds",
      tags: ["returns", "policy", "30 days"]
    },
    {
      id: "10",
      question: "How do I return an item?",
      answer: "Log into your account, find your order, and select 'Return Item'. Print the return label and ship the item back to us.",
      category: "Returns & Refunds",
      tags: ["return", "process", "label"]
    },
    {
      id: "11",
      question: "How long do refunds take?",
      answer: "Refunds are processed within 3-5 business days after we receive your return. The time to appear on your statement depends on your bank.",
      category: "Returns & Refunds",
      tags: ["refund", "timeline", "processing"]
    },

    // Account & Security
    {
      id: "12",
      question: "How do I create an account?",
      answer: "Click 'Sign Up' in the top navigation. You can create an account with your email address or use your Google/Facebook account.",
      category: "Account & Security",
      tags: ["account", "signup", "registration"]
    },
    {
      id: "13",
      question: "I forgot my password. What should I do?",
      answer: "Click 'Forgot Password' on the login page. We'll send you a reset link to your email address.",
      category: "Account & Security",
      tags: ["password", "reset", "forgot"]
    },
    {
      id: "14",
      question: "Is my personal information secure?",
      answer: "Yes! We use industry-standard encryption to protect your personal and payment information. We never store your credit card details.",
      category: "Account & Security",
      tags: ["security", "privacy", "encryption"]
    },
    {
      id: "15",
      question: "Can I save my payment methods?",
      answer: "Yes! When you create an account, you can save your payment methods for faster checkout. All information is encrypted and secure.",
      category: "Account & Security",
      tags: ["payment", "save", "checkout"]
    },

    // Website & Features
    {
      id: "16",
      question: "How do I search for books?",
      answer: "Use the search bar at the top of the page. You can search by title, author, ISBN, or keywords. Use filters to narrow your results.",
      category: "Website & Features",
      tags: ["search", "books", "filters"]
    },
    {
      id: "17",
      question: "Can I create a wishlist?",
      answer: "Yes! Click the heart icon on any book to add it to your wishlist. You can view and manage your wishlist from your account.",
      category: "Website & Features",
      tags: ["wishlist", "favorites", "save"]
    },
    {
      id: "18",
      question: "Do you have a mobile app?",
      answer: "Our website is fully responsive and works great on mobile devices. We're working on a dedicated mobile app for iOS and Android.",
      category: "Website & Features",
      tags: ["mobile", "app", "responsive"]
    },
    {
      id: "19",
      question: "How do I leave a review?",
      answer: "After purchasing a book, you can leave a review from your account or on the book's product page. Reviews help other customers make informed decisions.",
      category: "Website & Features",
      tags: ["reviews", "rating", "feedback"]
    }
  ]

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "Shopping & Orders", name: "Shopping & Orders", icon: ShoppingBag },
    { id: "Shipping & Delivery", name: "Shipping & Delivery", icon: Truck },
    { id: "Returns & Refunds", name: "Returns & Refunds", icon: RotateCcw },
    { id: "Account & Security", name: "Account & Security", icon: Shield },
    { id: "Website & Features", name: "Website & Features", icon: Globe }
  ]

  const toggleItem = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = searchTerm === "" || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

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

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find answers to common questions about our services</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Results */}
      <div className="space-y-4">
        {filteredFAQ.map((item) => (
          <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div
                className="p-6"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                    {expandedItems.includes(item.id) && (
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    )}
                  </div>
                  <div className="ml-4">
                    {expandedItems.includes(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredFAQ.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm 
                  ? "No questions match your search criteria. Try different keywords."
                  : "No questions in this category. Try selecting a different category."
                }
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Contact Support */}
      <div className="mt-12">
        <Card>
          <CardContent className="py-8 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Still need help?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                Contact Support
              </Button>
              <Button variant="outline">
                Live Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 