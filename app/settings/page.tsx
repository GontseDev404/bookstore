"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Mail, 
  Eye, 
  EyeOff,
  Save,
  Trash2,
  Download,
  Globe,
  Palette,
  ArrowLeft,
  Home,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { supabase } from "@/lib/supabaseClient";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    password: ""
  })
  const [settings, setSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    promotionalEmails: false,
    newsletter: true,
    twoFactorAuth: false,
    publicProfile: false,
    darkMode: false,
    language: "English"
  })
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const uid = user.id;
        setUserId(typeof uid === 'string' ? uid : null);
        const { data: profileData } = await supabase
          .from("profiles")
          .select("first_name, last_name, phone, email, email_notifications, order_updates, promotional_emails, newsletter, two_factor_auth, public_profile, dark_mode, language")
          .eq("id", user.id)
          .single();
        if (profileData) {
          setProfile({
            firstName: profileData.first_name || "",
            lastName: profileData.last_name || "",
            email: profileData.email || "",
            phone: profileData.phone || "",
            password: ""
          });
          setSettings({
            emailNotifications: profileData.email_notifications ?? true,
            orderUpdates: profileData.order_updates ?? true,
            promotionalEmails: profileData.promotional_emails ?? false,
            newsletter: profileData.newsletter ?? true,
            twoFactorAuth: profileData.two_factor_auth ?? false,
            publicProfile: profileData.public_profile ?? false,
            darkMode: profileData.dark_mode ?? false,
            language: profileData.language || "English"
          });
        }
      }
    }
    fetchProfile();
  }, [])

  const handleProfileChange = (key: string, value: string) => {
    setProfile(prev => ({ ...prev, [key]: value }))
  }

  const handleSettingChange = (key: string, value: boolean | string) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSaveProfile = async () => {
    setLoading(true)
    setSuccess(null)
    setError(null)
    if (!userId) return
    const { error } = await supabase.from("profiles").upsert({
      id: userId,
      first_name: profile.firstName,
      last_name: profile.lastName,
      phone: profile.phone,
      email: profile.email,
      email_notifications: settings.emailNotifications,
      order_updates: settings.orderUpdates,
      promotional_emails: settings.promotionalEmails,
      newsletter: settings.newsletter,
      two_factor_auth: settings.twoFactorAuth,
      public_profile: settings.publicProfile,
      dark_mode: settings.darkMode,
      language: settings.language
    })
    if (error) setError(error.message)
    else setSuccess("Profile updated successfully!")
    setLoading(false)
  }

  const handleDeleteAccount = async () => {
    if (!userId) return
    setLoading(true)
    setSuccess(null)
    setError(null)
    // Delete from Supabase Auth
    const { error: authError } = await supabase.auth.admin.deleteUser(userId)
    // Delete from profiles table
    const { error: profileError } = await supabase.from("profiles").delete().eq("id", userId)
    if (authError || profileError) setError(authError?.message ?? profileError?.message ?? null)
    else setSuccess("Account deleted. You will be logged out.")
    setLoading(false)
    // Optionally, redirect or log out user
  }

  const handleExportData = () => {
    const data = { profile, settings }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "profile.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

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
            <BreadcrumbPage>Settings</BreadcrumbPage>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
            <p className="text-gray-600">Manage your account preferences and privacy settings</p>
          </div>
        </div>
        
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/profile">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </Link>
          <Link href="/orders">
            <Button variant="outline" size="sm">
              <CreditCard className="h-4 w-4 mr-2" />
              Orders
            </Button>
          </Link>
          <Link href="/wishlist">
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Wishlist
            </Button>
          </Link>
          <Link href="/help">
            <Button variant="outline" size="sm">
              <Shield className="h-4 w-4 mr-2" />
              Help
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    value={profile.firstName} 
                    onChange={(e) => handleProfileChange("firstName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    value={profile.lastName} 
                    onChange={(e) => handleProfileChange("lastName", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={profile.email} 
                  onChange={(e) => handleProfileChange("email", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={profile.phone} 
                  onChange={(e) => handleProfileChange("phone", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    value={profile.password} 
                    onChange={(e) => handleProfileChange("password", e.target.value)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button 
                className="w-full" 
                onClick={handleSaveProfile}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
                <Save className="h-4 w-4 ml-2" />
              </Button>
              {success && <p className="text-green-600">{success}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailNotifications">Email Notifications</Label>
                  <p className="text-sm text-gray-600">Receive important updates via email</p>
                </div>
                <Switch
                  id="emailNotifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="orderUpdates">Order Updates</Label>
                  <p className="text-sm text-gray-600">Get notified about order status changes</p>
                </div>
                <Switch
                  id="orderUpdates"
                  checked={settings.orderUpdates}
                  onCheckedChange={(checked) => handleSettingChange("orderUpdates", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="promotionalEmails">Promotional Emails</Label>
                  <p className="text-sm text-gray-600">Receive special offers and discounts</p>
                </div>
                <Switch
                  id="promotionalEmails"
                  checked={settings.promotionalEmails}
                  onCheckedChange={(checked) => handleSettingChange("promotionalEmails", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="newsletter">Newsletter</Label>
                  <p className="text-sm text-gray-600">Weekly book recommendations and updates</p>
                </div>
                <Switch
                  id="newsletter"
                  checked={settings.newsletter}
                  onCheckedChange={(checked) => handleSettingChange("newsletter", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                </div>
                <Switch
                  id="twoFactorAuth"
                  checked={settings.twoFactorAuth}
                  onCheckedChange={(checked) => handleSettingChange("twoFactorAuth", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="publicProfile">Public Profile</Label>
                  <p className="text-sm text-gray-600">Allow others to see your reading lists</p>
                </div>
                <Switch
                  id="publicProfile"
                  checked={settings.publicProfile}
                  onCheckedChange={(checked) => handleSettingChange("publicProfile", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="darkMode">Dark Mode</Label>
                  <p className="text-sm text-gray-600">Switch to dark theme</p>
                </div>
                <Switch
                  id="darkMode"
                  checked={settings.darkMode}
                  onCheckedChange={(checked) => handleSettingChange("darkMode", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-gray-600">Expires 12/25</p>
                  </div>
                </div>
                <Badge variant="secondary">Default</Badge>
              </div>
              <Button variant="outline" className="w-full">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={handleExportData}
                disabled={loading}
              >
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="theme-select" className="text-sm font-medium">Appearance (Theme)</label>
                <select
                  id="theme-select"
                  value={theme}
                  onChange={e => setTheme(e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="destructive" 
                className="w-full justify-start" 
                onClick={handleDeleteAccount}
                disabled={loading}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
              <Button className="w-full mt-4" variant="outline" onClick={handleLogout}>
                Log Out
              </Button>
              <p className="text-xs text-gray-600">
                This action cannot be undone. All your data will be permanently deleted.
              </p>
              {success && <p className="text-green-600">{success}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Status */}
          <Card>
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Member Since</span>
                <span className="text-sm font-medium">January 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Orders Placed</span>
                <span className="text-sm font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Wishlist Items</span>
                <span className="text-sm font-medium">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Reviews Written</span>
                <span className="text-sm font-medium">5</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 