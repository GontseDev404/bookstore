import Link from "next/link"
import Image from "next/image"
import { BookRating } from "./book-rating"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Book {
  id: string
  title: string
  author: string
  coverImage: string
  rating: number
  reviewCount: number
}

interface RelatedBooksProps {
  title: string
  books: Book[]
}

export function RelatedBooks({ title, books }: RelatedBooksProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-amber-800">{title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="border-amber-300 text-amber-700 hover:bg-amber-50">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button variant="outline" size="icon" className="border-amber-300 text-amber-700 hover:bg-amber-50">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {books.map((book) => (
          <Link key={book.id} href={`/books/${book.id}`} className="group space-y-2">
            <div className="overflow-hidden rounded-md border bg-muted">
              <Image
                src={book.coverImage || "/placeholder.svg"}
                alt={book.title}
                width={200}
                height={300}
                className="h-auto w-full object-cover transition-all hover:scale-105"
              />
            </div>
            <div>
              <h3 className="line-clamp-1 font-medium group-hover:underline">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <BookRating rating={book.rating} reviewCount={book.reviewCount} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
