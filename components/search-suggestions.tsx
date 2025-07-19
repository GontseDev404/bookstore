"use client"

import { useState, useEffect, useRef } from "react"
import { Search, BookOpen, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SearchSuggestion {
  id: string
  type: 'title' | 'author' | 'category' | 'isbn'
  text: string
  subtitle?: string
  icon: React.ReactNode
}

interface SearchSuggestionsProps {
  query: string
  isVisible: boolean
  onSelect: (suggestion: SearchSuggestion) => void
  onClose: () => void
}

const sampleSuggestions: SearchSuggestion[] = [
  {
    id: '1',
    type: 'title',
    text: 'Fearless',
    subtitle: 'by Lauren Roberts',
    icon: <BookOpen className="h-4 w-4" />
  },
  {
    id: '2',
    type: 'author',
    text: 'Lauren Roberts',
    subtitle: 'Author',
    icon: <User className="h-4 w-4" />
  },
  {
    id: '3',
    type: 'title',
    text: 'The Tenant',
    subtitle: 'by Freida McFadden',
    icon: <BookOpen className="h-4 w-4" />
  },
  {
    id: '4',
    type: 'category',
    text: 'Fiction',
    subtitle: 'Category',
    icon: <Tag className="h-4 w-4" />
  },
  {
    id: '5',
    type: 'title',
    text: 'Great Big Beautiful Life',
    subtitle: 'by Emily Henry',
    icon: <BookOpen className="h-4 w-4" />
  },
  {
    id: '6',
    type: 'author',
    text: 'Emily Henry',
    subtitle: 'Author',
    icon: <User className="h-4 w-4" />
  },
  {
    id: '7',
    type: 'category',
    text: 'Romance',
    subtitle: 'Category',
    icon: <Tag className="h-4 w-4" />
  },
  {
    id: '8',
    type: 'isbn',
    text: '978-1234567890',
    subtitle: 'ISBN',
    icon: <Search className="h-4 w-4" />
  }
]

export function SearchSuggestions({ query, isVisible, onSelect, onClose }: SearchSuggestionsProps) {
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!query.trim()) {
      setFilteredSuggestions([])
      return
    }

    const filtered = sampleSuggestions.filter(suggestion =>
      suggestion.text.toLowerCase().includes(query.toLowerCase()) ||
      suggestion.subtitle?.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8) // Limit to 8 suggestions

    setFilteredSuggestions(filtered)
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev < filteredSuggestions.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredSuggestions.length - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          if (filteredSuggestions[selectedIndex]) {
            onSelect(filteredSuggestions[selectedIndex])
          }
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isVisible, selectedIndex, filteredSuggestions, onSelect, onClose])

  if (!isVisible || filteredSuggestions.length === 0) {
    return null
  }

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1">
      <Card className="shadow-lg border-0">
        <CardContent className="p-0">
          <div ref={containerRef} className="max-h-80 overflow-y-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <Button
                key={suggestion.id}
                variant="ghost"
                className={`w-full justify-start px-4 py-3 rounded-none border-b last:border-b-0 ${
                  index === selectedIndex ? 'bg-accent' : ''
                }`}
                onClick={() => onSelect(suggestion)}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="text-muted-foreground">
                    {suggestion.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{suggestion.text}</div>
                    {suggestion.subtitle && (
                      <div className="text-sm text-muted-foreground">
                        {suggestion.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 