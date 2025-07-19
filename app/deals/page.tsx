import Image from "next/image"
import Link from "next/link"
import { AppShell } from "@/components/layout/app-shell"
import { BookRating } from "@/components/book/book-rating"
import { Badge } from "@/components/ui/badge"

export default function DealsPage() {
  // Deals data
  const deals = [
    {
      id: "silver-feet-and-her-wonder",
      title: "Silver Feet and Her Wonder",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/silver-feet-cover.png",
      rating: 4.8,
      reviewCount: 37,
      originalPrice: 24.99,
      salePrice: 19.99,
      discount: 20,
      link: "/books/silver-feet-and-her-wonder",
    },
    {
      id: "fearless",
      title: "Fearless",
      author: "Lauren Roberts",
      coverImage: "/images/fearless-cover.webp",
      rating: 4.9,
      reviewCount: 41,
      originalPrice: 29.99,
      salePrice: 22.99,
      discount: 23,
      link: "/books/fearless",
    },
    {
      id: "great-big-beautiful-life",
      title: "Great Big Beautiful Life",
      author: "Emily Henry",
      coverImage: "/images/great-big-beautiful-life-cover.webp",
      rating: 4.5,
      reviewCount: 33,
      originalPrice: 26.99,
      salePrice: 18.99,
      discount: 30,
      link: "/books/great-big-beautiful-life",
    },
    {
      id: "the-tenant",
      title: "The Tenant",
      author: "Freida McFadden",
      coverImage: "/images/the-tenant-cover.webp",
      rating: 4.8,
      reviewCount: 39,
      originalPrice: 27.99,
      salePrice: 21.99,
      discount: 21,
      link: "/books/the-tenant",
    },
    {
      id: "remarkably-bright-creatures",
      title: "Remarkably Bright Creatures",
      author: "Shelby Van Pelt",
      coverImage: "/images/remarkably-bright-creatures-cover.webp",
      rating: 4.6,
      reviewCount: 35,
      originalPrice: 25.99,
      salePrice: 16.99,
      discount: 35,
      link: "/books/remarkably-bright-creatures",
    },
    {
      id: "emperor-of-gladness",
      title: "The Emperor of Gladness",
      author: "Ocean Vuong",
      coverImage: "/images/the-emperor-of-gladness-cover.webp",
      rating: 4.9,
      reviewCount: 42,
      originalPrice: 28.99,
      salePrice: 20.99,
      discount: 28,
      link: "/books/emperor-of-gladness",
    },
    {
      id: "run-for-the-hills",
      title: "Run for the Hills",
      author: "Kevin Wilson",
      coverImage: "/images/run-for-the-hills-cover.webp",
      rating: 4.7,
      reviewCount: 36,
      originalPrice: 24.99,
      salePrice: 17.99,
      discount: 28,
      link: "/books/run-for-the-hills",
    },
    {
      id: "speak-to-me-of-home",
      title: "Speak to Me of Home",
      author: "Jeanine Cummins",
      coverImage: "/images/speak-to-me-of-home-cover.webp",
      rating: 4.6,
      reviewCount: 31,
      originalPrice: 26.99,
      salePrice: 19.99,
      discount: 26,
      link: "/books/speak-to-me-of-home",
    },
  ]

  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Special Deals</h1>
          <p className="text-gray-600">Limited-time offers on your favorite books</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((book) => (
            <div key={book.id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
                <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                  -{book.discount}%
                </Badge>
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
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                  <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600">${book.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">${book.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  )
} 