import '@testing-library/jest-dom';
import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { WishlistCartProvider, WishlistCartContext } from '../components/wishlist-cart-context';

function TestComponent() {
  const context = React.useContext(WishlistCartContext);
  return (
    <div>
      <div data-testid="cart">{JSON.stringify(context.cart)}</div>
      <div data-testid="wishlist">{JSON.stringify(context.wishlist)}</div>
      <button onClick={() => context.addToCart('book-1')}>Add Book 1</button>
      <button onClick={() => context.removeFromCart('book-1')}>Remove Book 1</button>
      <button onClick={() => context.toggleWishlist('book-4')}>Toggle Wishlist Book 4</button>
    </div>
  );
}

describe('WishlistCartContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds and removes items from cart', () => {
    render(
      <WishlistCartProvider>
        <TestComponent />
      </WishlistCartProvider>
    );
    act(() => {
      screen.getByText('Add Book 1').click();
    });
    expect(screen.getByTestId('cart')).toHaveTextContent('book-1');
    act(() => {
      screen.getByText('Remove Book 1').click();
    });
    expect(screen.getByTestId('cart')).not.toHaveTextContent('book-1');
  });

  it('does not add duplicate items to cart', () => {
    render(
      <WishlistCartProvider>
        <TestComponent />
      </WishlistCartProvider>
    );
    act(() => {
      screen.getByText('Add Book 1').click();
      screen.getByText('Add Book 1').click();
    });
    const cart = JSON.parse(screen.getByTestId('cart').textContent || '[]');
    expect(cart.filter((id: string) => id === 'book-1').length).toBe(1);
  });

  it('persists cart to localStorage', () => {
    render(
      <WishlistCartProvider>
        <TestComponent />
      </WishlistCartProvider>
    );
    act(() => {
      screen.getByText('Add Book 1').click();
    });
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(stored).toContain('book-1');
  });

  it('loads cart from localStorage on mount', () => {
    localStorage.setItem('cart', JSON.stringify(['book-3']));
    render(
      <WishlistCartProvider>
        <TestComponent />
      </WishlistCartProvider>
    );
    expect(screen.getByTestId('cart')).toHaveTextContent('book-3');
  });

  it('toggles wishlist items', () => {
    render(
      <WishlistCartProvider>
        <TestComponent />
      </WishlistCartProvider>
    );
    act(() => {
      screen.getByText('Toggle Wishlist Book 4').click();
    });
    expect(screen.getByTestId('wishlist')).toHaveTextContent('book-4');
    act(() => {
      screen.getByText('Toggle Wishlist Book 4').click();
    });
    expect(screen.getByTestId('wishlist')).not.toHaveTextContent('book-4');
  });
}); 