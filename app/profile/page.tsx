"use client"

import React, { useEffect, useState } from 'react';
import { ProfileDetails, ProfileData } from '@/components/profile/ProfileDetails';
import { PasswordChangeForm } from '@/components/profile/PasswordChangeForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      // Mock user data for demonstration
      setUser({ id: 'mock-user-id', email: 'test@example.com' });
      setEmail('test@example.com');
      // Mock profile data for demonstration
      setProfile({
        firstName: 'John',
        lastName: 'Doe',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA',
      });
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
    // Mock update for demonstration
    setSuccess('Profile updated successfully!');
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
    // Mock password change for demonstration
    setPasswordSuccess('Password changed successfully!');
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