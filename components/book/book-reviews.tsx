"use client"

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ReviewList, CustomerReview } from './ReviewList';
import { ReviewForm } from './ReviewForm';

interface BookReviewsProps {
  reviews: CustomerReview[];
  averageRating: number;
  totalReviews: number;
  editorialReview?: string;
}

export const BookReviews: React.FC<BookReviewsProps> = ({
  reviews,
  averageRating,
  totalReviews,
  editorialReview,
}) => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [reviewsData, setReviewsData] = useState<CustomerReview[]>(reviews);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, { count: number; userVoted: boolean }>>({});
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');
  const [error, setError] = useState<string | null>(null);

  const handleHelpfulVote = (reviewId: string) => {
    setHelpfulVotes((prev) => {
      const current = prev[reviewId] || { count: 0, userVoted: false };
      return {
        ...prev,
        [reviewId]: {
          count: current.userVoted ? current.count - 1 : current.count + 1,
          userVoted: !current.userVoted,
        },
      };
    });
  };

  const handleReply = (reviewId: string, replyContent: string) => {
    setReviewsData((prev) =>
      prev.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              replies: [
                ...(review.replies || []),
                {
                  id: `reply-${Date.now()}`,
                  author: 'Demo User',
                  date: new Date().toLocaleDateString(),
                  content: replyContent,
                },
              ],
            }
          : review
      )
    );
  };

  const handleReportReview = (reviewId: string) => {
    setError('Thank you for reporting. Our team will review this soon.');
    setTimeout(() => setError(null), 3000);
  };

  const handleSubmitReview = (rating: number, title: string, content: string) => {
    const review: CustomerReview = {
      id: `review-${Date.now()}`,
      author: 'Demo User',
      date: new Date().toLocaleDateString(),
      rating,
      title,
      content,
      helpfulVotes: 0,
      userVoted: false,
      replies: [],
    };
    setReviewsData([review, ...reviewsData]);
    setShowWriteReview(false);
  };

  const filteredSortedReviews = useMemo(() => {
    let filtered = reviewsData;
    if (filterRating !== 'all') {
      filtered = filtered.filter((r) => r.rating === Number(filterRating));
    }
    if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => (a.date < b.date ? 1 : -1));
    } else if (sortBy === 'oldest') {
      filtered = [...filtered].sort((a, b) => (a.date > b.date ? 1 : -1));
    } else if (sortBy === 'highest') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'lowest') {
      filtered = [...filtered].sort((a, b) => a.rating - b.rating);
    }
    return filtered;
  }, [reviewsData, sortBy, filterRating]);

  return (
    <section>
      {editorialReview && (
        <div className="rounded-lg bg-muted p-6 border-l-4 border-primary mb-6 shadow-sm">
          <h3 className="font-semibold mb-2">Editorial Review</h3>
          <p className="text-muted-foreground text-sm">{editorialReview}</p>
        </div>
      )}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{averageRating.toFixed(1)} ★</Badge>
            <span className="text-muted-foreground text-sm">{totalReviews} reviews</span>
            <Button size="sm" onClick={() => setShowWriteReview(true)} className="ml-auto">
              Write a Review
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="highest">Highest Rated</SelectItem>
                <SelectItem value="lowest">Lowest Rated</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterRating} onValueChange={setFilterRating}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Filter by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                {[5, 4, 3, 2, 1].map((star) => (
                  <SelectItem key={star} value={String(star)}>
                    {star} stars
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {error && <div className="text-red-600 text-xs mb-2">{error}</div>}
          <ReviewList
            reviews={filteredSortedReviews}
            helpfulVotes={helpfulVotes}
            onHelpfulVote={handleHelpfulVote}
            onReply={handleReply}
            onReport={handleReportReview}
          />
        </CardContent>
      </Card>
      <Dialog open={showWriteReview} onOpenChange={setShowWriteReview}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Write a Review</DialogTitle>
            <DialogDescription>Share your thoughts about this book.</DialogDescription>
          </DialogHeader>
          <ReviewForm
            onSubmit={handleSubmitReview}
            onCancel={() => setShowWriteReview(false)}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};
