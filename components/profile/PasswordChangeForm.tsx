import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface PasswordChangeFormProps {
  currentPassword: string;
  newPassword: string;
  loading: boolean;
  error: string | null;
  success: string | null;
  onChange: (field: 'currentPassword' | 'newPassword', value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const PasswordChangeForm: React.FC<PasswordChangeFormProps> = ({
  currentPassword,
  newPassword,
  loading,
  error,
  success,
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div>
      <Label htmlFor="currentPassword">Current Password</Label>
      <Input
        id="currentPassword"
        type="password"
        value={currentPassword}
        onChange={(e) => onChange('currentPassword', e.target.value)}
        required
        aria-label="Current Password"
        autoComplete="current-password"
      />
    </div>
    <div>
      <Label htmlFor="newPassword">New Password</Label>
      <Input
        id="newPassword"
        type="password"
        value={newPassword}
        onChange={(e) => onChange('newPassword', e.target.value)}
        required
        aria-label="New Password"
        autoComplete="new-password"
      />
    </div>
    {error && <div className="text-red-600 text-xs">{error}</div>}
    {success && <div className="text-green-700 text-xs">{success}</div>}
    <Button type="submit" className="w-full" disabled={loading} aria-label="Change password">
      {loading ? 'Changing...' : 'Change Password'}
    </Button>
  </form>
); 