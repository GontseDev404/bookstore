"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid3X3, List, Filter, Search } from "lucide-react"

interface SearchResultsProps {
  resultsCount: number
  onSortChange: (sortBy: string) => void
  onViewChange: (view: 'grid' | 'list') => void
  onFiltersToggle: () => void
  currentSort: string
  currentView: 'grid' | 'list'
  gridSize?: '2x2' | '4x4' | '6x6'
  onGridSizeChange?: (size: '2x2' | '4x4' | '6x6') => void
}

export function SearchResults({
  resultsCount,
  onSortChange,
  onViewChange,
  onFiltersToggle,
  currentSort,
  currentView,
  gridSize,
  onGridSizeChange
}: SearchResultsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 p-4 bg-muted rounded-lg gap-2 sm:gap-4">
      <div className="flex items-center gap-2 flex-wrap">
        <Search className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {resultsCount} result{resultsCount !== 1 ? 's' : ''} found
        </span>
        <Select value={currentSort} onValueChange={onSortChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="title-asc">Title A-Z</SelectItem>
            <SelectItem value="title-desc">Title Z-A</SelectItem>
            <SelectItem value="author-asc">Author A-Z</SelectItem>
            <SelectItem value="author-desc">Author Z-A</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating-desc">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={onFiltersToggle}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <div className="flex items-center gap-0.5 border rounded-md bg-background">
          <Button
            variant={currentView === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('grid')}
            className="rounded-r-none"
            aria-label="Grid view"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={currentView === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('list')}
            className="rounded-l-none"
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
          {currentView === 'grid' && gridSize && onGridSizeChange && (
            <Select value={gridSize} onValueChange={onGridSizeChange}>
              <SelectTrigger className="w-[90px] rounded-none border-l-0 border-r-0 h-9 text-xs px-2">
                <SelectValue placeholder="Grid" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="2x2">2 x 2</SelectItem>
                <SelectItem value="4x4">4 x 4</SelectItem>
                <SelectItem value="6x6">6 x 6</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
    </div>
  )
} 