import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CheckoutPage from '../app/checkout/page';
import { WishlistCartContext } from '../components/wishlist-cart-context';

function renderWithCart(cartItems: string[]) {
  return render(
    <WishlistCartContext.Provider value={{
      wishlist: [],
      toggleWishlist: () => {},
      cart: cartItems,
      addToCart: () => {},
      removeFromCart: () => {},
    }}>
      <CheckoutPage />
    </WishlistCartContext.Provider>
  );
}

describe('CheckoutPage', () => {
  it('shows empty cart state', () => {
    renderWithCart([]);
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue Shopping/i })).toBeInTheDocument();
  });

  it('shows cart summary and order total', () => {
    renderWithCart(['silver-feet-and-her-wonder', 'fearless']);
    expect(screen.getByText(/Order Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Silver Feet and Her Wonder/i)).toBeInTheDocument();
    expect(screen.getByText(/Fearless/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Total/i).length).toBeGreaterThan(0);
  });

  it('proceeds through guest checkout and payment to confirmation', async () => {
    renderWithCart(['silver-feet-and-her-wonder']);
    // Guest checkout step
    expect(screen.getByText(/Personal Information/i)).toBeInTheDocument();
    // Simulate guest checkout (bypassing GuestCheckout component logic)
    fireEvent.click(screen.getByRole('button', { name: /Continue as Guest/i }));
    // Payment step
    await waitFor(() => expect(screen.getByText(/Payment Information/i)).toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: /Pay/i }));
    // Confirmation step
    await waitFor(() => expect(screen.getByText(/Order Confirmed/i)).toBeInTheDocument());
    expect(screen.getByText(/Thank you for your order/i)).toBeInTheDocument();
  });
}); 