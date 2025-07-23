import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  quantity: number;
}

interface CartItemProps {
  book: CartBook;
  onQuantityChange: (bookId: string, newQuantity: number) => void;
  onRemove: (bookId: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ book, onQuantityChange, onRemove }) => (
  <div className="flex gap-4 items-center border-b py-4">
    <div className="w-20 h-28 relative flex-shrink-0">
      <Image
        src={book.coverImage}
        alt={book.title}
        fill
        className="object-cover rounded-md"
      />
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-semibold text-base truncate">{book.title}</div>
      <div className="text-sm text-muted-foreground truncate">by {book.author}</div>
      <div className="text-sm font-bold text-primary mt-1">${book.price.toFixed(2)}</div>
      <div className="flex items-center gap-2 mt-2">
        <Button
          variant="outline"
          size="icon"
          aria-label="Decrease quantity"
          onClick={() => onQuantityChange(book.id, Math.max(1, book.quantity - 1))}
          disabled={book.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{book.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          aria-label="Increase quantity"
          onClick={() => onQuantityChange(book.id, book.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
    <Button
      variant="destructive"
      size="icon"
      aria-label="Remove from cart"
      onClick={() => onRemove(book.id)}
      className="ml-2"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  </div>
); 