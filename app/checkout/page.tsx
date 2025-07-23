"use client"

import React, { useState, useContext, useMemo } from 'react';
import { AppShell } from '@/components/layout/app-shell';
import { WishlistCartContext } from '@/components/wishlist-cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { CheckoutCartSummary, CheckoutCartItem } from '@/components/checkout/CheckoutCartSummary';
import { GuestCheckoutStep } from '@/components/checkout/GuestCheckoutStep';
import { PaymentStep } from '@/components/checkout/PaymentStep';

const allBooks: CheckoutCartItem[] = [
  {
    id: 'silver-feet-and-her-wonder',
    title: 'Silver Feet and Her Wonder',
    author: 'Nana Ndlovana-Mthimkhulu',
    coverImage: '/images/silver-feet-cover.png',
    price: 24.99,
  },
  {
    id: 'the-monkey-blanket',
    title: 'The Monkey Blanket',
    author: 'Nana Ndlovana-Mthimkhulu',
    coverImage: '/images/the-monkey-blanket-cover.png',
    price: 22.99,
  },
  {
    id: 'fearless',
    title: 'Fearless',
    author: 'Lauren Roberts',
    coverImage: '/images/fearless-cover.webp',
    price: 29.99,
  },
];

interface GuestData {
  [key: string]: any;
}

const ConfirmationStep: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <Card className="max-w-md mx-auto text-center">
      <CardContent className="pt-6">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-4">
          Thank you for your order. You'll receive a confirmation email shortly.
        </p>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Order #: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          <p>Estimated delivery: 3-5 business days</p>
        </div>
        <Button className="mt-4" onClick={() => window.location.href = '/'}>
          Continue Shopping
        </Button>
      </CardContent>
    </Card>
  </div>
);

const EmptyCart: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <Card className="max-w-md mx-auto text-center">
      <CardContent className="pt-6">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">
          Add some books to your cart before checking out.
        </p>
        <Button onClick={() => window.history.back()}>
          Continue Shopping
        </Button>
      </CardContent>
    </Card>
  </div>
);

const CheckoutPage: React.FC = () => {
  const { cart } = useContext(WishlistCartContext);
  const [checkoutStep, setCheckoutStep] = useState<'guest' | 'payment' | 'complete'>('guest');
  const [guestData, setGuestData] = useState<GuestData | null>(null);

  const cartItems = useMemo(() => allBooks.filter((book) => cart.includes(book.id)), [cart]);
  const subtotal = cartItems.reduce((sum, book) => sum + book.price, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  if (checkoutStep === 'complete') {
    return <ConfirmationStep />;
  }

  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            {checkoutStep === 'guest' ? (
              <GuestCheckoutStep
                onGuestCheckout={(data) => {
                  setGuestData(data);
                  setCheckoutStep('payment');
                }}
                onAccountCheckout={() => {}}
              />
            ) : (
              <PaymentStep onPaymentComplete={() => setCheckoutStep('complete')} />
            )}
          </div>
          <div>
            <CheckoutCartSummary
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default CheckoutPage; 