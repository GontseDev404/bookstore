"use client"

import { Star, ThumbsUp, MessageCircle, X, Send, User, Filter, SortAsc, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface CustomerReview {
  id: string
  author: string
  date: string
  rating: number
  title: string
  content: string
  helpfulVotes?: number
  userVoted?: boolean
  replies?: ReviewReply[]
}

interface ReviewReply {
  id: string
  author: string
  date: string
  content: string
}

interface BookReviewsProps {
  reviews: CustomerReview[]
  averageRating: number
  totalReviews: number
  editorialReview?: string
}

export function BookReviews({ reviews, averageRating, totalReviews, editorialReview }: BookReviewsProps) {
  const [showWriteReview, setShowWriteReview] = useState(false)
  const [showReplyForm, setShowReplyForm] = useState<string | null>(null)
  const [newReview, setNewReview] = useState({
    rating: 0,
    title: "",
    content: ""
  })
  const [reviewsData, setReviewsData] = useState<CustomerReview[]>(reviews)
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, { count: number; userVoted: boolean }>>({})
  const [sortBy, setSortBy] = useState("newest")
  const [filterRating, setFilterRating] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

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

  const handleWriteReview = () => {
    setShowWriteReview(true)
  }

  const handleSubmitReview = () => {
    if (newReview.rating === 0 || !newReview.title || !newReview.content) {
      alert("Please fill in all fields and select a rating")
      return
    }

    const review: CustomerReview = {
      id: `review-${Date.now()}`,
      author: "Demo User",
      date: new Date().toLocaleDateString(),
      rating: newReview.rating,
      title: newReview.title,
      content: newReview.content,
      helpfulVotes: 0,
      userVoted: false,
      replies: []
    }

    setReviewsData([review, ...reviewsData])
    setNewReview({ rating: 0, title: "", content: "" })
    setShowWriteReview(false)
  }

  const handleHelpfulVote = (reviewId: string) => {
    setHelpfulVotes(prev => {
      const current = prev[reviewId] || { count: 0, userVoted: false }
      return {
        ...prev,
        [reviewId]: {
          count: current.userVoted ? current.count - 1 : current.count + 1,
          userVoted: !current.userVoted
        }
      }
    })
  }

  const handleReply = (reviewId: string, replyContent: string) => {
    if (!replyContent.trim()) return

    const reply: ReviewReply = {
      id: `reply-${Date.now()}`,
      author: "Demo User",
      date: new Date().toLocaleDateString(),
      content: replyContent
    }

    setReviewsData(prev => 
      prev.map(review => 
        review.id === reviewId 
          ? { ...review, replies: [...(review.replies || []), reply] }
          : review
      )
    )
    setShowReplyForm(null)
  }

  const handleReportReview = (reviewId: string) => {
    alert("Review reported. Thank you for helping maintain quality content.")
  }

  // Sort and filter reviews
  const sortedAndFilteredReviews = reviewsData
    .filter(review => {
      if (filterRating === "all") return true
      return review.rating === parseInt(filterRating)
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "highest":
          return b.rating - a.rating
        case "lowest":
          return a.rating - b.rating
        case "most_helpful":
          return (helpfulVotes[b.id]?.count || 0) - (helpfulVotes[a.id]?.count || 0)
        default:
          return 0
      }
    })

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
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={handleWriteReview}
        >
          Write a Review
        </Button>
      </div>

      {/* Review Filters and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SortAsc className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="lowest">Lowest Rated</SelectItem>
              <SelectItem value="most_helpful">Most Helpful</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {showFilters && (
          <div className="flex items-center gap-2">
            <Select value={filterRating} onValueChange={setFilterRating}>
              <SelectTrigger className="w-[140px]">
                <Star className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedAndFilteredReviews.map((review) => (
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
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReportReview(review.id)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Flag className="h-3 w-3" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.content}</p>
            
            {/* Review Replies */}
            {review.replies && review.replies.length > 0 && (
              <div className="mt-4 ml-6 space-y-3 border-l-2 border-muted pl-4">
                {review.replies.map((reply) => (
                  <div key={reply.id} className="bg-muted/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-foreground">{reply.author}</span>
                      <span className="text-xs text-muted-foreground">• {reply.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 mt-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`h-8 px-3 ${helpfulVotes[review.id]?.userVoted ? 'bg-primary/10 text-primary' : ''}`}
                onClick={() => handleHelpfulVote(review.id)}
              >
                <ThumbsUp className={`h-3 w-3 mr-1 ${helpfulVotes[review.id]?.userVoted ? 'fill-current' : ''}`} />
                Helpful ({helpfulVotes[review.id]?.count || 0})
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-3"
                onClick={() => setShowReplyForm(showReplyForm === review.id ? null : review.id)}
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                Reply
              </Button>
            </div>

            {/* Reply Form */}
            {showReplyForm === review.id && (
              <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start gap-2">
                  <Textarea
                    placeholder="Write your reply..."
                    className="flex-1"
                    rows={2}
                    id={`reply-${review.id}`}
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      const content = (document.getElementById(`reply-${review.id}`) as HTMLTextAreaElement)?.value
                      if (content) {
                        handleReply(review.id, content)
                      }
                    }}
                  >
                    <Send className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}

        {sortedAndFilteredReviews.length === 0 && (
          <div className="text-center py-8">
            <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No reviews found</h3>
            <p className="text-muted-foreground mb-4">
              {filterRating !== "all" 
                ? `No ${filterRating}-star reviews match your criteria`
                : "Be the first to write a review!"
              }
            </p>
            <Button onClick={handleWriteReview}>
              Write the First Review
            </Button>
          </div>
        )}
      </div>

      {/* Write Review Dialog */}
      <Dialog open={showWriteReview} onOpenChange={setShowWriteReview}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Write a Review</DialogTitle>
            <DialogDescription>
              Share your thoughts about this book with other readers.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Rating */}
            <div>
              <Label>Rating</Label>
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                    className="p-1"
                  >
                    <Star 
                      className={`h-6 w-6 ${
                        star <= newReview.rating 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-muted-foreground"
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <Label htmlFor="review-title">Review Title</Label>
              <Input
                id="review-title"
                placeholder="Summarize your review in a few words..."
                value={newReview.title}
                onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                className="mt-1"
              />
            </div>

            {/* Content */}
            <div>
              <Label htmlFor="review-content">Review</Label>
              <Textarea
                id="review-content"
                placeholder="Share your detailed thoughts about this book..."
                value={newReview.content}
                onChange={(e) => setNewReview(prev => ({ ...prev, content: e.target.value }))}
                rows={6}
                className="mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setShowWriteReview(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitReview}>
                Submit Review
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
