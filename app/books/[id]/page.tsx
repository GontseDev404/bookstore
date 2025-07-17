import { Heart, Share2 } from "lucide-react"
import { AppShell } from "@/components/layout/app-shell"
import { BookCover } from "@/components/book/book-cover"
import { BookRating } from "@/components/book/book-rating"
import { BookFormatSelector } from "@/components/book/book-format-selector"
import { BookReviews } from "@/components/book/book-reviews"
import { RelatedBooks } from "@/components/book/related-books"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function BookPage() {
  // This would normally come from a database or API
  const book = {
    id: "silver-feet-and-her-wonder",
    title: "Silver Feet and Her Wonder",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/silver-feet-cover.png",
    rating: 4.8,
    reviewCount: 37,
    description: `"Silver Feet and her Wonder" is a captivating tale that transports readers into the enchanting world of the bird family, offering a unique perspective on the concept of birth and identity. Through the character of Silver Feet, the narrative delves into themes of individuality, acceptance, and self-discovery, presenting a thought-provoking exploration of what it means to be different in a society that values conformity.

As the story unfolds, readers are invited to embark on a journey of wonder and introspection, guided by the resilient spirit of Silver Feet and her extraordinary journey of self-realization amidst the challenges of her avian community.

With stunning illustrations that bring the vibrant pond ecosystem to life and lyrical prose that captivates young minds, this book is perfect for children ages 4-8 and makes an excellent bedtime story that parents will enjoy reading again and again.`,
    formats: [
      { id: "hardcover", name: "Hardcover", price: 18.99, originalPrice: 22.99 },
      { id: "paperback", name: "Paperback", price: 12.99 },
      { id: "ebook", name: "eBook", price: 9.99 },
    ],
    details: {
      isbn: "9781234567890",
      publisher: "Sunshine Children's Press",
      publicationDate: "03/15/2025",
      pages: 42,
      language: "English",
      age: "4-8 years",
    },
    editorialReviews: [
      `"Silver Feet and her Wonder" is a gracefully penned narrative that soars beyond the typical children's fable, offering a profound yet accessible exploration of individuality within a conformist society. Set in an enchantingly realized avian world, the story follows Silver Feet, a young bird whose unusual attributes set her apart from her peers. The author skillfully uses this premise not just to tell a tale of difference, but to delve into the very essence of birth, identity, and the often-challenging journey towards self-acceptance. The prose is gentle yet evocative, painting vivid pictures of Silver Feet's world and her internal struggles and triumphs.`,

      `The true strength of the book lies in its ability to convey complex emotional and philosophical concepts in a manner that is both engaging for young readers and thought-provoking for adults. Themes of resilience, the courage to embrace one's authentic self, and the beauty found in diversity are woven seamlessly into Silver Feet's journey. Her "wonder" becomes a metaphor for the unique gifts that often lie hidden within perceived imperfections, encouraging readers to look beyond superficial differences and celebrate the inherent value of every individual.`,

      `Ultimately, "Silver Feet and her Wonder" serves as a heartwarming testament to the power of self-discovery and the importance of an inclusive community. It's a story that will undoubtedly spark meaningful conversations and leave a lasting impression, reminding readers of all ages that our unique qualities are not obstacles, but rather the very essence of our strength and wonder. This captivating tale is a valuable addition to any collection, promising to inspire and uplift.`,
    ],
    customerReviews: [
      {
        id: "review1",
        author: "BookLover123",
        date: "April 15, 2025",
        rating: 5,
        title: "A Charming and Beautiful Story",
        content:
          "I picked this up on a whim, and I'm so glad I did! 'Silver Feet and her Wonder' is such a charming and beautifully written story. It's ostensibly a children's book, but the themes of self-acceptance and finding your unique place in the world resonate deeply, no matter your age. Silver Feet is an endearing protagonist, and her journey is both inspiring and heartwarming. A delightful read that leaves you feeling uplifted.",
      },
      {
        id: "review2",
        author: "ParentOfSeven",
        date: "April 10, 2025",
        rating: 5,
        title: "Sparked Wonderful Conversations",
        content:
          "My daughter and I read 'Silver Feet and her Wonder' together, and it sparked such wonderful conversations! She really connected with Silver Feet's struggle to fit in and then her triumph in embracing what made her special. It's a fantastic way to introduce concepts of diversity, individuality, and resilience in a gentle, age-appropriate manner. The message about being true to yourself is so important, and this book delivers it beautifully. Highly recommend for family reading time!",
      },
      {
        id: "review3",
        author: "YoungReader10",
        date: "April 8, 2025",
        rating: 4,
        title: "Silver Feet is Cool!",
        content:
          "Silver Feet is cool! At first, I felt a bit sad for her because the other birds didn't understand her silver feet. But then she discovered her 'wonder' and it was awesome! It made me think that being different isn't bad, it can actually be your superpower. The story was easy to read and I liked imagining the bird world. I wish there were pictures of her silver feet!",
      },
      {
        id: "review4",
        author: "LibrarianJane",
        date: "April 5, 2025",
        rating: 5,
        title: "A Delightful Addition to Children's Literature",
        content:
          "A truly delightful addition to contemporary children's literature. 'Silver Feet and her Wonder' navigates complex themes of identity and belonging with grace and sensitivity. The narrative voice is engaging, and Silver Feet is a protagonist young readers will undoubtedly root for. It's a story that not only entertains but also empowers, encouraging children to celebrate their uniqueness. This book has the feel of a modern classic and would be a wonderful resource for classroom discussions on empathy and self-esteem.",
      },
      {
        id: "review5",
        author: "ParentOfFive",
        date: "April 2, 2025",
        rating: 4,
        title: "A Sweet Story About Being Special",
        content:
          "We loved the idea of Silver Feet! My little one was fascinated by a bird with different feet. While some of the deeper themes might be for slightly older kids, the core message of being special even if you're different came through. It's a sweet story that champions kindness and seeing the good in what makes us unique. A lovely bedtime read.",
      },
    ],
    relatedBooks: [
      {
        id: "the-garden-whispers",
        title: "The Garden Whispers",
        author: "Nana Ndlovana-Mthimkhulu",
        coverImage: "/images/shield-of-sparrows-cover.webp",
        rating: 4.7,
        reviewCount: 28,
      },
      {
        id: "remarkably-bright-creatures",
        title: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        coverImage: "/images/remarkably-bright-creatures-cover.webp",
        rating: 4.6,
        reviewCount: 35,
      },
      {
        id: "fearless",
        title: "Fearless",
        author: "Lauren Roberts",
        coverImage: "/images/fearless-cover.webp",
        rating: 4.9,
        reviewCount: 41,
      },
      {
        id: "great-big-beautiful-life",
        title: "Great Big Beautiful Life",
        author: "Emily Henry",
        coverImage: "/images/great-big-beautiful-life-cover.webp",
        rating: 4.5,
        reviewCount: 33,
      },
      {
        id: "the-tenant",
        title: "The Tenant",
        author: "Freida McFadden",
        coverImage: "/images/the-tenant-cover.webp",
        rating: 4.8,
        reviewCount: 39,
      },
      {
        id: "james",
        title: "James",
        author: "Percival Everett",
        coverImage: "/images/james-cover.webp",
        rating: 4.7,
        reviewCount: 27,
      },
    ],
    authorMessage: `In "Silver Feet and her Wonder," the author presents a compelling narrative that challenges conventional notions of birth and belonging within the bird family. Through the character of Silver Feet, readers are encouraged to reflect on the power of individuality and the beauty of embracing one's uniqueness in a world that often seeks to homogenize differences. 

By weaving together themes of identity, acceptance, and resilience, the author invites readers to ponder the complexities of self-discovery and the transformative journey towards embracing one's true essence. "Silver Feet and her Wonder" stands as a testament to the beauty of diversity and the strength found in embracing one's authentic self, even in the face of adversity.`,
  }

  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground">
            Home
          </a>{" "}
          &gt;{" "}
          <a href="/books" className="hover:text-foreground">
            Books
          </a>{" "}
          &gt; <span>{book.title}</span>
        </div>

        {/* Book Header */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <BookCover
              src={book.coverImage}
              alt={book.title}
              width={400}
              height={600}
              className="aspect-[2/3] w-full"
            />
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold md:text-4xl">{book.title}</h1>
                <p className="mt-2 text-xl">by {book.author}</p>
                <div className="mt-2">
                  <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                </div>
              </div>

              <div className="prose max-w-none">
                <p>{book.description}</p>
              </div>

              {book.authorMessage && (
                <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-amber-400 shadow-sm">
                  <h3 className="mb-2 text-sm font-semibold text-amber-800">Author's Message</h3>
                  <p className="text-sm italic text-amber-700">{book.authorMessage}</p>
                </div>
              )}

              <div className="bg-gradient-to-r from-amber-50 to-white rounded-lg p-4 shadow-sm">
                <BookFormatSelector formats={book.formats} />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="flex-1 bg-amber-500 hover:bg-amber-600">
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 text-amber-700 border-amber-300 hover:bg-amber-50"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
                <Button size="icon" variant="outline" className="text-amber-700 border-amber-300 hover:bg-amber-50">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>

              <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                <div className="grid gap-2">
                  <div className="grid grid-cols-2">
                    <span className="text-sm font-medium">ISBN:</span>
                    <span className="text-sm">{book.details.isbn}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-sm font-medium">Publisher:</span>
                    <span className="text-sm">{book.details.publisher}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-sm font-medium">Publication Date:</span>
                    <span className="text-sm">{book.details.publicationDate}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-sm font-medium">Pages:</span>
                    <span className="text-sm">{book.details.pages}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-sm font-medium">Language:</span>
                    <span className="text-sm">{book.details.language}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-sm font-medium">Age:</span>
                    <span className="text-sm">{book.details.age}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Book Reviews */}
        <div className="mb-12">
          <BookReviews
            editorialReviews={book.editorialReviews}
            customerReviews={book.customerReviews}
            averageRating={book.rating}
            reviewCount={book.reviewCount}
          />
        </div>

        {/* Related Books */}
        <RelatedBooks title="You May Also Like" books={book.relatedBooks} />
      </div>
    </AppShell>
  )
}
