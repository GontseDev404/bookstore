import React from 'react';

interface EmailAuthFormProps {
  mode: 'sign-in' | 'sign-up';
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
  success: string | null;
  forgotMode: boolean;
  onChange: (field: 'email' | 'password', value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onModeChange: (mode: 'sign-in' | 'sign-up') => void;
  onForgotPassword: (e: React.FormEvent) => void;
  setForgotMode: (val: boolean) => void;
}

export const EmailAuthForm: React.FC<EmailAuthFormProps> = ({
  mode,
  email,
  password,
  loading,
  error,
  success,
  forgotMode,
  onChange,
  onSubmit,
  onModeChange,
  onForgotPassword,
  setForgotMode,
}) => (
  <form onSubmit={forgotMode ? onForgotPassword : onSubmit} className="space-y-4">
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => onChange('email', e.target.value)}
        className="w-full p-2 border rounded"
        required
        autoComplete="email"
        aria-label="Email address"
      />
    </div>
    {!forgotMode && (
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => onChange('password', e.target.value)}
          className="w-full p-2 border rounded"
          required
          autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'}
          aria-label="Password"
        />
      </div>
    )}
    {error && <div className="text-red-600 text-xs">{error}</div>}
    {success && <div className="text-green-700 text-xs">{success}</div>}
    <div className="flex flex-col gap-2">
      <button
        type="submit"
        className="w-full bg-amber-900 text-white py-2 rounded font-semibold disabled:opacity-60"
        disabled={loading}
        aria-label={forgotMode ? 'Send password reset email' : mode === 'sign-in' ? 'Sign in' : 'Sign up'}
      >
        {loading
          ? 'Loading...'
          : forgotMode
          ? 'Send Reset Email'
          : mode === 'sign-in'
          ? 'Sign In'
          : 'Sign Up'}
      </button>
      {!forgotMode && (
        <button
          type="button"
          className="w-full text-sm text-amber-900 underline"
          onClick={() => setForgotMode(true)}
        >
          Forgot password?
        </button>
      )}
      {forgotMode && (
        <button
          type="button"
          className="w-full text-sm text-gray-500 underline"
          onClick={() => setForgotMode(false)}
        >
          Back to sign in
        </button>
      )}
      <button
        type="button"
        className="w-full text-sm text-gray-700"
        onClick={() => onModeChange(mode === 'sign-in' ? 'sign-up' : 'sign-in')}
      >
        {mode === 'sign-in' ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
      </button>
    </div>
  </form>
); 