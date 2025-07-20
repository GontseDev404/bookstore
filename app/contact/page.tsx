"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1000)
  }

  const contactInfo = {
    email: "support@bookhaven.com",
    phone: "+1 (555) 123-4567",
    address: "123 Book Street, Literary City, LC 12345",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed"
  }

  const supportTopics = [
    {
      title: "Order Support",
      description: "Help with orders, tracking, and delivery",
      email: "orders@bookhaven.com"
    },
    {
      title: "Technical Support",
      description: "Website issues and account problems",
      email: "tech@bookhaven.com"
    },
    {
      title: "Returns & Refunds",
      description: "Return policies and refund requests",
      email: "returns@bookhaven.com"
    },
    {
      title: "General Inquiries",
      description: "General questions and feedback",
      email: "info@bookhaven.com"
    }
  ]

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Message Sent!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
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

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Contact Us</h1>
        <p className="text-muted-foreground">We're here to help! Get in touch with our support team.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Send us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="order">Order Support</SelectItem>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="returns">Returns & Refunds</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Contact</CardTitle>
              <CardDescription>
                Get in touch with us through these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{contactInfo.hours}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Support Topics</CardTitle>
              <CardDescription>
                Contact the right team for your specific needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportTopics.map((topic, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-medium text-foreground">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{topic.description}</p>
                    <a
                      href={`mailto:${topic.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {topic.email}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Link */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-medium text-foreground mb-2">Need Quick Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check our FAQ section for answers to common questions.
                </p>
                <Button variant="outline" className="w-full">
                  View FAQ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Visit Our Store</CardTitle>
            <CardDescription>
              Come visit us in person for a personalized book shopping experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map coming soon</p>
                <p className="text-sm text-muted-foreground mt-2">{contactInfo.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 