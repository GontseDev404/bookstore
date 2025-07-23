"use client"

import React, { createContext, useState, useEffect } from "react";

interface WishlistCartContextType {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  cart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export const WishlistCartContext = createContext<WishlistCartContextType>({
  wishlist: [],
  toggleWishlist: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function WishlistCartProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const w = localStorage.getItem("wishlist");
    const c = localStorage.getItem("cart");
    if (w) setWishlist(JSON.parse(w));
    if (c) setCart(JSON.parse(c));
  }, []);
  
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function toggleWishlist(id: string) {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }
  function addToCart(id: string) {
    setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }
  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((x) => x !== id));
  }

  return (
    <WishlistCartContext.Provider value={{ wishlist, toggleWishlist, cart, addToCart, removeFromCart }}>
      {children}
    </WishlistCartContext.Provider>
  );
} 