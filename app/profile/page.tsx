"use client"

import Link from "next/link"
import { ArrowLeft, User, Mail, Phone, MapPin, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-4">My Profile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Personal Information</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">John Doe</p>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">john.doe@example.com</p>
                    <p className="text-sm text-muted-foreground">Email Address</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Phone Number</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">123 Main Street, City, State 12345</p>
                    <p className="text-sm text-muted-foreground">Shipping Address</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl">Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Change Password</p>
                    <p className="text-sm text-muted-foreground">Update your account password</p>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Email Preferences</p>
                    <p className="text-sm text-muted-foreground">Manage your email notifications</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Privacy Settings</p>
                    <p className="text-sm text-muted-foreground">Control your privacy preferences</p>
                  </div>
                  <Button variant="outline" size="sm">Settings</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/orders">
                  <Button variant="outline" className="w-full justify-start">
                    View Orders
                  </Button>
                </Link>
                <Link href="/wishlist">
                  <Button variant="outline" className="w-full justify-start">
                    My Wishlist
                  </Button>
                </Link>
                <Link href="/settings">
                  <Button variant="outline" className="w-full justify-start">
                    Account Settings
                  </Button>
                </Link>
                <Link href="/help">
                  <Button variant="outline" className="w-full justify-start">
                    Get Help
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Account Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Account Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Orders</span>
                  <span className="font-medium text-foreground">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wishlist Items</span>
                  <span className="font-medium text-foreground">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reviews Written</span>
                  <span className="font-medium text-foreground">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium text-foreground">Jan 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 