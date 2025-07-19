"use client"

import { Star, ThumbsUp, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CustomerReview {
  id: string
  author: string
  date: string
  rating: number
  title: string
  content: string
}

interface BookReviewsProps {
  reviews: CustomerReview[]
  averageRating: number
  totalReviews: number
  editorialReview?: string
}

export function BookReviews({ reviews, averageRating, totalReviews, editorialReview }: BookReviewsProps) {
  const editorialReviewClass = "rounded-lg bg-muted p-6 border-l-4 border-primary mb-6 shadow-sm"

  const getStarClass = (starNumber: number, rating: number) => {
    if (starNumber <= rating) {
      return "fill-yellow-400 text-yellow-400"
    } else if (starNumber - rating < 1) {
      return "fill-yellow-400/50 text-yellow-400"
    } else {
      return "fill-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Editorial Review */}
      {editorialReview && (
        <div className={editorialReviewClass}>
          <h3 className="mb-2 text-sm font-semibold text-foreground">Editorial Review</h3>
          <p className="text-sm leading-relaxed italic text-muted-foreground">{editorialReview}</p>
        </div>
      )}

      {/* Rating Summary */}
      <div className="mb-6 flex items-center justify-between bg-gradient-to-r from-muted to-background p-4 rounded-lg">
        <div>
          <div className="text-3xl font-bold text-primary">{averageRating.toFixed(1)}</div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${getStarClass(i + 1, averageRating)}`} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">{totalReviews} reviews</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">Write a Review</Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 hover:bg-muted/30 p-4 rounded-lg transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-semibold text-foreground">{review.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${getStarClass(i + 1, review.rating)}`} />
                    ))}
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">
                    by {review.author} • {review.date}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.content}</p>
            <div className="flex items-center gap-4 mt-3">
              <Button variant="ghost" size="sm" className="h-8 px-3">
                <ThumbsUp className="h-3 w-3 mr-1" />
                Helpful (0)
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-3">
                <MessageCircle className="h-3 w-3 mr-1" />
                Reply
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
