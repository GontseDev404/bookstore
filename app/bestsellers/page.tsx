"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SearchResults } from "@/components/search-results"
import { BookRating } from "@/components/book/book-rating"
import { staffFavorites, StaffFavoriteBook } from "@/data/bestsellers"

export default function BestsellersPage() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Staff Favorites</h1>
        <p className="text-muted-foreground">Handpicked recommendations from our book-loving staff</p>
      </div>
      <div className="mb-4">
        <SearchResults
          resultsCount={staffFavorites.length}
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
        {staffFavorites.map((book) => (
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