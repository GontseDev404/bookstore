"use client"

import React, { useContext, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/layout/app-shell';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { WishlistCartContext } from '@/components/wishlist-cart-context';
import { GuestCheckout } from '@/components/guest-checkout';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { CartBook } from '@/components/cart/CartItem';
import { CartList } from '@/components/cart/CartList';
import { CartSummary } from '@/components/cart/CartSummary';
import { Home } from 'lucide-react';

const allBooks: CartBook[] = [
  {
    id: 'silver-feet-and-her-wonder',
    title: 'Silver Feet and Her Wonder',
    author: 'Nana Ndlovana-Mthimkhulu',
    coverImage: '/images/silver-feet-cover.png',
    price: 24.99,
    quantity: 1,
  },
  {
    id: 'the-monkey-blanket',
    title: 'The Monkey Blanket',
    author: 'Nana Ndlovana-Mthimkhulu',
    coverImage: '/images/the-monkey-blanket-cover.png',
    price: 22.99,
    quantity: 1,
  },
  {
    id: 'fearless',
    title: 'Fearless',
    author: 'Lauren Roberts',
    coverImage: '/images/fearless-cover.webp',
    price: 29.99,
    quantity: 1,
  },
  {
    id: 'great-big-beautiful-life',
    title: 'Great Big Beautiful Life',
    author: 'Emily Henry',
    coverImage: '/images/great-big-beautiful-life-cover.webp',
    price: 26.99,
    quantity: 1,
  },
  {
    id: 'the-tenant',
    title: 'The Tenant',
    author: 'Freida McFadden',
    coverImage: '/images/the-tenant-cover.webp',
    price: 27.99,
    quantity: 1,
  },
  {
    id: 'remarkably-bright-creatures',
    title: 'Remarkably Bright Creatures',
    author: 'Shelby Van Pelt',
    coverImage: '/images/remarkably-bright-creatures-cover.webp',
    price: 25.99,
    quantity: 1,
  },
];

const GuestCheckoutDialog: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void }> = ({ open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Guest Checkout</DialogTitle>
        <DialogDescription>Checkout as a guest without creating an account.</DialogDescription>
      </DialogHeader>
      <GuestCheckout onGuestCheckout={() => onOpenChange(false)} onAccountCheckout={() => onOpenChange(false)} />
    </DialogContent>
  </Dialog>
);

const CartPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [showGuestCheckout, setShowGuestCheckout] = useState(false);
  const { cart, removeFromCart } = useContext(WishlistCartContext);

  useEffect(() => {
    setMounted(true);
    const initialQuantities: Record<string, number> = {};
    cart.forEach((itemId) => {
      initialQuantities[itemId] = (initialQuantities[itemId] || 0) + 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const cartBooks: CartBook[] = useMemo(() =>
    allBooks
      .filter((book) => cart.includes(book.id))
      .map((book) => ({ ...book, quantity: quantities[book.id] || 1 })),
    [cart, quantities]
  );

  const subtotal = cartBooks.reduce((total, book) => total + book.price * book.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (bookId: string, newQuantity: number) => {
    setQuantities((prev) => ({ ...prev, [bookId]: newQuantity }));
  };

  const handleRemove = (bookId: string) => {
    removeFromCart(bookId);
    setQuantities((prev) => {
      const updated = { ...prev };
      delete updated[bookId];
      return updated;
    });
  };

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your items and proceed to checkout</p>
        </div>
        <div className="text-center py-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CartList books={cartBooks} onQuantityChange={handleQuantityChange} onRemove={handleRemove} />
            <Button
              className="mt-6 w-full"
              size="lg"
              onClick={() => setShowGuestCheckout(true)}
              disabled={cartBooks.length === 0}
            >
              Proceed to Checkout
            </Button>
          </div>
          <div>
            <CartSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
          </div>
        </div>
        <GuestCheckoutDialog open={showGuestCheckout} onOpenChange={setShowGuestCheckout} />
      </div>
    </AppShell>
  );
};

export default CartPage; 