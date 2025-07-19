import { Heart, Share2 } from "lucide-react"
import { AppShell } from "@/components/layout/app-shell"
import { BookCover } from "@/components/book/book-cover"
import { BookRating } from "@/components/book/book-rating"
import { BookFormatSelector } from "@/components/book/book-format-selector"
import { BookReviews } from "@/components/book/book-reviews"
import { RelatedBooks } from "@/components/book/related-books"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getBookById } from "@/lib/book-data"
import { notFound } from "next/navigation"

interface BookPageProps {
  params: {
    id: string;
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const book = getBookById(await params.id);

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

              {book.authorMessage && (
                <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-amber-400 shadow-sm">
                  <h3 className="mb-2 text-sm font-semibold text-amber-800">Author's Message</h3>
                  <p className="text-sm italic text-amber-700">{book.authorMessage}</p>
                </div>
              )}

              <div className="bg-gradient-to-r from-amber-50 to-white rounded-lg p-4 shadow-sm">
                <BookFormatSelector formats={book.formats} />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="flex-1 bg-amber-500 hover:bg-amber-600">
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
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Book Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">ISBN:</span>
                <span>{book.details.isbn}</span>
                  </div>
              <div className="flex justify-between">
                <span className="font-medium">Publisher:</span>
                <span>{book.details.publisher}</span>
                  </div>
              <div className="flex justify-between">
                <span className="font-medium">Publication Date:</span>
                <span>{book.details.publicationDate}</span>
                  </div>
              <div className="flex justify-between">
                <span className="font-medium">Pages:</span>
                <span>{book.details.pages}</span>
                  </div>
              <div className="flex justify-between">
                <span className="font-medium">Language:</span>
                <span>{book.details.language}</span>
                </div>
              <div className="flex justify-between">
                <span className="font-medium">Age Range:</span>
                <span>{book.details.age}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Editorial Reviews</h2>
            <div className="space-y-4">
              {book.editorialReviews.map((review, index) => (
                <div key={index} className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">{review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Customer Reviews */}
          <BookReviews
            editorialReviews={book.editorialReviews}
            customerReviews={book.customerReviews}
            averageRating={book.rating}
            reviewCount={book.reviewCount}
          />

        <Separator className="my-8" />

        {/* Related Books */}
        <RelatedBooks title="You May Also Like" books={book.relatedBooks} />
      </div>
    </AppShell>
  )
}
