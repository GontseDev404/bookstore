import '@testing-library/jest-dom';
import React from 'react';
import { render, act } from '@testing-library/react';
import { WishlistCartProvider, WishlistCartContext } from '../components/wishlist-cart-context';

function getContextValue() {
  let contextValue: any = null;
  function Consumer() {
    contextValue = React.useContext(WishlistCartContext);
    return null;
  }
  render(
    <WishlistCartProvider>
      <Consumer />
    </WishlistCartProvider>
  );
  return contextValue;
}

describe('WishlistCartContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds and removes items from cart', () => {
    const context = getContextValue();
    act(() => {
      context.addToCart('book-1');
    });
    expect(context.cart).toContain('book-1');
    act(() => {
      context.removeFromCart('book-1');
    });
    expect(context.cart).not.toContain('book-1');
  });

  it('does not add duplicate items to cart', () => {
    const context = getContextValue();
    act(() => {
      context.addToCart('book-1');
      context.addToCart('book-1');
    });
    expect(context.cart.filter((id: string) => id === 'book-1').length).toBe(1);
  });

  it('persists cart to localStorage', () => {
    const context = getContextValue();
    act(() => {
      context.addToCart('book-2');
    });
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(stored).toContain('book-2');
  });

  it('loads cart from localStorage on mount', () => {
    localStorage.setItem('cart', JSON.stringify(['book-3']));
    let contextValue: any = null;
    function Consumer() {
      contextValue = React.useContext(WishlistCartContext);
      return null;
    }
    render(
      <WishlistCartProvider>
        <Consumer />
      </WishlistCartProvider>
    );
    expect(contextValue.cart).toContain('book-3');
  });

  it('toggles wishlist items', () => {
    const context = getContextValue();
    act(() => {
      context.toggleWishlist('book-4');
    });
    expect(context.wishlist).toContain('book-4');
    act(() => {
      context.toggleWishlist('book-4');
    });
    expect(context.wishlist).not.toContain('book-4');
  });
}); 