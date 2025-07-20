import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookRating } from "@/components/book/book-rating"

interface CategoryPageProps {
  params: {
    id: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = params.id

  // Category data mapping
  const categoryData = {
    fiction: {
      name: "Fiction",
      description: "Explore imaginative stories and compelling narratives",
      books: [
        {
          id: "never-flinch",
          title: "Never Flinch",
          author: "Stephen King",
          coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%287%29-OMK3W3CZ6GOb4axULSgC49I7jGZIc5.webp",
          rating: 4.8,
          reviewCount: 42,
          price: 29.99,
          link: "/books/never-flinch",
        },
        {
          id: "emperor-of-gladness",
          title: "The Emperor of Gladness",
          author: "Ocean Vuong",
          coverImage: "/images/the-emperor-of-gladness-cover.webp",
          rating: 4.9,
          reviewCount: 42,
          price: 24.99,
          link: "/books/emperor-of-gladness",
        },
        {
          id: "run-for-the-hills",
          title: "Run for the Hills",
          author: "Kevin Wilson",
          coverImage: "/images/run-for-the-hills-cover.webp",
          rating: 4.7,
          reviewCount: 36,
          price: 22.99,
          link: "/books/run-for-the-hills",
        },
      ]
    },
    nonfiction: {
      name: "Non-Fiction",
      description: "Discover real stories, facts, and knowledge",
      books: [
        {
          id: "mark-twain",
          title: "Mark Twain",
          author: "Ron Chernow",
          coverImage: "/images/mark-twain-cover.webp",
          rating: 4.8,
          reviewCount: 45,
          price: 34.99,
          link: "/books/mark-twain",
        },
        {
          id: "illustrated-meditations",
          title: "The Illustrated Meditations",
          author: "Marcus Aurelius",
          coverImage: "/images/illustrated-meditations-cover.webp",
          rating: 4.6,
          reviewCount: 38,
          price: 19.99,
          link: "/books/illustrated-meditations",
        },
        {
          id: "third-reich-of-dreams",
          title: "The Third Reich of Dreams",
          author: "Charlotte Beradt",
          coverImage: "/images/third-reich-of-dreams-cover.webp",
          rating: 4.7,
          reviewCount: 41,
          price: 28.99,
          link: "/books/third-reich-of-dreams",
        },
      ]
    },
    children: {
      name: "Children's Books",
      description: "Magical stories for young readers",
      books: [
        {
          id: "the-monkey-blanket",
          title: "The Monkey Blanket",
          author: "Nana Ndlovana-Mthimkhulu",
          coverImage: "/images/the-monkey-blanket-cover.png",
          rating: 4.9,
          reviewCount: 45,
          price: 16.99,
          link: "/books/the-monkey-blanket",
        },
        {
          id: "silver-feet-and-her-wonder",
          title: "Silver Feet and Her Wonder",
          author: "Nana Ndlovana-Mthimkhulu",
          coverImage: "/images/silver-feet-cover.png",
          rating: 4.8,
          reviewCount: 37,
          price: 18.99,
          link: "/books/silver-feet-and-her-wonder",
        },
      ]
    },
    audiobooks: {
      name: "Audiobooks",
      description: "Listen to stories on the go",
      books: [
        {
          id: "big-dumb-eyes",
          title: "Big Dumb Eyes: Stories from a Comedian",
          author: "Nate Bargatze",
          coverImage: "/images/big-dumb-eyes-cover.webp",
          rating: 4.5,
          reviewCount: 32,
          price: 24.99,
          link: "/books/big-dumb-eyes",
        },
        {
          id: "class-clown",
          title: "Class Clown: The Memoirs of a Class Clown",
          author: "Dave Barry",
          coverImage: "/images/class-clown-cover.webp",
          rating: 4.7,
          reviewCount: 29,
          price: 29.99,
          link: "/books/class-clown",
        },
      ]
    },
    nature: {
      name: "Nature & Science",
      description: "Explore the natural world and scientific discoveries",
      books: [
        {
          id: "james",
          title: "James",
          author: "Percival Everett",
          coverImage: "/images/james-cover.webp",
          rating: 4.8,
          reviewCount: 52,
          price: 26.99,
          link: "/books/james",
        },
        {
          id: "native-nations",
          title: "Native Nations",
          author: "Kathleen DuVal",
          coverImage: "/images/native-nations-cover.webp",
          rating: 4.6,
          reviewCount: 34,
          price: 32.99,
          link: "/books/native-nations",
        },
      ]
    },
    biography: {
      name: "Biography & Memoir",
      description: "Real stories of remarkable people",
      books: [
        {
          id: "mark-twain",
          title: "Mark Twain",
          author: "Ron Chernow",
          coverImage: "/images/mark-twain-cover.webp",
          rating: 4.8,
          reviewCount: 45,
          price: 34.99,
          link: "/books/mark-twain",
        },
        {
          id: "champion-mindset",
          title: "Champion Mindset: Coach, Competitor, Change-Maker",
          author: "Michael Johnson",
          coverImage: "/images/champion-mindset-cover.webp",
          rating: 4.8,
          reviewCount: 45,
          price: 19.99,
          link: "/books/champion-mindset",
        },
      ]
    },
    mystery: {
      name: "Mystery & Thriller",
      description: "Suspenseful stories that keep you guessing",
      books: [
        {
          id: "marble-hall-murders",
          title: "Marble Hall Murders",
          author: "Anthony Horowitz",
          coverImage: "/images/marble-hall-murders-cover.webp",
          rating: 4.8,
          reviewCount: 39,
          price: 25.99,
          link: "/books/marble-hall-murders",
        },
        {
          id: "the-tenant",
          title: "The Tenant",
          author: "Freida McFadden",
          coverImage: "/images/the-tenant-cover.webp",
          rating: 4.8,
          reviewCount: 39,
          price: 21.99,
          link: "/books/the-tenant",
        },
      ]
    },
    romance: {
      name: "Romance",
      description: "Love stories and romantic tales",
      books: [
        {
          id: "fearless",
          title: "Fearless",
          author: "Lauren Roberts",
          coverImage: "/images/fearless-cover.webp",
          rating: 4.9,
          reviewCount: 41,
          price: 22.99,
          link: "/books/fearless",
        },
        {
          id: "great-big-beautiful-life",
          title: "Great Big Beautiful Life",
          author: "Emily Henry",
          coverImage: "/images/great-big-beautiful-life-cover.webp",
          rating: 4.5,
          reviewCount: 33,
          price: 18.99,
          link: "/books/great-big-beautiful-life",
        },
      ]
    },
  }

  const category = categoryData[categoryId as keyof typeof categoryData]

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/categories">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/categories">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-2">{category.name}</h1>
        <p className="text-muted-foreground">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.books.map((book) => (
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
                <div className="flex items-center justify-between mb-2">
                  <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  <span className="text-sm font-medium text-foreground">${book.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 