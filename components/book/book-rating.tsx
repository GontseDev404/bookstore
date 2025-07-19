"use client"

import { Star } from "lucide-react"

interface BookRatingProps {
  rating: number
  reviewCount?: number
  size?: "sm" | "md" | "lg"
  showCount?: boolean
}

export function BookRating({ rating, reviewCount, size = "md", showCount = true }: BookRatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4", 
    lg: "h-5 w-5"
  }

  const getStarClass = (starNumber: number) => {
    if (starNumber <= rating) {
      return "fill-yellow-400 text-yellow-400"
    } else if (starNumber - rating < 1) {
      return "fill-yellow-400/50 text-yellow-400"
    } else {
      return "fill-muted text-muted-foreground"
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${getStarClass(star)}`}
        />
      ))}
      {showCount && reviewCount && (
        <span className="ml-1 text-sm text-muted-foreground">
          ({reviewCount})
        </span>
      )}
    </div>
  )
}
