"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Gift, BookOpen, CheckCircle } from "lucide-react"

interface NewsletterSignupProps {
  title?: string
  description?: string
  showBenefits?: boolean
  variant?: 'inline' | 'card' | 'popup'
  onSuccess?: (email: string) => void
}

export function NewsletterSignup({ 
  title = "Stay in the Loop",
  description = "Get exclusive offers, new releases, and reading recommendations delivered to your inbox.",
  showBenefits = true,
  variant = 'card',
  onSuccess
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [preferences, setPreferences] = useState({
    newReleases: true,
    deals: true,
    recommendations: true,
    events: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Save to localStorage for demo
    const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]')
    subscribers.push({
      email,
      firstName,
      preferences,
      subscribedAt: new Date().toISOString()
    })
    localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers))

    setIsSubscribed(true)
    setIsLoading(false)
    onSuccess?.(email)
  }

  const handlePreferenceChange = (key: string, checked: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: checked }))
  }

  if (isSubscribed) {
    return (
      <Card className="text-center">
        <CardContent className="pt-6">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Welcome to BookHaven!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for subscribing. You'll receive your first email shortly.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setIsSubscribed(false)}
          >
            Subscribe Another Email
          </Button>
        </CardContent>
      </Card>
    )
  }

  const benefits = [
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Exclusive Offers",
      description: "Get 10% off your first order and special member-only discounts"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "New Releases",
      description: "Be the first to know about upcoming releases and pre-orders"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Reading Recommendations",
      description: "Personalized book suggestions based on your interests"
    }
  ]

  const content = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      {showBenefits && (
        <div className="space-y-3">
          <Label className="text-sm font-medium">Email Preferences</Label>
          <div className="space-y-2">
            {Object.entries(preferences).map(([key, checked]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox
                  id={key}
                  checked={checked}
                  onCheckedChange={(isChecked) => handlePreferenceChange(key, isChecked as boolean)}
                />
                <Label htmlFor={key} className="text-sm">
                  {key === 'newReleases' && 'New releases and pre-orders'}
                  {key === 'deals' && 'Special offers and discounts'}
                  {key === 'recommendations' && 'Personalized recommendations'}
                  {key === 'events' && 'Book events and author signings'}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading || !email}
      >
        {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By subscribing, you agree to our{" "}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>{" "}
        and consent to receive marketing emails.
      </p>
    </form>
  )

  if (variant === 'inline') {
    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {content}
      </div>
    )
  }

  if (variant === 'popup') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {content}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
        {showBenefits && (
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-semibold mb-3">What you'll get:</h4>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary mt-0.5">
                    {benefit.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">{benefit.title}</h5>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 