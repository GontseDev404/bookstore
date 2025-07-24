import React from 'react';
import { CustomerReview } from './ReviewItem';
import { ReviewItem } from './ReviewItem';

export type { CustomerReview } from './ReviewItem';

interface ReviewListProps {
  reviews: CustomerReview[];
  helpfulVotes: Record<string, { count: number; userVoted: boolean }>;
  onHelpfulVote: (reviewId: string) => void;
  onReply: (reviewId: string, replyContent: string) => void;
  onReport: (reviewId: string) => void;
}

export const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  helpfulVotes,
  onHelpfulVote,
  onReply,
  onReport,
}) => (
  <div>
    {reviews.map((review) => (
      <ReviewItem
        key={review.id}
        review={review}
        helpfulVotes={helpfulVotes[review.id]?.count ?? review.helpfulVotes ?? 0}
        userVoted={helpfulVotes[review.id]?.userVoted ?? review.userVoted ?? false}
        onHelpfulVote={onHelpfulVote}
        onReply={onReply}
        onReport={onReport}
      />
    ))}
  </div>
); 