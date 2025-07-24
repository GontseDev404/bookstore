"use client";
import { BookPageClient } from "./book-page-client"
import { useState, useEffect } from 'react';
import { getBookById } from '@/data/books';
import { getBookReviewsById } from '@/data/bookReviews';

export default function BookPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  const { id } = params
  const book = getBookById(id)
  const customerReviews = getBookReviewsById(id)

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="text-muted-foreground">The book you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <BookPageClient book={{ ...book, customerReviews }} loading={loading} />
  )
}
