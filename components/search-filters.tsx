"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, X, Star } from "lucide-react"

interface SearchFiltersProps {
  onFiltersChange: (filters: SearchFilters) => void
  isOpen: boolean
  onToggle: () => void
}

export interface SearchFilters {
  query: string
  category: string
  priceRange: [number, number]
  rating: number
  format: string[]
  author: string
  inStock: boolean
  onSale: boolean
}

export function SearchFilters({ onFiltersChange, isOpen, onToggle }: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    category: "all",
    priceRange: [0, 100],
    rating: 0,
    format: [],
    author: "",
    inStock: true,
    onSale: false,
  })

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters: SearchFilters = {
      query: "",
      category: "all",
      priceRange: [0, 100] as [number, number],
      rating: 0,
      format: [],
      author: "",
      inStock: true,
      onSale: false,
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  return (
    <Card className={`transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Advanced Search
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onToggle}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search Query */}
        <div className="space-y-2">
          <Label htmlFor="search-query">Search Query</Label>
          <Input
            id="search-query"
            placeholder="Search by title, author, ISBN..."
            value={filters.query}
            onChange={(e) => handleFilterChange('query', e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <Label>Category</Label>
          <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="fiction">Fiction</SelectItem>
              <SelectItem value="nonfiction">Non-Fiction</SelectItem>
              <SelectItem value="children">Children's Books</SelectItem>
              <SelectItem value="mystery">Mystery & Thriller</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="scifi">Science Fiction</SelectItem>
              <SelectItem value="biography">Biography</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="self-help">Self-Help</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <Label>Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</Label>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => handleFilterChange('priceRange', value)}
            max={100}
            min={0}
            step={5}
            className="w-full"
          />
        </div>

        {/* Rating Filter */}
        <div className="space-y-2">
          <Label>Minimum Rating</Label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button
                key={star}
                variant={filters.rating >= star ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange('rating', star)}
                className="p-1"
              >
                <Star className="h-4 w-4" />
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleFilterChange('rating', 0)}
            >
              Any
            </Button>
          </div>
        </div>

        {/* Format Filter */}
        <div className="space-y-2">
          <Label>Format</Label>
          <div className="space-y-2">
            {['Hardcover', 'Paperback', 'E-book', 'Audiobook'].map((format) => (
              <div key={format} className="flex items-center space-x-2">
                <Checkbox
                  id={format}
                  checked={filters.format.includes(format)}
                  onChange={(e) => {
                    const checked = (e.target as HTMLInputElement).checked;
                    const newFormats = checked
                      ? [...filters.format, format]
                      : filters.format.filter(f => f !== format)
                    handleFilterChange('format', newFormats)
                  }}
                />
                <Label htmlFor={format}>{format}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Author Filter */}
        <div className="space-y-2">
          <Label htmlFor="author-filter">Author</Label>
          <Input
            id="author-filter"
            placeholder="Filter by author..."
            value={filters.author}
            onChange={(e) => handleFilterChange('author', e.target.value)}
          />
        </div>

        {/* Availability Filters */}
        <div className="space-y-2">
          <Label>Availability</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="in-stock"
                checked={filters.inStock}
                onChange={(e) => handleFilterChange('inStock', (e.target as HTMLInputElement).checked)}
              />
              <Label htmlFor="in-stock">In Stock</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="on-sale"
                checked={filters.onSale}
                onChange={(e) => handleFilterChange('onSale', (e.target as HTMLInputElement).checked)}
              />
              <Label htmlFor="on-sale">On Sale</Label>
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  )
} 