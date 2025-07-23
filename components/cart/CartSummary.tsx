import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, shipping, tax, total }) => (
  <div className="bg-muted rounded-lg p-4 space-y-2">
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
    <div className="border-t my-2" />
    <div className="flex justify-between font-bold text-lg">
      <span>Total</span>
      <span>${total.toFixed(2)}</span>
    </div>
  </div>
); 