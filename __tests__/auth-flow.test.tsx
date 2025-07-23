import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AuthPage from '../app/auth/page';

// Mock supabase client
jest.mock('@/lib/supabaseClient', () => ({
  supabase: {
    auth: {
      signUp: jest.fn(async ({ email, password }) => {
        if (email === 'error@example.com') return { error: { message: 'Sign up error' } };
        return { error: null };
      }),
      signInWithPassword: jest.fn(async ({ email, password }) => {
        if (email === 'wrong@example.com') return { error: { message: 'Sign in error' } };
        return { error: null };
      }),
      signInWithOAuth: jest.fn(async () => ({ error: null })),
      signInWithOtp: jest.fn(async ({ phone }) => {
        if (phone === '+0000000000') return { error: { message: 'OTP error' } };
        return { error: null };
      }),
      verifyOtp: jest.fn(async ({ phone, token }) => {
        if (token === '0000') return { error: { message: 'OTP verify error' } };
        return { error: null };
      }),
    },
  },
}));

describe('AuthPage', () => {
  it('renders sign in form by default', () => {
    render(<AuthPage />);
    expect(screen.getByText(/Sign In \/ Sign Up/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
  });

  it('switches to sign up mode and submits sign up', async () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /^Sign Up$/i }));
    await waitFor(() => expect(screen.getByText(/Check your email/i)).toBeInTheDocument());
  });

  it('shows error on sign up failure', async () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'error@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /^Sign Up$/i }));
    await waitFor(() => expect(screen.getByText(/Sign up error/i)).toBeInTheDocument());
  });

  it('submits sign in', async () => {
    render(<AuthPage />);
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));
    await waitFor(() => expect(screen.getByText(/Signed in successfully/i)).toBeInTheDocument());
  });

  it('shows error on sign in failure', async () => {
    render(<AuthPage />);
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));
    await waitFor(() => expect(screen.getByText(/Sign in error/i)).toBeInTheDocument());
  });

  it('switches tabs between email, google, and phone', () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByRole('button', { name: /Google login tab/i }));
    expect(screen.getByRole('button', { name: /Sign in with Google/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Phone login tab/i }));
    expect(screen.getByLabelText('Phone number')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Email login tab/i }));
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
  });

  it('handles phone OTP send and verify', async () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByRole('button', { name: /Phone login tab/i }));
    fireEvent.change(screen.getByLabelText('Phone number'), { target: { value: '+1234567890' } });
    fireEvent.click(screen.getByRole('button', { name: /Send OTP/i }));
    await waitFor(() => expect(screen.getByText(/OTP sent/i)).toBeInTheDocument());
    fireEvent.change(screen.getByLabelText('OTP code'), { target: { value: '1234' } });
    fireEvent.click(screen.getByRole('button', { name: /Verify OTP/i }));
    await waitFor(() => expect(screen.getByText(/Signed in successfully/i)).toBeInTheDocument());
  });

  it('shows error on OTP send failure', async () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByRole('button', { name: /Phone login tab/i }));
    fireEvent.change(screen.getByLabelText('Phone number'), { target: { value: '+0000000000' } });
    fireEvent.click(screen.getByRole('button', { name: /Send OTP/i }));
    await waitFor(() => expect(screen.getByText(/OTP error/i)).toBeInTheDocument());
  });

  it('shows error on OTP verify failure', async () => {
    render(<AuthPage />);
    fireEvent.click(screen.getByRole('button', { name: /Phone login tab/i }));
    fireEvent.change(screen.getByLabelText('Phone number'), { target: { value: '+1234567890' } });
    fireEvent.click(screen.getByRole('button', { name: /Send OTP/i }));
    await waitFor(() => expect(screen.getByText(/OTP sent/i)).toBeInTheDocument());
    fireEvent.change(screen.getByLabelText('OTP code'), { target: { value: '0000' } });
    fireEvent.click(screen.getByRole('button', { name: /Verify OTP/i }));
    await waitFor(() => expect(screen.getByText(/OTP verify error/i)).toBeInTheDocument());
  });
}); 