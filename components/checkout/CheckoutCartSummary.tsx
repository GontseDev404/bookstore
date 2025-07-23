import React from 'react';
import Image from 'next/image';

export interface CheckoutCartItem {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
}

interface CheckoutCartSummaryProps {
  cartItems: CheckoutCartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export const CheckoutCartSummary: React.FC<CheckoutCartSummaryProps> = ({ cartItems, subtotal, shipping, tax, total }) => (
  <div className="space-y-6">
    <div className="bg-muted rounded-lg p-4">
      <h3 className="font-semibold mb-3">Order Summary</h3>
      <div className="space-y-3">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <div className="w-12 h-16 relative flex-shrink-0">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm truncate">{item.title}</div>
              <div className="text-xs text-muted-foreground truncate">by {item.author}</div>
            </div>
            <div className="font-bold text-primary text-sm">${item.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="border-t my-4" />
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base mt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>
); 