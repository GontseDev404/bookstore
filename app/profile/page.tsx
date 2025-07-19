"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, ShoppingBag, Heart, Settings, LogOut } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { WishlistCartContext } from "@/components/wishlist-cart-context"

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false)
  const { wishlist, cart } = useContext(WishlistCartContext)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <AppShell>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>
          <div className="text-center py-8">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Account Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                    <User className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Demo User</h3>
                    <p className="text-sm text-gray-600">demo@bookhaven.com</p>
                  </div>
                </div>
                                 <div className="grid grid-cols-3 gap-4 text-center">
                   <div>
                     <div className="text-2xl font-bold text-primary">12</div>
                     <div className="text-sm text-gray-600">Orders</div>
                   </div>
                   <div>
                     <div className="text-2xl font-bold text-primary">{wishlist.length}</div>
                     <div className="text-sm text-gray-600">Wishlist</div>
                   </div>
                   <div>
                     <div className="text-2xl font-bold text-primary">{cart.length}</div>
                     <div className="text-sm text-gray-600">Cart</div>
                   </div>
                 </div>
                <Button variant="outline" className="w-full">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Demo" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="User" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="demo@bookhaven.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Book Street, Reading City, RC 12345" />
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5" />
                      Order History
                    </CardTitle>
                    <CardDescription>View your past orders and track current shipments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Sample Orders */}
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">Order #BH-2024-001</h4>
                            <p className="text-sm text-gray-600">Placed on March 15, 2024</p>
                          </div>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Delivered</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">3 items • $67.97</p>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">Order #BH-2024-002</h4>
                            <p className="text-sm text-gray-600">Placed on March 10, 2024</p>
                          </div>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Shipped</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">2 items • $45.98</p>
                        <Button variant="outline" size="sm">Track Package</Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">Order #BH-2024-003</h4>
                            <p className="text-sm text-gray-600">Placed on March 5, 2024</p>
                          </div>
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Processing</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">1 item • $24.99</p>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      My Wishlist
                    </CardTitle>
                    <CardDescription>Books you've saved for later</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <Heart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Your wishlist is empty</p>
                      <p className="text-sm">Start adding books to your wishlist!</p>
                      <Button className="mt-4">Browse Books</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Account Settings
                    </CardTitle>
                    <CardDescription>Manage your account preferences and notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Notifications</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Email notifications</span>
                          <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Order updates</span>
                          <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">New releases</span>
                          <Button variant="outline" size="sm">Disabled</Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Privacy</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Share reading preferences</span>
                          <Button variant="outline" size="sm">Disabled</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Analytics tracking</span>
                          <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Security</h4>
                      <Button variant="outline">Change Password</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppShell>
  )
} 