"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AuthPage() {
  const [tab, setTab] = useState<"email" | "google" | "phone">("email");
  // Email/password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Phone state
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  // Shared state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");
  const [forgotMode, setForgotMode] = useState(false);

  // Email/password auth
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    if (mode === "sign-up") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else setSuccess("Check your email for a confirmation link.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else setSuccess("Signed in successfully!");
    }
    setLoading(false);
  };

  // Google OAuth
  const handleGoogle = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
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
      setSuccess("OTP sent! Check your phone.");
    }
    setLoading(false);
  };
  const handlePhoneVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const { error } = await supabase.auth.verifyOtp({ phone, token: otp, type: "sms" });
    if (error) setError(error.message);
    else setSuccess("Signed in successfully!");
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
      <div className="flex justify-center mb-6 gap-2">
        <button
          className={`px-3 py-1 rounded ${tab === "email" ? "bg-amber-900 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("email")}
        >Email</button>
        <button
          className={`px-3 py-1 rounded ${tab === "google" ? "bg-amber-900 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("google")}
        >Google</button>
        <button
          className={`px-3 py-1 rounded ${tab === "phone" ? "bg-amber-900 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("phone")}
        >Phone</button>
      </div>
      {forgotMode ? (
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-amber-900 text-white py-2 rounded font-semibold hover:bg-amber-800 transition"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Send Password Reset Email'}
          </button>
          <button
            type="button"
            className="w-full text-blue-600 underline mt-2"
            onClick={() => setForgotMode(false)}
          >
            Back to Sign In
          </button>
        </form>
      ) : (
        <>
          {tab === "email" && (
            <form onSubmit={handleAuth} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-2 rounded font-semibold hover:bg-amber-800 transition"
                disabled={loading}
              >
                {loading ? "Loading..." : mode === "sign-in" ? "Sign In" : "Sign Up"}
              </button>
            </form>
          )}
          {tab === "google" && (
            <div className="flex flex-col gap-4">
              <button
                onClick={handleGoogle}
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                disabled={loading}
              >
                <svg className="h-5 w-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.68 2.36 30.77 0 24 0 14.82 0 6.71 5.13 2.69 12.56l7.98 6.2C12.13 13.13 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.43-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.02l7.18 5.59C43.93 37.36 46.1 31.45 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.77c-1.13-3.36-1.13-6.98 0-10.34l-7.98-6.2C.64 16.09 0 19.01 0 22c0 2.99.64 5.91 1.8 8.77l8.87-6.77z"/><path fill="#EA4335" d="M24 44c6.48 0 11.92-2.14 15.89-5.82l-7.18-5.59c-2.01 1.35-4.59 2.16-7.71 2.16-6.38 0-11.87-3.63-14.33-8.86l-8.87 6.77C6.71 42.87 14.82 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
                {loading ? "Loading..." : "Continue with Google"}
              </button>
            </div>
          )}
          {tab === "phone" && (
            <form onSubmit={otpSent ? handlePhoneVerify : handlePhoneSend} className="space-y-4">
              <input
                type="tel"
                placeholder="Phone number (e.g. +1234567890)"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
                disabled={otpSent}
              />
              {otpSent && (
                <input
                  type="text"
                  placeholder="Enter OTP code"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              )}
              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-2 rounded font-semibold hover:bg-amber-800 transition"
                disabled={loading}
              >
                {loading ? "Loading..." : otpSent ? "Verify OTP" : "Send OTP"}
              </button>
            </form>
          )}
          {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
          {success && <p className="text-green-600 mt-2 text-center">{success}</p>}
          <div className="mt-4 text-center">
            {tab === "email" && (
              mode === "sign-in" ? (
                <span>
                  Don't have an account?{' '}
                  <button className="text-blue-600 underline" onClick={() => setMode("sign-up")}>Sign Up</button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button className="text-blue-600 underline" onClick={() => setMode("sign-in")}>Sign In</button>
                </span>
              )
            )}
            {tab === 'email' && mode === 'sign-in' && (
              <button
                type="button"
                className="text-blue-600 underline mt-2"
                onClick={() => setForgotMode(true)}
              >
                Forgot your password?
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
} 