import React from 'react';

interface AuthTabsProps {
  currentTab: 'email' | 'google' | 'phone';
  onTabChange: (tab: 'email' | 'google' | 'phone') => void;
}

export const AuthTabs: React.FC<AuthTabsProps> = ({ currentTab, onTabChange }) => (
  <div className="flex justify-center mb-6 gap-2">
    <button
      className={`px-3 py-1 rounded ${currentTab === 'email' ? 'bg-amber-900 text-white' : 'bg-gray-200'}`}
      onClick={() => onTabChange('email')}
      aria-label="Email login tab"
    >
      Email
    </button>
    <button
      className={`px-3 py-1 rounded ${currentTab === 'google' ? 'bg-amber-900 text-white' : 'bg-gray-200'}`}
      onClick={() => onTabChange('google')}
      aria-label="Google login tab"
    >
      Google
    </button>
    <button
      className={`px-3 py-1 rounded ${currentTab === 'phone' ? 'bg-amber-900 text-white' : 'bg-gray-200'}`}
      onClick={() => onTabChange('phone')}
      aria-label="Phone login tab"
    >
      Phone
    </button>
  </div>
); 