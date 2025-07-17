import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookRating } from "./book-rating"
import { Button } from "@/components/ui/button"

interface Review {
  id: string
  author: string
  date: string
  rating: number
  title: string
  content: string
}

interface BookReviewsProps {
  editorialReviews: string[]
  customerReviews: Review[]
  averageRating: number
  reviewCount: number
}

export function BookReviews({ editorialReviews, customerReviews, averageRating, reviewCount }: BookReviewsProps) {
  // Add a new CSS class for the editorial reviews to make them stand out more
  const editorialReviewClass = "rounded-lg bg-amber-50 p-6 border-l-4 border-amber-400 mb-6 shadow-sm"

  return (
    <Tabs defaultValue="editorial" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="editorial">Editorial Reviews</TabsTrigger>
        <TabsTrigger value="customer">Customer Reviews ({reviewCount})</TabsTrigger>
      </TabsList>
      <TabsContent value="editorial" className="mt-6">
        <div className="space-y-6">
          {editorialReviews.map((review, index) => (
            <div key={index} className={editorialReviewClass}>
              <p className="text-sm leading-relaxed italic text-amber-900">{review}</p>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="customer" className="mt-6">
        <div className="mb-6 flex items-center justify-between bg-gradient-to-r from-amber-50 to-white p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-amber-600">{averageRating.toFixed(1)}</div>
            <BookRating rating={averageRating} reviewCount={reviewCount} showCount={false} />
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600">Write a Review</Button>
        </div>
        <div className="space-y-6">
          {customerReviews.map((review) => (
            <div key={review.id} className="border-b pb-6 hover:bg-amber-50/30 p-4 rounded-lg transition-colors">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold text-amber-800">{review.title}</h4>
                <BookRating rating={review.rating} reviewCount={0} showCount={false} />
              </div>
              <p className="mb-2 text-sm text-amber-700">
                By <span className="font-medium">{review.author}</span> on {review.date}
              </p>
              <p className="text-sm leading-relaxed">{review.content}</p>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
