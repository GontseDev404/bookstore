"use client"

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { ProfileDetails, ProfileData } from '@/components/profile/ProfileDetails';
import { PasswordChangeForm } from '@/components/profile/PasswordChangeForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRequireAuth } from '@/hooks/useRequireAuth';

interface User {
  id: string;
  email: string;
}

const initialProfile: ProfileData = {
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
};

const ProfilePage: React.FC = () => {
  useRequireAuth();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Password change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAndProfile = async () => {
      const { data: authData } = await supabase.auth.getUser();
      const user = authData?.user;
      if (user) {
        setUser({ id: user.id, email: user.email || '' });
        setEmail(user.email || '');
        const { data: profileData } = await supabase
          .from('profiles')
          .select('first_name, last_name, phone, address')
          .eq('id', user.id)
          .single();
        if (profileData) {
          setProfile({
            firstName: profileData.first_name || '',
            lastName: profileData.last_name || '',
            phone: profileData.phone || '',
            address: profileData.address || '',
          });
        }
      }
    };
    fetchUserAndProfile();
  }, []);

  const handleProfileChange = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    if (!user) {
      setError('Not logged in');
      setLoading(false);
      return;
    }
    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      first_name: profile.firstName,
      last_name: profile.lastName,
      phone: profile.phone,
      address: profile.address,
    });
    if (error) setError(error.message);
    else setSuccess('Profile updated successfully!');
    setLoading(false);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordSuccess(null);
    setPasswordError(null);
    if (!user) {
      setPasswordError('Not logged in');
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) setPasswordError(error.message);
    else setPasswordSuccess('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded shadow">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileDetails
            profile={profile}
            loading={loading}
            error={error}
            success={success}
            onChange={handleProfileChange}
            onSubmit={handleProfileUpdate}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <PasswordChangeForm
            currentPassword={currentPassword}
            newPassword={newPassword}
            loading={loading}
            error={passwordError}
            success={passwordSuccess}
            onChange={(field, value) => {
              if (field === 'currentPassword') setCurrentPassword(value);
              else setNewPassword(value);
            }}
            onSubmit={handlePasswordChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage; 