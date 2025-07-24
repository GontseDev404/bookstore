export interface CustomerReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

const bookReviews: Record<string, CustomerReview[]> = {
  "silver-feet-and-her-wonder": [
    {
      id: "review1",
      author: "BookLover123",
      date: "April 15, 2025",
      rating: 5,
      title: "A Charming and Beautiful Story",
      content:
        "I picked this up on a whim, and I'm so glad I did! 'Silver Feet and her Wonder' is such a charming and beautifully written story. It's ostensibly a children's book, but the themes of self-acceptance and finding your unique place in the world resonate deeply, no matter your age. Silver Feet is an endearing protagonist, and her journey is both inspiring and heartwarming. A delightful read that leaves you feeling uplifted.",
    },
    // ... repeat for all reviews for this book ...
  ],
  // ... repeat for all other books ...
};

export function getBookReviewsById(bookId: string): CustomerReview[] {
  return bookReviews[bookId] || [];
} 