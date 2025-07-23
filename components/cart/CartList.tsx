import React from 'react';
import { CartBook, CartItem } from './CartItem';

interface CartListProps {
  books: CartBook[];
  onQuantityChange: (bookId: string, newQuantity: number) => void;
  onRemove: (bookId: string) => void;
}

export const CartList: React.FC<CartListProps> = ({ books, onQuantityChange, onRemove }) => {
  if (books.length === 0) {
    return <div className="text-center text-muted-foreground py-8">Your cart is empty.</div>;
  }
  return (
    <div>
      {books.map((book) => (
        <CartItem
          key={book.id}
          book={book}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}; 