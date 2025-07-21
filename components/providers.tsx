"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ThemeProvider } from '@/components/theme-provider';

const AdminContext = createContext({ isAdmin: false });

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();
        setIsAdmin(profile?.role === "admin");
      } else {
        setIsAdmin(false);
      }
    }
    checkAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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