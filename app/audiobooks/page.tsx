import Image from "next/image"
import Link from "next/link"
import { BookRating } from "@/components/book/book-rating"
import { Badge } from "@/components/ui/badge"

export default function AudiobooksPage() {
  const audiobooks = [
    {
      id: "big-dumb-eyes",
      title: "Big Dumb Eyes: Stories from a Comedian",
      author: "Nate Bargatze",
      narrator: "Nate Bargatze",
      coverImage: "/images/big-dumb-eyes-cover.webp",
      rating: 4.5,
      reviewCount: 32,
      duration: "6h 23m",
      price: 24.99,
      link: "/books/big-dumb-eyes",
    },
    {
      id: "class-clown",
      title: "Class Clown: The Memoirs of a Class Clown",
      author: "Dave Barry",
      narrator: "Dave Barry",
      coverImage: "/images/class-clown-cover.webp",
      rating: 4.7,
      reviewCount: 29,
      duration: "8h 15m",
      price: 29.99,
      link: "/books/class-clown",
    },
    {
      id: "champion-mindset",
      title: "Champion Mindset: Coach, Competitor, Change-Maker",
      author: "Michael Johnson",
      narrator: "Michael Johnson",
      coverImage: "/images/champion-mindset-cover.webp",
      rating: 4.8,
      reviewCount: 45,
      duration: "5h 42m",
      price: 19.99,
      link: "/books/champion-mindset",
    },
    {
      id: "immaculate-conception",
      title: "Immaculate Conception: A Novel",
      author: "Sarah Johnson",
      narrator: "Emma Thompson",
      coverImage: "/images/immaculate-conception-cover.webp",
      rating: 4.6,
      reviewCount: 38,
      duration: "12h 8m",
      price: 34.99,
      link: "/books/immaculate-conception",
    },
    {
      id: "anji-kills-a-king",
      title: "Anji Kills a King",
      author: "David Mitchell",
      narrator: "Simon Vance",
      coverImage: "/images/anji-kills-a-king-cover.webp",
      rating: 4.9,
      reviewCount: 52,
      duration: "15h 33m",
      price: 39.99,
      link: "/books/anji-kills-a-king",
    },
    {
      id: "the-devils",
      title: "The Devils",
      author: "Fyodor Dostoevsky",
      narrator: "Constantine Gregory",
      coverImage: "/images/the-devils-cover.webp",
      rating: 4.7,
      reviewCount: 41,
      duration: "18h 27m",
      price: 44.99,
      link: "/books/the-devils",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Audiobooks</h1>
        <p className="text-muted-foreground">Listen to your favorite books anywhere, anytime</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {audiobooks.map((book) => (
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
                <Badge className="absolute top-2 left-2 bg-blue-500 text-white">
                  Audio
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{book.author}</p>
                <p className="text-xs text-muted-foreground mb-2">Narrated by {book.narrator}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">{book.duration}</span>
                  <span className="text-sm font-medium text-foreground">${book.price}</span>
                </div>
                <BookRating rating={book.rating} reviewCount={book.reviewCount} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Audiobook Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-2">Listen Anywhere</h3>
          <p className="text-muted-foreground">
            Download audiobooks to your device and listen offline, perfect for commutes and travel.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-2">Professional Narration</h3>
          <p className="text-muted-foreground">
            High-quality narration by professional voice actors and authors themselves.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-2">Adjustable Speed</h3>
          <p className="text-muted-foreground">
            Control playback speed to match your listening preference, from 0.5x to 3x.
          </p>
        </div>
      </div>
    </div>
  )
} 