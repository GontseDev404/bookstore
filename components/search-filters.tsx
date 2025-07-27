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
    <Card className={`transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} p-2 sm:p-4`}>
      <CardHeader className="pb-2 sm:pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
            Advanced Search
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onToggle} className="h-7 w-7">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          {/* Search Query */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="search-query" className="text-xs">Search</Label>
            <Input
              id="search-query"
              placeholder="Title, author, ISBN..."
              value={filters.query}
              onChange={(e) => handleFilterChange('query', e.target.value)}
              className="h-8 text-xs"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-col gap-1">
            <Label className="text-xs">Category</Label>
            <Select value={String(filters.category)} onValueChange={(value: string) => handleFilterChange('category', value)}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Fiction">Fiction</SelectItem>
                <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                <SelectItem value="Audiobooks">Audiobooks</SelectItem>
                <SelectItem value="Children's">Children's</SelectItem>
                <SelectItem value="Academic">Academic</SelectItem>
                <SelectItem value="Magazines">Magazines</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-1">
            <Label className="text-xs">Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}</Label>
            <Slider
              value={filters.priceRange as [number, number]}
              onValueChange={(value: number[]) => handleFilterChange('priceRange', value as [number, number])}
              max={100}
              min={0}
              step={5}
              className="w-full"
            />
          </div>

          {/* Rating Filter */}
          <div className="flex flex-col gap-1">
            <Label className="text-xs">Min Rating</Label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant={filters.rating >= star ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange('rating', star)}
                  className="p-1 h-7 w-7"
                >
                  <Star className="h-3 w-3" />
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleFilterChange('rating', 0)}
                className="h-7 w-7 text-xs"
              >
                Any
              </Button>
            </div>
          </div>

          {/* Format Filter */}
          <div className="flex flex-col gap-1">
            <Label className="text-xs">Format</Label>
            <div className="flex flex-wrap gap-2">
              {['Hardcover', 'Paperback', 'E-book', 'Audiobook'].map((format) => (
                <div key={format} className="flex items-center space-x-1">
                  <Checkbox
                    id={format}
                    checked={filters.format.includes(format)}
                    onChange={(e) => {
                      const checked = (e.target as HTMLInputElement).checked;
                      const newFormats = checked
                        ? [...filters.format, format]
                        : filters.format.filter((f: string) => f !== format)
                      handleFilterChange('format', newFormats)
                    }}
                    className="h-4 w-4"
                  />
                  <Label htmlFor={format} className="text-xs">{format}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Author Filter */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="author-filter" className="text-xs">Author</Label>
            <Input
              id="author-filter"
              placeholder="Filter by author..."
              value={filters.author}
              onChange={(e) => handleFilterChange('author', e.target.value)}
              className="h-8 text-xs"
            />
          </div>

          {/* Availability Filters */}
          <div className="flex flex-col gap-1">
            <Label className="text-xs">Availability</Label>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="in-stock"
                  checked={filters.inStock}
                  onChange={(e) => handleFilterChange('inStock', (e.target as HTMLInputElement).checked)}
                  className="h-4 w-4"
                />
                <Label htmlFor="in-stock" className="text-xs">In Stock</Label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="on-sale"
                  checked={filters.onSale}
                  onChange={(e) => handleFilterChange('onSale', (e.target as HTMLInputElement).checked)}
                  className="h-4 w-4"
                />
                <Label htmlFor="on-sale" className="text-xs">On Sale</Label>
              </div>
            </div>
          </div>
        </div>
        {/* Clear Filters */}
        <Button variant="outline" onClick={clearFilters} className="w-full h-8 text-xs mt-2">
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  )
} 