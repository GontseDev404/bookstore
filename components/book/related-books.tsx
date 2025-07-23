"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookRating } from "./book-rating"

interface RelatedBook {
  id: string
  title: string
  author: string
  coverImage: string
  rating: number
  reviewCount: number
  price: number
}

interface RelatedBooksProps {
  title: string
  books: RelatedBook[]
}

export const RelatedBooks: React.FC<RelatedBooksProps> = ({ title, books }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-border text-muted-foreground hover:bg-accent"
            aria-label="Scroll related books left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-border text-muted-foreground hover:bg-accent"
            aria-label="Scroll related books right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {books.length === 0 ? (
        <div className="text-muted-foreground text-center py-8">No related books found.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {books.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="space-y-2">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">by {book.author}</p>
                  <BookRating rating={book.rating} reviewCount={book.reviewCount} size="sm" />
                  <p className="text-sm font-semibold text-primary truncate">${book.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
