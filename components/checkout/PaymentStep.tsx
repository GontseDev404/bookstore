import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Lock, CreditCard } from 'lucide-react';

interface PaymentStepProps {
  onPaymentComplete: () => void;
}

export const PaymentStep: React.FC<PaymentStepProps> = ({ onPaymentComplete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1200));
    // Simulate success
    setIsLoading(false);
    onPaymentComplete();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" /> Payment Information
        </CardTitle>
        <CardDescription>Complete your purchase with secure payment</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-2">
            <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900">Secure Payment</h4>
              <p className="text-sm text-blue-700">Your payment information is encrypted and secure.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border rounded-md mt-1"
                required
                aria-label="Card Number"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 border rounded-md mt-1"
                  required
                  aria-label="Expiry Date"
                />
              </div>
              <div>
                <label className="text-sm font-medium">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full p-3 border rounded-md mt-1"
                  required
                  aria-label="CVV"
                />
              </div>
            </div>
          </div>
          {error && <div className="text-red-600 text-xs mb-2">{error}</div>}
          <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Pay'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}; 