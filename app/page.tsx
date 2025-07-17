import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AppShell } from "@/components/layout/app-shell"
import { Button } from "@/components/ui/button"
import { BookRating } from "@/components/book/book-rating"
import { CategoryIcon } from "@/components/category-icon"
import { Input } from "@/components/ui/input"

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
      rating: 4.7,
      reviewCount: 33,
    },
    {
      id: "light-eaters",
      title: "The Light Eaters",
      author: "Zoë Schlanger",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%282%29-v051b9Zgu5IcXd5HFkoW3qb8XfjGQx.webp",
      rating: 4.5,
      reviewCount: 28,
    },
    {
      id: "little-history-world",
      title: "A Little History of the World",
      author: "E.H. Gombrich",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%285%29-8LCDNlcynYsrILU0qk76tsvpFQc1FG.webp",
      rating: 4.8,
      reviewCount: 36,
    },
    {
      id: "raw-dog",
      title: "Raw Dog: The Naked Truth About Hot Dogs",
      author: "Jamie Loftus",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%283%29-HYAKRZXyJYP2qTY3KbaXS8YEpM8Jjt.webp",
      rating: 4.3,
      reviewCount: 31,
    },
  ]

  // Nature books data
  const natureBooks = [
    {
      id: "is-a-river-alive",
      title: "Is A River Alive?",
      author: "Robert Macfarlane",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%288%29-sOi7nTG3VYfHXJVil0Xtsy9T1nDXmt.webp",
      rating: 4.7,
      reviewCount: 34,
    },
    {
      id: "left-for-dead",
      title: "Left for Dead",
      author: "Eric Jay Dolin",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lf%20%284%29-RpY7nu3VAiaplXhjpN0A8LtwbazMMf.webp",
      rating: 4.6,
      reviewCount: 29,
    },
    {
      id: "james",
      title: "James",
      author: "Percival Everett",
      coverImage: "/images/james-cover.webp",
      rating: 4.9,
      reviewCount: 42,
    },
    {
      id: "native-nations",
      title: "Native Nations",
      author: "Kathleen DuVal",
      coverImage: "/images/native-nations-cover.webp",
      rating: 4.8,
      reviewCount: 36,
    },
    {
      id: "shield-of-sparrows",
      title: "Shield of Sparrows",
      author: "Devney Perry",
      coverImage: "/images/shield-of-sparrows-cover.webp",
      rating: 4.7,
      reviewCount: 28,
    },
    {
      id: "original-sin",
      title: "Original Sin",
      author: "Jake Tapper and Alex Thompson",
      coverImage: "/images/silver-feet-cover.png",
      rating: 4.5,
      reviewCount: 31,
    },
  ]

  // Categories
  const categories = [
    { id: "mystery", name: "Mystery & Thriller", icon: "magnifying-glass" },
    { id: "scifi", name: "Sci-Fi & Fantasy", icon: "rocket" },
    { id: "romance", name: "Romance", icon: "heart" },
    { id: "historical", name: "Historical Fiction", icon: "scroll" },
    { id: "history", name: "History", icon: "landmark" },
    { id: "biography", name: "Biography & Memoir", icon: "user" },
    { id: "cookbooks", name: "Cookbooks", icon: "utensils" },
    { id: "teens", name: "Teens & YA", icon: "sparkles" },
    { id: "kids", name: "Kids", icon: "teddy-bear" },
  ]

  // Add these new data arrays after the existing data arrays (after the categories array)

  // Staff Picks data
  const staffPicks = [
    {
      id: "all-fours",
      title: "All Fours",
      author: "Miranda July",
      coverImage: "/images/all-fours-cover.webp",
      rating: 4.7,
      reviewCount: 32,
      staffName: "Emma",
      staffComment: "A brilliant, bizarre, and deeply moving novel that will stay with you.",
    },
    {
      id: "murderbot-diaries",
      title: "The Murderbot Diaries",
      author: "Martha Wells",
      coverImage: "/images/murderbot-diaries-cover.webp",
      rating: 4.9,
      reviewCount: 48,
      staffName: "Alex",
      staffComment: "The most relatable AI protagonist you'll ever meet. Funny and thought-provoking.",
    },
    {
      id: "we-can-do-hard-things",
      title: "We Can Do Hard Things",
      author: "Glennon Doyle",
      coverImage: "/images/we-can-do-hard-things-cover.webp",
      rating: 4.6,
      reviewCount: 29,
      staffName: "Sarah",
      staffComment: "Life-changing wisdom that feels like talking with your wisest friend.",
    },
    {
      id: "big-dumb-eyes",
      title: "Big Dumb Eyes",
      author: "Nate Bargatze",
      coverImage: "/images/big-dumb-eyes-cover.webp",
      rating: 4.5,
      reviewCount: 32,
      staffName: "Michael",
      staffComment: "Laugh-out-loud funny from start to finish. Bargatze's best work yet.",
    },
  ]

  // Coming Soon data
  const comingSoon = [
    {
      id: "the-last-devil-to-die",
      title: "The Last Devil to Die",
      author: "Richard Osman",
      coverImage: "/images/third-reich-of-dreams-cover.webp",
      releaseDate: "June 15, 2025",
    },
    {
      id: "the-secret-garden",
      title: "The Secret Garden: Illustrated Edition",
      author: "Frances Hodgson Burnett",
      coverImage: "/images/all-fours-cover.webp",
      releaseDate: "June 22, 2025",
    },
    {
      id: "the-midnight-library-sequel",
      title: "Beyond the Midnight Library",
      author: "Matt Haig",
      coverImage: "/images/marble-hall-murders-cover.webp",
      releaseDate: "July 1, 2025",
    },
    {
      id: "the-silent-patient-returns",
      title: "The Silent Patient Returns",
      author: "Alex Michaelides",
      coverImage: "/images/illustrated-meditations-cover.webp",
      releaseDate: "July 8, 2025",
    },
  ]

  // Book Club Picks data
  const bookClubPicks = [
    {
      id: "remarkably-bright-creatures",
      title: "Remarkably Bright Creatures",
      author: "Shelby Van Pelt",
      coverImage: "/images/remarkably-bright-creatures-cover.webp",
      rating: 4.6,
      reviewCount: 35,
      discussion: "June 2025",
    },
    {
      id: "the-tenant",
      title: "The Tenant",
      author: "Freida McFadden",
      coverImage: "/images/the-tenant-cover.webp",
      rating: 4.8,
      reviewCount: 39,
      discussion: "July 2025",
    },
    {
      id: "james",
      title: "James",
      author: "Percival Everett",
      coverImage: "/images/james-cover.webp",
      rating: 4.7,
      reviewCount: 27,
      discussion: "August 2025",
    },
    {
      id: "fearless",
      title: "Fearless",
      author: "Lauren Roberts",
      coverImage: "/images/fearless-cover.webp",
      rating: 4.9,
      reviewCount: 41,
      discussion: "September 2025",
    },
  ]

  return (
    <AppShell>
      {/* Announcement Bar */}
      <div className="bg-slate-700 py-3 text-center text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <button className="text-white">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <p className="text-sm font-medium">PICK UP IN STORE: READY IN TWO HOURS</p>
          <button className="text-white">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Banner - Mark Twain */}
        <section className="relative">
          <div className="relative w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32256_SkinnyHero_MarkTwain_05_13_25.jpg-ieGy9Wrk3iHupSOYgAaVRF0HwO4j9R.jpeg"
              alt="Mark Twain by Ron Chernow"
              width={1200}
              height={300}
              className="w-full"
              priority
            />
          </div>
        </section>

        {/* Staff Favorites Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Staff Favorites</h2>
            <Link href="/bestsellers" className="text-sm font-medium text-amber-700 hover:underline">
              See All
            </Link>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {staffFavorites.map((book) => (
                <Link key={book.id} href={book.link} className="group">
                  <div className="overflow-hidden rounded-md border bg-muted">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="h-auto w-full object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="line-clamp-1 font-medium group-hover:text-amber-700">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Best Fiction Books Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold italic">Our Best Fiction Books</h2>
            <Link href="/fiction" className="text-sm font-medium text-amber-700 hover:underline">
              See All
            </Link>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {fictionBooks.map((book) => (
                <Link key={book.id} href="/books/silver-feet-and-her-wonder" className="group">
                  <div className="overflow-hidden rounded-md border bg-muted">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="h-auto w-full object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="line-clamp-1 font-medium group-hover:text-amber-700">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Best Audiobooks Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold italic">Our Best Audiobooks</h2>
            <Link href="/audiobooks" className="text-sm font-medium text-amber-700 hover:underline">
              See All
            </Link>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {audiobooks.map((book) => (
                <Link key={book.id} href="/books/silver-feet-and-her-wonder" className="group">
                  <div className="overflow-hidden rounded-md border bg-muted">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="h-auto w-full object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="line-clamp-1 font-medium group-hover:text-amber-700">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="container mx-auto mb-8 px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-16%20at%2014.58.53.png-Ynagw37YjBNRjuK8TXEoQhUpM4rqwD.jpeg"
                alt="Promotional Banners"
                width={1200}
                height={300}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Our Best Nonfiction Books Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold italic">Our Best Nonfiction Books</h2>
            <Link href="/nonfiction" className="text-sm font-medium text-amber-700 hover:underline">
              See All
            </Link>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {nonfictionBooks.map((book) => (
                <Link key={book.id} href="/books/silver-feet-and-her-wonder" className="group">
                  <div className="overflow-hidden rounded-md border bg-muted">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="h-auto w-full object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="line-clamp-1 font-medium group-hover:text-amber-700">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Nature & Adventure Books Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold italic">Nature & Adventure Books</h2>
            <Link href="/nature" className="text-sm font-medium text-amber-700 hover:underline">
              See All
            </Link>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {natureBooks.map((book) => (
                <Link key={book.id} href="/books/silver-feet-and-her-wonder" className="group">
                  <div className="overflow-hidden rounded-md border bg-muted">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="h-auto w-full object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="line-clamp-1 font-medium group-hover:text-amber-700">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white shadow-md">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-9">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
                  <CategoryIcon name={category.icon} className="h-8 w-8 text-amber-700" />
                </div>
                <span className="text-xs font-medium sm:text-sm">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Staff Picks Section */}
        <section className="container mx-auto px-4 py-8 bg-amber-50 rounded-lg my-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-amber-800">Staff Picks</h2>
              <p className="text-sm text-amber-700">Recommended by our bookworms</p>
            </div>
            <Link href="/staff-picks" className="text-sm font-medium text-amber-700 hover:underline">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {staffPicks.map((book) => (
              <div key={book.id} className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex gap-4">
                  <div className="w-1/3">
                    <div className="overflow-hidden rounded-md border bg-muted">
                      <Image
                        src={book.coverImage || "/placeholder.svg"}
                        alt={book.title}
                        width={120}
                        height={180}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 space-y-2">
                    <h3 className="font-medium">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                    <div className="mt-2">
                      <p className="text-xs font-semibold text-amber-700">Picked by {book.staffName}</p>
                      <p className="text-xs italic">{book.staffComment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold italic">Coming Soon</h2>
              <p className="text-sm text-muted-foreground">Pre-order now</p>
            </div>
            <Link href="/coming-soon" className="text-sm font-medium text-amber-700 hover:underline">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {comingSoon.map((book) => (
              <div key={book.id} className="group space-y-2">
                <div className="overflow-hidden rounded-md border bg-muted">
                  <Image
                    src={book.coverImage || "/placeholder.svg"}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="h-auto w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="bg-amber-500 py-1 px-2 text-center text-xs font-medium text-white">
                    Coming {book.releaseDate}
                  </div>
                </div>
                <div>
                  <h3 className="line-clamp-1 font-medium group-hover:text-amber-700">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">by {book.author}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 w-full border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    Pre-order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Book Club Picks Section */}
        <section className="container mx-auto px-4 py-8 bg-gradient-to-r from-slate-100 to-white rounded-lg my-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">BookHaven Club Picks</h2>
              <p className="text-sm text-slate-600">Join our monthly book discussions</p>
            </div>
            <Link href="/book-club" className="text-sm font-medium text-amber-700 hover:underline">
              Join Book Club
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bookClubPicks.map((book) => (
              <div key={book.id} className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="mb-3 flex justify-center">
                  <div className="overflow-hidden rounded-md border bg-muted w-2/3">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      width={150}
                      height={225}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-medium">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">by {book.author}</p>
                  <div className="mt-2 flex justify-center">
                    <BookRating rating={book.rating} reviewCount={book.reviewCount} />
                  </div>
                  <div className="mt-3 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-medium">
                    Discussion: {book.discussion}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-slate-800 p-6 text-center text-white">
            <h3 className="text-xl font-bold">Join Our Book Club</h3>
            <p className="mt-2 text-slate-300">
              Meet fellow readers, enjoy exclusive discounts, and participate in author Q&As
            </p>
            <Button className="mt-4 bg-amber-500 hover:bg-amber-600">Learn More</Button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-4 py-12 my-8">
          <div className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-white">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">Stay Updated</h2>
                <p className="mt-2">
                  Subscribe to our newsletter for exclusive offers, author interviews, and new release notifications.
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white text-black placeholder:text-gray-500"
                  />
                  <Button className="bg-slate-800 hover:bg-slate-900">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  )
}
