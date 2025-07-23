import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
}

interface ProfileDetailsProps {
  profile: ProfileData;
  loading: boolean;
  error: string | null;
  success: string | null;
  onChange: (field: keyof ProfileData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  profile,
  loading,
  error,
  success,
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          value={profile.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          required
          aria-label="First Name"
        />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          value={profile.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          required
          aria-label="Last Name"
        />
      </div>
    </div>
    <div>
      <Label htmlFor="phone">Phone</Label>
      <Input
        id="phone"
        value={profile.phone}
        onChange={(e) => onChange('phone', e.target.value)}
        aria-label="Phone"
      />
    </div>
    <div>
      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        value={profile.address}
        onChange={(e) => onChange('address', e.target.value)}
        aria-label="Address"
      />
    </div>
    {error && <div className="text-red-600 text-xs">{error}</div>}
    {success && <div className="text-green-700 text-xs">{success}</div>}
    <Button type="submit" className="w-full" disabled={loading} aria-label="Save profile">
      {loading ? 'Saving...' : 'Save Profile'}
    </Button>
  </form>
); 