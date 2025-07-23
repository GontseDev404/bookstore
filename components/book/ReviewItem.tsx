import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ReplyForm } from './ReplyForm';

export interface ReviewReply {
  id: string;
  author: string;
  date: string;
  content: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  helpfulVotes?: number;
  userVoted?: boolean;
  replies?: ReviewReply[];
}

interface ReviewItemProps {
  review: CustomerReview;
  helpfulVotes: number;
  userVoted: boolean;
  onHelpfulVote: (reviewId: string) => void;
  onReply: (reviewId: string, replyContent: string) => void;
  onReport: (reviewId: string) => void;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({
  review,
  helpfulVotes,
  userVoted,
  onHelpfulVote,
  onReply,
  onReport,
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <Card className="mb-4">
      <CardContent>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">{review.author}</span>
          <span className="text-xs text-muted-foreground">{review.date}</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={
                star <= review.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-muted text-muted-foreground'
              }
              aria-label={star <= review.rating ? 'Filled star' : 'Empty star'}
            />
          ))}
        </div>
        <div className="font-semibold mb-1">{review.title}</div>
        <div className="mb-2 text-sm text-foreground">{review.content}</div>
        <div className="flex items-center gap-4 text-xs">
          <Button
            variant={userVoted ? 'default' : 'outline'}
            size="sm"
            onClick={() => onHelpfulVote(review.id)}
            aria-label={userVoted ? 'Remove helpful vote' : 'Mark as helpful'}
          >
            <ThumbsUp className="h-4 w-4 mr-1" />
            {helpfulVotes} Helpful
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowReplyForm((prev) => !prev)}
            aria-label="Reply to review"
          >
            <MessageCircle className="h-4 w-4 mr-1" />
            Reply
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onReport(review.id)}
            aria-label="Report review"
          >
            <Flag className="h-4 w-4 mr-1" />
            Report
          </Button>
        </div>
        {showReplyForm && (
          <ReplyForm
            onSubmit={(replyContent: string) => {
              onReply(review.id, replyContent);
              setShowReplyForm(false);
            }}
            onCancel={() => setShowReplyForm(false)}
          />
        )}
        {review.replies && review.replies.length > 0 && (
          <div className="mt-3 pl-4 border-l">
            {review.replies.map((reply) => (
              <div key={reply.id} className="mb-2">
                <div className="font-semibold text-xs">{reply.author}</div>
                <div className="text-xs text-muted-foreground mb-1">{reply.date}</div>
                <div className="text-sm">{reply.content}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}; 