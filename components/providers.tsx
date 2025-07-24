"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from '@/components/theme-provider';
import { SearchProvider } from './search-context';
import { WishlistCartProvider } from './wishlist-cart-context';

const AdminContext = createContext({ isAdmin: true });

export function AdminProvider({ children }: { children: React.ReactNode }) {
  // Always mock as admin for admin routes
  return (
    <AdminContext.Provider value={{ isAdmin: true }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* Existing providers, e.g. AdminProvider, SearchProvider, WishlistCartProvider */}
      <AdminProvider>
        <SearchProvider>
          <WishlistCartProvider>
            {children}
          </WishlistCartProvider>
        </SearchProvider>
      </AdminProvider>
    </ThemeProvider>
  );
} 