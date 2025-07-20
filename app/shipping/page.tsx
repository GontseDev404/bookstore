"use client"

import { useState } from "react"
import { Truck, Clock, Globe, Package, CheckCircle, AlertCircle, MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ShippingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")

  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "$4.99",
      freeThreshold: "$35",
      deliveryTime: "3-5 business days",
      description: "Our most popular shipping option",
      features: [
        "Free on orders $35+",
        "Tracking included",
        "Signature confirmation available",
        "Insurance included"
      ]
    },
    {
      name: "Express Shipping",
      price: "$9.99",
      freeThreshold: "$75",
      deliveryTime: "1-2 business days",
      description: "Fast delivery for urgent orders",
      features: [
        "Free on orders $75+",
        "Priority tracking",
        "Signature confirmation",
        "Insurance included",
        "Saturday delivery available"
      ]
    },
    {
      name: "Overnight Shipping",
      price: "$19.99",
      freeThreshold: "$150",
      deliveryTime: "Next business day",
      description: "Fastest delivery option",
      features: [
        "Free on orders $150+",
        "Real-time tracking",
        "Signature required",
        "Insurance included",
        "Saturday delivery available"
      ]
    }
  ]

  const internationalShipping = [
    {
      region: "Canada",
      price: "$12.99",
      deliveryTime: "5-7 business days",
      features: ["Tracking included", "Duties calculated at checkout"]
    },
    {
      region: "Europe",
      price: "$24.99",
      deliveryTime: "7-10 business days",
      features: ["Tracking included", "Duties calculated at checkout"]
    },
    {
      region: "Asia & Pacific",
      price: "$29.99",
      deliveryTime: "10-14 business days",
      features: ["Tracking included", "Duties calculated at checkout"]
    },
    {
      region: "Rest of World",
      price: "$34.99",
      deliveryTime: "14-21 business days",
      features: ["Tracking included", "Duties calculated at checkout"]
    }
  ]

  const handleTrackPackage = () => {
    if (trackingNumber.trim()) {
      alert(`Tracking package: ${trackingNumber}\n\nThis would open a tracking page with detailed information.`)
    }
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Shipping Information</h1>
        <p className="text-muted-foreground">Learn about our shipping options, rates, and delivery times</p>
      </div>

      <Tabs defaultValue="domestic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
          <TabsTrigger value="international">International Shipping</TabsTrigger>
          <TabsTrigger value="tracking">Track Package</TabsTrigger>
        </TabsList>

        {/* Domestic Shipping */}
        <TabsContent value="domestic">
          <div className="space-y-6">
            {/* Shipping Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shippingOptions.map((option, index) => (
                <Card key={index} className="relative">
                  {index === 0 && (
                    <Badge className="absolute -top-2 left-4 bg-primary">Most Popular</Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      {option.name}
                    </CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{option.price}</div>
                      <div className="text-sm text-muted-foreground">
                        Free on orders {option.freeThreshold}+
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{option.deliveryTime}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Shipping Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Processing Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Order Processing</span>
                      <Badge variant="secondary">1-2 business days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weekend Orders</span>
                      <Badge variant="outline">Processed Monday</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Holiday Orders</span>
                      <Badge variant="outline">Delayed by 1 day</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <span>Delivery times are estimates and may vary</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <span>Weather and holidays may affect delivery</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <span>Signature may be required for high-value orders</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* International Shipping */}
        <TabsContent value="international">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  International Shipping Rates
                </CardTitle>
                <CardDescription>
                  We ship to most countries worldwide. Rates and delivery times vary by location.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {internationalShipping.map((region, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{region.region}</h3>
                        <Badge variant="secondary">{region.price}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        {region.deliveryTime}
                      </div>
                      <ul className="space-y-1">
                        {region.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customs & Duties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>International orders may be subject to customs duties and taxes. These are calculated at checkout and included in your total.</p>
                  <ul className="space-y-1">
                    <li>• Duties are calculated based on your location</li>
                    <li>• All fees are included in the final price</li>
                    <li>• No surprise charges at delivery</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>International Restrictions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>Some countries have restrictions on book imports. We'll notify you if your order cannot be shipped to your location.</p>
                  <ul className="space-y-1">
                    <li>• We ship to most countries</li>
                    <li>• Restrictions apply to some regions</li>
                    <li>• Contact us for specific locations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Track Package */}
        <TabsContent value="tracking">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Track Your Package
                </CardTitle>
                <CardDescription>
                  Enter your tracking number to get real-time updates on your package
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="tracking">Tracking Number</Label>
                  <Input
                    id="tracking"
                    placeholder="Enter your tracking number..."
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button 
                  onClick={handleTrackPackage}
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!trackingNumber.trim()}
                >
                  Track Package
                </Button>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find your tracking number or having issues with delivery?
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Shipping Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      <span>USPS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      <span>FedEx</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      <span>UPS</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 