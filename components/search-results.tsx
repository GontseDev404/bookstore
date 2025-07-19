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
}

export function SearchResults({
  resultsCount,
  onSortChange,
  onViewChange,
  onFiltersToggle,
  currentSort,
  currentView
}: SearchResultsProps) {
  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
      <div className="flex items-center gap-2">
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

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onFiltersToggle}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>

        <div className="flex border rounded-md">
          <Button
            variant={currentView === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('grid')}
            className="rounded-r-none"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={currentView === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('list')}
            className="rounded-l-none"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 