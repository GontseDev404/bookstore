import React from 'react';

interface PhoneAuthFormProps {
  phone: string;
  otp: string;
  otpSent: boolean;
  loading: boolean;
  error: string | null;
  success: string | null;
  onChange: (field: 'phone' | 'otp', value: string) => void;
  onSend: (e: React.FormEvent) => void;
  onVerify: (e: React.FormEvent) => void;
}

export const PhoneAuthForm: React.FC<PhoneAuthFormProps> = ({
  phone,
  otp,
  otpSent,
  loading,
  error,
  success,
  onChange,
  onSend,
  onVerify,
}) => (
  <form onSubmit={otpSent ? onVerify : onSend} className="space-y-4">
    <div>
      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(e) => onChange('phone', e.target.value)}
        className="w-full p-2 border rounded"
        required
        autoComplete="tel"
        aria-label="Phone number"
        disabled={otpSent}
      />
    </div>
    {otpSent && (
      <div>
        <label htmlFor="otp" className="block text-sm font-medium mb-1">OTP</label>
        <input
          id="otp"
          type="text"
          value={otp}
          onChange={(e) => onChange('otp', e.target.value)}
          className="w-full p-2 border rounded"
          required
          aria-label="OTP code"
        />
      </div>
    )}
    {error && <div className="text-red-600 text-xs">{error}</div>}
    {success && <div className="text-green-700 text-xs">{success}</div>}
    <button
      type="submit"
      className="w-full bg-amber-900 text-white py-2 rounded font-semibold disabled:opacity-60"
      disabled={loading}
      aria-label={otpSent ? 'Verify OTP' : 'Send OTP'}
    >
      {loading ? 'Loading...' : otpSent ? 'Verify OTP' : 'Send OTP'}
    </button>
  </form>
); 