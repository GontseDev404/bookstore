import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AppShell } from "@/components/layout/app-shell"
import { Button } from "@/components/ui/button"
import { BookRating } from "@/components/book/book-rating"
import { CategoryIcon } from "@/components/category-icon"
import { Input } from "@/components/ui/input"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  // Staff Favorites data
const staffFavorites = [
    {
      id: "silver-feet-and-her-wonder",
      title: "Silver Feet and Her Wonder",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/silver-feet-cover.png",
      rating: 4.8,
      reviewCount: 37,
      link: "/books/silver-feet-and-her-wonder",
    },
    {
      id: "the-monkey-blanket",
      title: "The Monkey Blanket",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Feet%20and%20Her%20Wonder%20by%20Nana%20Ndlovana-Mthimkhulu.%20Create%20a%20childrens%20book%20cover-4-S6y67Umej9HayzZVSVJfmdxDMOyKLK.png",
      rating: 4.9,
      reviewCount: 45,
      link: "/books/the-monkey-blanket",
    },
    {
      id: "fearless",
      title: "Fearless",
      author: "Lauren Roberts",
      coverImage: "/images/fearless-cover.webp",
      rating: 4.9,
      reviewCount: 41,
      link: "/books/silver-feet-and-her-wonder",
    },
    {
      id: "great-big-beautiful-life",
      title: "Great Big Beautiful Life",
      author: "Emily Henry",
      coverImage: "/images/great-big-beautiful-life-cover.webp",
      rating: 4.5,
      reviewCount: 33,
      link: "/books/silver-feet-and-her-wonder",
    },
    {
      id: "the-tenant",
      title: "The Tenant",
      author: "Freida McFadden",
      coverImage: "/images/the-tenant-cover.webp",
      rating: 4.8,
      reviewCount: 39,
      link: "/books/silver-feet-and-her-wonder",
    },
    {
      id: "remarkably-bright-creatures",
      title: "Remarkably Bright Creatures",
      author: "Shelby Van Pelt",
      coverImage: "/images/remarkably-bright-creatures-cover.webp",
      rating: 4.6,
      reviewCount: 35,
      link: "/books/silver-feet-and-her-wonder",
    },
  ]

  // Fiction books data
  const fictionBooks = [
    {
      id: "never-flinch",
      title: "Never Flinch",
      author: "Stephen King",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%287%29-OMK3W3CZ6GOb4axULSgC49I7jGZIc5.webp",
      rating: 4.8,
      reviewCount: 42,
    },
    {
      id: "emperor-of-gladness",
      title: "The Emperor of Gladness",
      author: "Ocean Vuong",
      coverImage: "/images/the-emperor-of-gladness-cover.webp",
      rating: 4.9,
      reviewCount: 42,
    },
    {
      id: "run-for-the-hills",
      title: "Run for the Hills",
      author: "Kevin Wilson",
      coverImage: "/images/run-for-the-hills-cover.webp",
      rating: 4.7,
      reviewCount: 36,
    },
    {
      id: "speak-to-me-of-home",
      title: "Speak to Me of Home",
      author: "Jeanine Cummins",
      coverImage: "/images/speak-to-me-of-home-cover.webp",
      rating: 4.6,
      reviewCount: 31,
    },
    {
      id: "sleep",
      title: "Sleep: A Novel",
      author: "Honor Jones",
      coverImage: "/images/sleep-cover.webp",
      rating: 4.4,
      reviewCount: 28,
    },
    {
      id: "marble-hall-murders",
      title: "Marble Hall Murders",
      author: "Anthony Horowitz",
      coverImage: "/images/marble-hall-murders-cover.webp",
      rating: 4.8,
      reviewCount: 39,
    },
  ]

  // Audiobooks data
  const audiobooks = [
    {
      id: "big-dumb-eyes",
      title: "Big Dumb Eyes: Stories from a Comedian",
      author: "Nate Bargatze",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%286%29-RTR1mIiouECBNXhGHvnA1jkty7ROcf.webp",
      rating: 4.5,
      reviewCount: 32,
    },
    {
      id: "class-clown",
      title: "Class Clown: The Memoirs of a Class Clown",
      author: "Dave Barry",
      coverImage: "/images/class-clown-cover.webp",
      rating: 4.7,
      reviewCount: 29,
    },
    {
      id: "champion-mindset",
      title: "Champion Mindset: Coach, Competitor, Change-Maker",
      author: "Patrick Mouratoglou",
      coverImage: "/images/champion-mindset-cover.webp",
      rating: 4.6,
      reviewCount: 27,
    },
    {
      id: "immaculate-conception",
      title: "Immaculate Conception: A Novel",
      author: "Ling Ling Huang",
      coverImage: "/images/immaculate-conception-cover.webp",
      rating: 4.4,
      reviewCount: 24,
    },
    {
      id: "anji-kills-a-king",
      title: "Anji Kills a King",
      author: "Evan Leikam",
      coverImage: "/images/anji-kills-a-king-cover.webp",
      rating: 4.5,
      reviewCount: 31,
    },
    {
      id: "the-devils",
      title: "The Devils",
      author: "Joe Abercrombie",
      coverImage: "/images/the-devils-cover.webp",
      rating: 4.9,
      reviewCount: 45,
    },
  ]

  // Nonfiction books data
  const nonfictionBooks = [
    {
      id: "mark-twain",
      title: "Mark Twain",
      author: "Ron Chernow",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf-a3haZVeLimh5IK4bFTYDreelLs2Icl.webp",
      rating: 4.8,
      reviewCount: 37,
    },
    {
      id: "illustrated-meditations",
      title: "The Illustrated Meditations",
      author: "Marcus Aurelius",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%281%29-QYaXRIYANhDSHpTxwuTMDYkHPTve4g.webp",
      rating: 4.6,
      reviewCount: 29,
    },
    {
      id: "third-reich-of-dreams",
      title: "The Third Reich of Dreams",
      author: "Charlotte Beradt",
      coverImage: "/images/third-reich-of-dreams-cover.webp",
      rating: 4.5,
      reviewCount: 23,
    },
    {
      id: "we-can-do-hard-things",
      title: "We Can Do Hard Things",
      author: "Glennon Doyle",
      coverImage: "/images/we-can-do-hard-things-cover.webp",
      rating: 4.7,
      reviewCount: 2341,
    },
    {
      id: "shield-of-sparrows",
      title: "Shield of Sparrows",
      author: "Sarah Crossan",
      coverImage: "/images/shield-of-sparrows-cover.webp",
      rating: 4.4,
      reviewCount: 18,
    },
    {
      id: "all-fours",
      title: "All Fours",
      author: "Miranda July",
      coverImage: "/images/all-fours-cover.webp",
      rating: 4.6,
      reviewCount: 25,
    },
  ]

  // Nature books data
  const natureBooks = [
    {
      id: "native-nations",
      title: "Native Nations",
      author: "Kathleen DuVal",
      coverImage: "/images/native-nations-cover.webp",
      rating: 4.5,
      reviewCount: 445,
    },
    {
      id: "the-emperor-of-gladness",
      title: "The Emperor of Gladness",
      author: "Robert McGill",
      coverImage: "/images/the-emperor-of-gladness-cover.webp",
      rating: 4.4,
      reviewCount: 678,
    },
    {
      id: "the-tenant",
      title: "The Tenant",
      author: "Katy Loutzenhiser",
      coverImage: "/images/the-tenant-cover.webp",
      rating: 4.3,
      reviewCount: 523,
    },
    {
      id: "the-monkey-blanket",
      title: "The Monkey Blanket",
      author: "Sarah Crossan",
      coverImage: "/images/the-monkey-blanket-cover.png",
      rating: 4.6,
      reviewCount: 789,
    },
    {
      id: "we-can-do-hard-things",
      title: "We Can Do Hard Things",
      author: "Glennon Doyle",
      coverImage: "/images/we-can-do-hard-things-cover.webp",
      rating: 4.7,
      reviewCount: 2341,
    },
    {
      id: "remarkably-bright-creatures",
      title: "Remarkably Bright Creatures",
      author: "Shelby Van Pelt",
      coverImage: "/images/remarkably-bright-creatures-cover.webp",
      rating: 4.6,
      reviewCount: 892,
    },
  ]

  // Coming soon books data
  const comingSoonBooks = [
    {
      id: "the-garden-whispers",
      title: "The Garden Whispers",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/shield-of-sparrows-cover.webp",
      rating: 0,
      reviewCount: 0,
    },
    {
      id: "the-river-sings",
      title: "The River Sings",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/all-fours-cover.webp",
      rating: 0,
      reviewCount: 0,
    },
    {
      id: "the-mountain-calls",
      title: "The Mountain Calls",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/we-can-do-hard-things-cover.webp",
      rating: 0,
      reviewCount: 0,
    },
  ]

  // Book club books data
  const bookClubBooks = [
    {
      id: "the-garden-whispers",
      title: "The Garden Whispers",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/shield-of-sparrows-cover.webp",
      rating: 4.7,
      reviewCount: 28,
    },
    {
      id: "the-river-sings",
      title: "The River Sings",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/all-fours-cover.webp",
      rating: 4.6,
      reviewCount: 31,
    },
    {
      id: "the-mountain-calls",
      title: "The Mountain Calls",
      author: "Nana Ndlovana-Mthimkhulu",
      coverImage: "/images/we-can-do-hard-things-cover.webp",
      rating: 4.8,
      reviewCount: 42,
    },
  ]

  // Categories data
  const categories = [
    { name: "Fiction", icon: "book", count: 1250 },
    { name: "Non-Fiction", icon: "graduation-cap", count: 890 },
    { name: "Children's", icon: "baby", count: 450 },
    { name: "Audiobooks", icon: "headphones", count: 320 },
    { name: "Science Fiction", icon: "rocket", count: 280 },
    { name: "Mystery", icon: "search", count: 340 },
  ]

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Next
              <span className="block text-primary-foreground/90">Great Read</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Explore thousands of books across all genres. From bestsellers to hidden gems, 
              find your perfect story at BookHaven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Search by title, author, or ISBN..."
                className="flex-1 text-foreground placeholder:text-muted-foreground"
              />
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Search Books
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Favorites Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Staff Favorites</h2>
            <p className="text-muted-foreground">Curated picks from our bookworms</p>
          </div>
          <Link href="/bestsellers" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {staffFavorites.map((book) => (
            <Link key={book.id} href={book.link} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="line-clamp-1 font-medium group-hover:text-primary">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <BookRating rating={book.rating} reviewCount={book.reviewCount} size="sm" />
            </Link>
          ))}
        </div>
      </section>

      {/* Fiction Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Fiction</h2>
            <p className="text-muted-foreground">Stories that transport you to new worlds</p>
          </div>
          <Link href="/fiction" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {fictionBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="line-clamp-1 font-medium group-hover:text-primary">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <BookRating rating={book.rating} reviewCount={book.reviewCount} size="sm" />
            </Link>
          ))}
        </div>
      </section>

      {/* Audiobooks Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Audiobooks</h2>
            <p className="text-muted-foreground">Listen to your favorite stories</p>
          </div>
          <Link href="/audiobooks" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {audiobooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="line-clamp-1 font-medium group-hover:text-primary">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <BookRating rating={book.rating} reviewCount={book.reviewCount} size="sm" />
            </Link>
          ))}
        </div>
      </section>

      {/* Nonfiction Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Nonfiction</h2>
            <p className="text-muted-foreground">Expand your knowledge and understanding</p>
          </div>
          <Link href="/nonfiction" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {nonfictionBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="line-clamp-1 font-medium group-hover:text-primary">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <BookRating rating={book.rating} reviewCount={book.reviewCount} size="sm" />
            </Link>
          ))}
        </div>
      </section>

      {/* Nature Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Nature & Environment</h2>
            <p className="text-muted-foreground">Connect with the natural world</p>
          </div>
          <Link href="/nature" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {natureBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="line-clamp-1 font-medium group-hover:text-primary">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <BookRating rating={book.rating} reviewCount={book.reviewCount} size="sm" />
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`} className="group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <CategoryIcon name={category.icon} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mt-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} books</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Staff Picks Section */}
      <section className="container mx-auto px-4 py-8 bg-muted rounded-lg my-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Staff Picks</h2>
            <p className="text-muted-foreground">Recommended by our bookworms</p>
          </div>
          <Link href="/staff-picks" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {staffFavorites.slice(0, 6).map((book) => (
            <Link key={book.id} href={book.link} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="line-clamp-1 font-medium group-hover:text-primary">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <BookRating rating={book.rating} reviewCount={book.reviewCount} size="sm" />
              <p className="text-xs font-semibold text-primary">Picked by {book.author}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-muted-foreground">Pre-order these upcoming releases</p>
          </div>
          <Link href="/coming-soon" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {comingSoonBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="bg-primary py-1 px-2 text-center text-xs font-medium text-primary-foreground absolute top-2 left-2">
                  Pre-order
                </div>
              </div>
              <h3 className="line-clamp-1 font-medium group-hover:text-primary">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <Button 
                variant="outline" 
                size="sm"
                className="mt-2 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Pre-order now
              </Button>
            </Link>
          ))}
        </div>
      </section>

      {/* Book Club Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Book Club Picks</h2>
            <p className="text-muted-foreground">Perfect for your next discussion</p>
          </div>
          <Link href="/book-club" className="text-sm font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {bookClubBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="line-clamp-1 font-medium group-hover:text-primary">{book.title}</h3>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <BookRating rating={book.rating} reviewCount={book.reviewCount} size="sm" />
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Reading?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of readers who discover their next favorite book at BookHaven. 
          Start exploring our collection today.
        </p>
        <Button className="mt-4 bg-primary hover:bg-primary/90">Learn More</Button>
      </section>
    </AppShell>
  )
}
