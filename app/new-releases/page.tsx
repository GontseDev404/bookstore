"use client"

import Image from "next/image"
import Link from "next/link"
import { BookRating } from "@/components/book/book-rating"
import { useState } from "react"
import { SearchResults } from "@/components/search-results"

export default function NewReleasesPage() {
  // New Releases data
  const newReleases = [
    {
      id: "never-flinch",
      title: "Never Flinch",
      author: "Stephen King",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%287%29-OMK3W3CZ6GOb4axULSgC49I7jGZIc5.webp",
      rating: 4.8,
      reviewCount: 42,
      link: "/books/never-flinch",
    },
    {
      id: "emperor-of-gladness",
      title: "The Emperor of Gladness",
      author: "Ocean Vuong",
      coverImage: "/images/the-emperor-of-gladness-cover.webp",
      rating: 4.9,
      reviewCount: 42,
      link: "/books/emperor-of-gladness",
    },
    {
      id: "run-for-the-hills",
      title: "Run for the Hills",
      author: "Kevin Wilson",
      coverImage: "/images/run-for-the-hills-cover.webp",
      rating: 4.7,
      reviewCount: 36,
      link: "/books/run-for-the-hills",
    },
    {
      id: "speak-to-me-of-home",
      title: "Speak to Me of Home",
      author: "Jeanine Cummins",
      coverImage: "/images/speak-to-me-of-home-cover.webp",
      rating: 4.6,
      reviewCount: 31,
      link: "/books/speak-to-me-of-home",
    },
    {
      id: "sleep",
      title: "Sleep: A Novel",
      author: "Honor Jones",
      coverImage: "/images/sleep-cover.webp",
      rating: 4.4,
      reviewCount: 28,
      link: "/books/sleep",
    },
    {
      id: "marble-hall-murders",
      title: "Marble Hall Murders",
      author: "Anthony Horowitz",
      coverImage: "/images/marble-hall-murders-cover.webp",
      rating: 4.8,
      reviewCount: 39,
      link: "/books/marble-hall-murders",
    },
    {
      id: "big-dumb-eyes",
      title: "Big Dumb Eyes: Stories from a Comedian",
      author: "Nate Bargatze",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%286%29-RTR1mIiouECBNXhGHvnA1jkty7ROcf.webp",
      rating: 4.5,
      reviewCount: 32,
      link: "/books/big-dumb-eyes",
    },
    {
      id: "class-clown",
      title: "Class Clown: The Memoirs of a Class Clown",
      author: "Dave Barry",
      coverImage: "/images/class-clown-cover.webp",
      rating: 4.7,
      reviewCount: 29,
      link: "/books/class-clown",
    },
  ]

  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [gridSize, setGridSize] = useState<'2x2' | '4x4' | '6x6'>('4x4');

  const getGridClass = () => {
    if (currentView === 'list') return 'grid-cols-1';
    switch (gridSize) {
      case '2x2':
        return 'grid-cols-1 sm:grid-cols-2';
      case '4x4':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      case '6x6':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">New Releases</h1>
        <p className="text-muted-foreground">Discover the latest books hitting our shelves</p>
      </div>
      <div className="mb-4">
        <SearchResults
          resultsCount={newReleases.length}
          onSortChange={() => {}}
          onViewChange={setCurrentView}
          onFiltersToggle={() => {}}
          currentSort={''}
          currentView={currentView}
          gridSize={gridSize}
          onGridSizeChange={setGridSize}
        />
      </div>
      <div className={`grid gap-6 ${getGridClass()}`}>
        {newReleases.map((book) => (
          currentView === 'list' ? (
            <div key={book.id} className="flex gap-4 items-center bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4">
              <div className="relative h-32 w-24 flex-shrink-0">
                <Link href={book.link} className="absolute inset-0">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover rounded"
                  />
                </Link>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                <BookRating rating={book.rating} reviewCount={book.reviewCount} />
              </div>
            </div>
          ) : (
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
          )
        ))}
      </div>
    </div>
  )
} 