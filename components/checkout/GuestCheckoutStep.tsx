import React from 'react';
import { GuestCheckout } from '@/components/guest-checkout';

interface GuestCheckoutStepProps {
  onGuestCheckout: (guestData: any) => void;
  onAccountCheckout: () => void;
}

export const GuestCheckoutStep: React.FC<GuestCheckoutStepProps> = ({ onGuestCheckout, onAccountCheckout }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Guest Checkout</h2>
    <GuestCheckout onGuestCheckout={onGuestCheckout} onAccountCheckout={onAccountCheckout} />
  </div>
); 