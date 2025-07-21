"use client"

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { ArrowLeft, User, Mail, Phone, MapPin, Edit, Key, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    order_updates: true,
    promos: false,
    newsletter: true,
    privacy: "public"
  });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Password change
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAndProfile = async () => {
      const { data: authData } = await supabase.auth.getUser();
      const user = authData?.user;
      setUser(user);
      setEmail(user?.email || "");
      if (user) {
        // Fetch profile from 'profiles' table
        const { data: profileData } = await supabase
          .from("profiles")
          .select("first_name, last_name, phone, address, order_updates, promos, newsletter, privacy")
          .eq("id", user.id)
          .single();
        if (profileData) {
          setProfile({
            firstName: profileData.first_name || "",
            lastName: profileData.last_name || "",
            phone: profileData.phone || "",
            address: profileData.address || "",
            order_updates: profileData.order_updates ?? true,
            promos: profileData.promos ?? false,
            newsletter: profileData.newsletter ?? true,
            privacy: profileData.privacy || "public"
          });
        }
      }
    };
    fetchUserAndProfile();
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    if (!user) {
      setError("Not logged in");
      setLoading(false);
      return;
    }
    // Upsert profile
    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      first_name: profile.firstName,
      last_name: profile.lastName,
      phone: profile.phone,
      address: profile.address,
      order_updates: profile.order_updates,
      promos: profile.promos,
      newsletter: profile.newsletter,
      privacy: profile.privacy
    });
    if (error) setError(error.message);
    else setSuccess("Profile updated successfully!");
    setLoading(false);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordSuccess(null);
    setPasswordError(null);
    if (!user) {
      setPasswordError("Not logged in");
      return;
    }
    // Supabase requires only the new password (user must be signed in)
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) setPasswordError(error.message);
    else setPasswordSuccess("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
  };

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
          {/* Profile Information & Edit */}
          <div className="lg:col-span-2 space-y-6">
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
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={profile.firstName}
                        onChange={e => setProfile((prev: any) => ({ ...prev, firstName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={profile.lastName}
                        onChange={e => setProfile((prev: any) => ({ ...prev, lastName: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" value={email} disabled />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={e => setProfile((prev: any) => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profile.address}
                      onChange={e => setProfile((prev: any) => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                  {/* Email Preferences */}
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5" />
                        Email Preferences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Order Updates</span>
                        <input type="checkbox" checked={profile.order_updates} onChange={e => setProfile((prev: any) => ({ ...prev, order_updates: e.target.checked }))} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Promotional Emails</span>
                        <input type="checkbox" checked={profile.promos} onChange={e => setProfile((prev: any) => ({ ...prev, promos: e.target.checked }))} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Newsletter</span>
                        <input type="checkbox" checked={profile.newsletter} onChange={e => setProfile((prev: any) => ({ ...prev, newsletter: e.target.checked }))} />
                      </div>
                    </CardContent>
                  </Card>
                  {/* Privacy Settings */}
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Privacy Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Profile Visibility</span>
                        <select value={profile.privacy} onChange={e => setProfile((prev: any) => ({ ...prev, privacy: e.target.value }))} className="border rounded px-2 py-1">
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>
                  <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={loading}>
                    {loading ? "Saving..." : "Update Profile"}
                  </Button>
                  {success && <p className="text-green-600 mt-2">{success}</p>}
                  {error && <p className="text-red-600 mt-2">{error}</p>}
                </form>
              </CardContent>
            </Card>

            {/* Change Password */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} disabled />
                    <p className="text-xs text-muted-foreground">(You must be logged in. For security, only the new password is required.)</p>
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" className="bg-primary hover:bg-primary/90">Change Password</Button>
                  {passwordSuccess && <p className="text-green-600 mt-2">{passwordSuccess}</p>}
                  {passwordError && <p className="text-red-600 mt-2">{passwordError}</p>}
                </form>
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
                <Link href="/account">
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
          </div>
        </div>
      </div>
    </div>
  );
} 