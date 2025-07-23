'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { AuthTabs } from '@/components/auth/AuthTabs';
import { EmailAuthForm } from '@/components/auth/EmailAuthForm';
import { GoogleAuthButton } from '@/components/auth/GoogleAuthButton';
import { PhoneAuthForm } from '@/components/auth/PhoneAuthForm';

const AuthPage: React.FC = () => {
  const [tab, setTab] = useState<'email' | 'google' | 'phone'>('email');
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');
  const [forgotMode, setForgotMode] = useState(false);
  // Email/password state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Phone state
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  // Shared state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Email/password auth
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    if (mode === 'sign-up') {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else setSuccess('Check your email for a confirmation link.');
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else setSuccess('Signed in successfully!');
    }
    setLoading(false);
  };

  // Google OAuth
  const handleGoogle = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) setError(error.message);
    setLoading(false);
  };

  // Phone OTP
  const handlePhoneSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const { error } = await supabase.auth.signInWithOtp({ phone });
    if (error) setError(error.message);
    else {
      setOtpSent(true);
      setSuccess('OTP sent! Check your phone.');
    }
    setLoading(false);
  };
  const handlePhoneVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const { error } = await supabase.auth.verifyOtp({ phone, token: otp, type: 'sms' });
    if (error) setError(error.message);
    else setSuccess('Signed in successfully!');
    setLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) setError(error.message);
    else setSuccess('Password reset email sent!');
    setLoading(false);
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign In / Sign Up</h1>
      <AuthTabs currentTab={tab} onTabChange={setTab} />
      {tab === 'email' && (
        <EmailAuthForm
          mode={mode}
          email={email}
          password={password}
          loading={loading}
          error={error}
          success={success}
          forgotMode={forgotMode}
          onChange={(field, value) => {
            if (field === 'email') setEmail(value);
            else setPassword(value);
          }}
          onSubmit={handleAuth}
          onModeChange={setMode}
          onForgotPassword={handleForgotPassword}
          setForgotMode={setForgotMode}
        />
      )}
      {tab === 'google' && (
        <GoogleAuthButton loading={loading} error={error} onClick={handleGoogle} />
      )}
      {tab === 'phone' && (
        <PhoneAuthForm
          phone={phone}
          otp={otp}
          otpSent={otpSent}
          loading={loading}
          error={error}
          success={success}
          onChange={(field, value) => {
            if (field === 'phone') setPhone(value);
            else setOtp(value);
          }}
          onSend={handlePhoneSend}
          onVerify={handlePhoneVerify}
        />
      )}
    </div>
  );
};

export default AuthPage; 