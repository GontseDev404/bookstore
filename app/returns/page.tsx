"use client"

import { useState } from "react"
import { RotateCcw, Clock, AlertCircle, CheckCircle, Package, CreditCard, FileText, HelpCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function ReturnsPage() {
  const [returnForm, setReturnForm] = useState({
    orderNumber: "",
    reason: "",
    description: ""
  })

  const returnPolicy = {
    timeframe: "30 days",
    condition: "Original condition",
    exclusions: [
      "Digital downloads",
      "Gift cards",
      "Personalized items",
      "Damaged items (contact us first)"
    ],
    process: [
      "Log into your account",
      "Find your order",
      "Select items to return",
      "Print return label",
      "Ship items back",
      "Receive refund within 5-7 days"
    ]
  }

  const returnReasons = [
    "Changed my mind",
    "Wrong item received",
    "Damaged in shipping",
    "Not as described",
    "Duplicate order",
    "Other"
  ]

  const refundInfo = {
    methods: [
      {
        method: "Original Payment Method",
        time: "3-5 business days",
        description: "Refunded to the same card or account used for purchase"
      },
      {
        method: "Store Credit",
        time: "1-2 business days",
        description: "Instant credit to your account for future purchases"
      },
      {
        method: "Check by Mail",
        time: "7-10 business days",
        description: "Paper check mailed to your billing address"
      }
    ],
    timeline: [
      {
        step: "Return Received",
        time: "1-2 business days",
        description: "We process your return once received"
      },
      {
        step: "Inspection",
        time: "1-2 business days",
        description: "Items are inspected for condition"
      },
      {
        step: "Refund Processed",
        time: "1-2 business days",
        description: "Refund is initiated to your payment method"
      },
      {
        step: "Refund Posted",
        time: "3-5 business days",
        description: "Refund appears on your statement"
      }
    ]
  }

  const handleSubmitReturn = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Return request submitted! You'll receive a return label via email within 24 hours.")
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Returns & Refunds</h1>
        <p className="text-muted-foreground">Learn about our return policy and process your returns</p>
      </div>

      <Tabs defaultValue="policy" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="policy">Return Policy</TabsTrigger>
          <TabsTrigger value="process">Return Process</TabsTrigger>
          <TabsTrigger value="refunds">Refunds</TabsTrigger>
          <TabsTrigger value="request">Request Return</TabsTrigger>
        </TabsList>

        {/* Return Policy */}
        <TabsContent value="policy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Return Policy
                </CardTitle>
                <CardDescription>
                  Our customer-friendly return policy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{returnPolicy.timeframe}</div>
                    <div className="text-sm text-muted-foreground">Return Window</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{returnPolicy.condition}</div>
                    <div className="text-sm text-muted-foreground">Condition Required</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What You Can Return:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Physical books in original condition</li>
                    <li>• Unopened merchandise</li>
                    <li>• Items with original packaging</li>
                    <li>• Orders within 30 days of delivery</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What You Cannot Return:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {returnPolicy.exclusions.map((exclusion, index) => (
                      <li key={index}>• {exclusion}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Return Process
                </CardTitle>
                <CardDescription>
                  Simple 6-step return process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {returnPolicy.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Return Process */}
        <TabsContent value="process">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Step 1: Prepare Items
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Ensure items are in original condition</li>
                    <li>• Include all original packaging</li>
                    <li>• Remove any personal items</li>
                    <li>• Keep original receipt if possible</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Step 2: Print Label
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Log into your account</li>
                    <li>• Find your order</li>
                    <li>• Select items to return</li>
                    <li>• Print return shipping label</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RotateCcw className="h-5 w-5" />
                    Step 3: Ship Back
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Package items securely</li>
                    <li>• Attach return label</li>
                    <li>• Drop off at any post office</li>
                    <li>• Keep tracking number</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Before Returning:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Check item condition</li>
                      <li>• Verify return eligibility</li>
                      <li>• Gather original packaging</li>
                      <li>• Note any damage</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Shipping Tips:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Use sturdy packaging</li>
                      <li>• Include all accessories</li>
                      <li>• Insure valuable items</li>
                      <li>• Track your package</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Refunds */}
        <TabsContent value="refunds">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {refundInfo.methods.map((method, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      {method.method}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary">{method.time}</div>
                      <div className="text-sm text-muted-foreground">Processing Time</div>
                    </div>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Refund Timeline
                </CardTitle>
                <CardDescription>
                  What to expect during the refund process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {refundInfo.timeline.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{step.step}</h4>
                          <Badge variant="secondary">{step.time}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Request Return */}
        <TabsContent value="request">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Request a Return
                </CardTitle>
                <CardDescription>
                  Start the return process for your order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReturn} className="space-y-4">
                  <div>
                    <Label htmlFor="orderNumber">Order Number</Label>
                    <Input
                      id="orderNumber"
                      placeholder="Enter your order number..."
                      value={returnForm.orderNumber}
                      onChange={(e) => setReturnForm(prev => ({ ...prev, orderNumber: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="reason">Return Reason</Label>
                    <Select
                      value={returnForm.reason}
                      onValueChange={(value) => setReturnForm(prev => ({ ...prev, reason: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {returnReasons.map((reason) => (
                          <SelectItem key={reason} value={reason}>
                            {reason}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Additional Details</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide any additional details about your return..."
                      value={returnForm.description}
                      onChange={(e) => setReturnForm(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Submit Return Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Having trouble with your return? Our support team is here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Return Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check the status of your existing returns.
                  </p>
                  <Button variant="outline" className="w-full">
                    Check Status
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 