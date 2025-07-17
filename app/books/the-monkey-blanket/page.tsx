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
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Feet%20and%20Her%20Wonder%20by%20Nana%20Ndlovana-Mthimkhulu.%20Create%20a%20childrens%20book%20cover-4-S6y67Umej9HayzZVSVJfmdxDMOyKLK.png",
    rating: 4.9,
    reviewCount: 45,
    description: `"The Monkey Blanket" is a poignant narrative that weaves together elements of truth and storytelling, drawing readers into a tale passed down through generations. Inspired by a true story that the author's father shared, the narrative unfolds with a blend of authenticity and imaginative embellishment, creating a captivating story that resonates with readers.

Through the lens of this heartfelt tale, readers are transported into a world where reality and fiction intertwine to create a compelling narrative that evokes nostalgia, humor, and emotion.

The story follows Lily, a young girl afraid of a monster she believes lives in her closet. Her mother gives her a special monkey blanket, telling her it's very brave. That night, when Lily hears a noise, the monkeys on the blanket come alive, not to fight, but to investigate and ultimately befriend the shy, misunderstood "monster" in the closet, showing Lily there's nothing to fear.`,
    formats: [
      { id: "hardcover", name: "Hardcover", price: 17.99, originalPrice: 21.99 },
      { id: "paperback", name: "Paperback", price: 11.99 },
      { id: "ebook", name: "eBook", price: 8.99 },
    ],
    details: {
      isbn: "9781234567891",
      publisher: "Sunshine Children's Press",
      publicationDate: "05/10/2025",
      pages: 36,
      language: "English",
      age: "4-8 years",
    },
    editorialReviews: [
      `"The Monkey Blanket" is a masterful blend of family lore and creative storytelling that captures the imagination of young readers while delivering a powerful message about courage and understanding. Ndlovana-Mthimkhulu's narrative voice is both authentic and enchanting, drawing children into a world where blankets can be magical and fears can be overcome through friendship and empathy. The story's pacing is perfect for bedtime reading, with just enough excitement to engage without overstimulating.`,

      `What sets this book apart is its nuanced approach to childhood fears. Rather than simply vanquishing the "monster," the story takes the more thoughtful path of fostering understanding and connection. This subtle lesson in empathy is delivered with such a light touch that young readers absorb it naturally, without feeling preached to. The relationship between Lily and her mother is portrayed with warmth and wisdom, offering a positive model of supportive parenting that readers of all ages will appreciate.`,

      `The illustrations perfectly complement the text, bringing the magical monkey blanket to life with vibrant colors and expressive characters. Each page is a visual treat that children will want to explore again and again, discovering new details with each reading. "The Monkey Blanket" is destined to become a cherished bedtime favorite, one that parents will enjoy reading as much as children enjoy hearing. It's a wonderful addition to any child's library and a testament to the enduring power of family stories.`,
    ],
    customerReviews: [
      {
        id: "review1",
        author: "BookishMom",
        date: "May 15, 2025",
        rating: 5,
        title: "A New Bedtime Favorite!",
        content:
          "My daughter asks for this book every night! The story about the brave monkey blanket has helped her overcome her own bedtime fears. The illustrations are gorgeous and the message about befriending what we fear is so important for kids. Highly recommend!",
      },
      {
        id: "review2",
        author: "KindergartenTeacher",
        date: "May 12, 2025",
        rating: 5,
        title: "Perfect for the Classroom",
        content:
          "I read this to my kindergarten class and it sparked wonderful discussions about fears and bravery. The children were completely engaged with the story and loved the idea of a magical blanket. The illustrations are captivating and the message is perfect for this age group. A must-have for any classroom library!",
      },
      {
        id: "review3",
        author: "DadOfThree",
        date: "May 18, 2025",
        rating: 5,
        title: "Beautifully Written and Illustrated",
        content:
          "This book has become a staple in our bedtime routine. The story is engaging and the message is powerful without being heavy-handed. My kids love pointing out all the details in the illustrations, especially the expressions on the monkeys' faces. The author has a wonderful way of addressing childhood fears in a reassuring way.",
      },
      {
        id: "review4",
        author: "ChildPsychologist",
        date: "May 20, 2025",
        rating: 5,
        title: "Excellent for Addressing Childhood Fears",
        content:
          "As a child psychologist, I often recommend books that help children process their fears. 'The Monkey Blanket' does this beautifully, showing how understanding can replace fear. The story validates children's feelings while offering a positive way to reframe scary situations. I've already recommended it to many families in my practice.",
      },
      {
        id: "review5",
        author: "GrandmaJoy",
        date: "May 16, 2025",
        rating: 4,
        title: "A Delightful Story with a Great Message",
        content:
          "I bought this for my grandchildren and they absolutely love it. The story is charming and the illustrations are beautiful. I appreciate how it teaches children to face their fears in a gentle, non-threatening way. The only reason I'm giving it 4 stars instead of 5 is that I wish it was a bit longer - the kids always want more!",
      },
    ],
    relatedBooks: [
      {
        id: "silver-feet-and-her-wonder",
        title: "Silver Feet and Her Wonder",
        author: "Nana Ndlovana-Mthimkhulu",
        coverImage: "/images/silver-feet-cover.png",
        rating: 4.8,
        reviewCount: 37,
      },
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
    ],
    authorMessage: `In "The Monkey Blanket," I present a true story relayed by my father, infused with a touch of creative license that adds depth and dimension to the narrative. While I did not personally experience the events described in the story, the tale serves as a heartfelt homage to family lore and the storytelling tradition.

By sharing this narrative with readers, I invite them to appreciate the power of storytelling in preserving memories, passing down wisdom, and connecting generations through shared experiences and imaginative retellings.`,
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
