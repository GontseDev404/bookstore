'use client';

import React, { useState } from 'react';
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
      // Mock sign-up
      console.log('Mock sign-up:', { email, password });
      setSuccess('Mock sign-up successful! Check your email.');
    } else {
      // Mock sign-in
      console.log('Mock sign-in:', { email, password });
      setSuccess('Mock signed in successfully!');
    }
    setLoading(false);
  };

  // Google OAuth
  const handleGoogle = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    // Mock Google sign-in
    console.log('Mock Google sign-in');
    setSuccess('Mock signed in with Google!');
    setLoading(false);
  };

  // Phone OTP
  const handlePhoneSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    // Mock phone OTP
    console.log('Mock phone OTP send:', phone);
    setOtpSent(true);
    setSuccess('Mock OTP sent! Check your phone.');
    setLoading(false);
  };
  const handlePhoneVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    // Mock phone OTP verify
    console.log('Mock phone OTP verify:', { phone, otp });
    setSuccess('Mock signed in successfully!');
    setLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    // Mock forgot password
    console.log('Mock forgot password:', email);
    setSuccess('Mock password reset email sent!');
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