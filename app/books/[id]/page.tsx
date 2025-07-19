"use client"

import { Heart, Share2 } from "lucide-react"
import { useEffect } from "react"
import { AppShell } from "@/components/layout/app-shell"
import { BookCover } from "@/components/book/book-cover"
import { BookRating } from "@/components/book/book-rating"
import { BookFormatSelector } from "@/components/book/book-format-selector"
import { BookReviews } from "@/components/book/book-reviews"
import { RelatedBooks } from "@/components/book/related-books"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getBookById } from "@/lib/book-data"
import { useTrackBookView } from "@/components/recently-viewed"
import { notFound } from "next/navigation"

interface BookPageProps {
  params: {
    id: string;
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookById(params.id);
  const trackBookView = useTrackBookView();

  useEffect(() => {
    if (book) {
      trackBookView(book.id);
    }
  }, [book, trackBookView]);

  if (!book) {
    notFound();
  }

  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground">
            Home
          </a>{" "}
          &gt;{" "}
          <a href="/books" className="hover:text-foreground">
            Books
          </a>{" "}
          &gt; <span>{book.title}</span>
        </div>

        {/* Book Header */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <BookCover
              src={book.coverImage}
              alt={book.title}
              width={400}
              height={600}
              className="aspect-[2/3] w-full"
            />
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold md:text-4xl">{book.title}</h1>
                <p className="mt-2 text-xl">by {book.author}</p>
                <div className="mt-2">
                  <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                </div>
              </div>

              <div className="prose max-w-none">
                <p>{book.description}</p>
              </div>

              {/* Author's Message */}
              {book.authorMessage && (
                <div className="rounded-lg bg-muted p-4 border-l-4 border-primary shadow-sm">
                  <h3 className="mb-2 text-sm font-semibold text-foreground">Author's Message</h3>
                  <p className="text-sm italic text-muted-foreground">{book.authorMessage}</p>
                </div>
              )}

              <div className="bg-gradient-to-r from-muted to-background rounded-lg p-4 shadow-sm">
                <BookFormatSelector formats={book.formats} />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                  Add to Library
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Book Details */}
        <div className="bg-gradient-to-r from-muted to-background rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Book Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Publisher:</span> {book.details.publisher}
            </div>
            <div>
              <span className="font-medium">Publication Date:</span> {book.details.publicationDate}
            </div>
            <div>
              <span className="font-medium">Pages:</span> {book.details.pages}
            </div>
            <div>
              <span className="font-medium">Language:</span> {book.details.language}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <BookReviews 
          reviews={book.customerReviews}
          averageRating={book.rating}
          totalReviews={book.reviewCount}
          editorialReview={book.editorialReviews[0]}
        />

        {/* Related Books */}
        <RelatedBooks 
          title="You May Also Like" 
          books={book.relatedBooks.map(book => ({
            ...book,
            price: 24.99 // Default price since it's not in the data
          }))}
        />
      </div>
    </AppShell>
  )
}
