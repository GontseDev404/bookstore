import Image from "next/image"
import Link from "next/link"
import { BookRating } from "@/components/book/book-rating"

export default function BestsellersPage() {
  // Staff Favorites data
  const staffFavorites = [
    {
      id: "silver-feet-and-her-wonder",
      title: "Silver Feet and Her Wonder",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/silver-feet-cover.png",
      rating: 4.8,
      reviewCount: 37,
      link: "/books/silver-feet-and-her-wonder",
    },
    {
      id: "the-monkey-blanket",
      title: "The Monkey Blanket",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/the-monkey-blanket-cover.png",
      rating: 4.9,
      reviewCount: 45,
      link: "/books/the-monkey-blanket",
    },
    {
      id: "fearless",
      title: "Fearless",
      author: "Lauren Roberts",
      coverImage: "/images/fearless-cover.webp",
      rating: 4.9,
      reviewCount: 41,
      link: "/books/fearless",
    },
    {
      id: "great-big-beautiful-life",
      title: "Great Big Beautiful Life",
      author: "Emily Henry",
      coverImage: "/images/great-big-beautiful-life-cover.webp",
      rating: 4.5,
      reviewCount: 33,
      link: "/books/great-big-beautiful-life",
    },
    {
      id: "the-tenant",
      title: "The Tenant",
      author: "Freida McFadden",
      coverImage: "/images/the-tenant-cover.webp",
      rating: 4.8,
      reviewCount: 39,
      link: "/books/the-tenant",
    },
    {
      id: "remarkably-bright-creatures",
      title: "Remarkably Bright Creatures",
      author: "Shelby Van Pelt",
      coverImage: "/images/remarkably-bright-creatures-cover.webp",
      rating: 4.6,
      reviewCount: 35,
      link: "/books/remarkably-bright-creatures",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Staff Favorites</h1>
        <p className="text-muted-foreground">Handpicked recommendations from our book-loving staff</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {staffFavorites.map((book) => (
          <div key={book.id} className="group">
            <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Link href={book.link} className="absolute inset-0">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                <BookRating rating={book.rating} reviewCount={book.reviewCount} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 