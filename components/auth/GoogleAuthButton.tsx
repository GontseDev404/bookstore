import React from 'react';

interface GoogleAuthButtonProps {
  loading: boolean;
  error: string | null;
  onClick: () => void;
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ loading, error, onClick }) => (
  <div className="space-y-2">
    <button
      type="button"
      className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
      onClick={onClick}
      disabled={loading}
      aria-label="Sign in with Google"
    >
      <svg className="h-5 w-5" viewBox="0 0 48 48">
        <g>
          <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.9-6.9C35.64 2.36 30.2 0 24 0 14.82 0 6.7 5.8 2.7 14.1l8.1 6.3C12.6 13.2 17.8 9.5 24 9.5z" />
          <path fill="#34A853" d="M46.1 24.6c0-1.6-.14-3.1-.4-4.6H24v9.1h12.4c-.54 2.9-2.2 5.3-4.7 7l7.2 5.6c4.2-3.9 6.6-9.7 6.6-17.1z" />
          <path fill="#FBBC05" d="M10.8 28.2c-1-2.9-1-6.1 0-9l-8.1-6.3C.6 16.7 0 20.3 0 24c0 3.7.6 7.3 2.7 10.1l8.1-6.3z" />
          <path fill="#EA4335" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.2-5.6c-2 1.4-4.6 2.2-8 2.2-6.2 0-11.5-4.2-13.4-10l-8.1 6.3C6.7 42.2 14.8 48 24 48z" />
          <path fill="none" d="M0 0h48v48H0z" />
        </g>
      </svg>
      {loading ? 'Signing in...' : 'Sign in with Google'}
    </button>
    {error && <div className="text-red-600 text-xs text-center">{error}</div>}
  </div>
); 