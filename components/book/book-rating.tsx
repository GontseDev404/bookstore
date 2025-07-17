import { Star } from "lucide-react"

interface BookRatingProps {
  rating: number
  reviewCount: number
  showCount?: boolean
}

export function BookRating({ rating, reviewCount, showCount = true }: BookRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : i < rating
                ? "fill-amber-400/50 text-amber-400"
                : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
      {showCount && (
        <span className="ml-1 text-sm text-muted-foreground">
          ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
        </span>
      )}
    </div>
  )
}
