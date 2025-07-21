import { BookPageClient } from "./book-page-client"
import { useState, useEffect } from 'react';

// Book data lookup
const booksData = {
  "silver-feet-and-her-wonder": {
    id: "silver-feet-and-her-wonder",
    title: "Silver Feet and Her Wonder",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/silver-feet-cover.png",
    rating: 4.8,
    reviewCount: 37,
    price: 24.99,
    originalPrice: 29.99,
    description: "A captivating story of wonder and discovery that will enchant readers of all ages.",
    authorMessage: "This book was inspired by the magical moments of childhood and the power of imagination.",
    formats: ["Hardcover", "Paperback", "E-book"],
    details: {
      publisher: "BookHaven Publishing",
      publicationDate: "2024",
      pages: 256,
      language: "English"
    },
    customerReviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        title: "Magical and Heartwarming",
        content: "This book transported me back to my childhood. Beautiful storytelling!",
        date: "2024-01-15"
      }
    ],
    editorialReviews: [
      {
        author: "BookHaven Editorial",
        content: "A delightful tale that captures the essence of childhood wonder and discovery."
      }
    ],
    relatedBooks: [
      {
        id: "the-monkey-blanket",
        title: "The Monkey Blanket",
        author: "Nana Ndlovana-Mthimkhulu",
        coverImage: "/images/the-monkey-blanket-cover.png",
        rating: 4.9,
        reviewCount: 45
      }
    ]
  },
  "the-monkey-blanket": {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/the-monkey-blanket-cover.png",
    rating: 4.9,
    reviewCount: 45,
    price: 19.99,
    originalPrice: 24.99,
    description: "A touching story about family, love, and the power of imagination.",
    authorMessage: "This story celebrates the bonds of family and the comfort of familiar objects.",
    formats: ["Hardcover", "Paperback", "E-book"],
    details: {
      publisher: "BookHaven Publishing",
      publicationDate: "2024",
      pages: 224,
      language: "English"
    },
    customerReviews: [
      {
        id: 1,
        author: "Michael R.",
        rating: 5,
        title: "Beautiful Family Story",
        content: "A heartwarming tale that resonates with readers of all ages.",
        date: "2024-01-20"
      }
    ],
    editorialReviews: [
      {
        author: "BookHaven Editorial",
        content: "A beautifully crafted story that explores themes of family and belonging."
      }
    ],
    relatedBooks: [
      {
        id: "silver-feet-and-her-wonder",
        title: "Silver Feet and Her Wonder",
        author: "Nana Ndlovana-Mthimkhulu",
        coverImage: "/images/silver-feet-cover.png",
        rating: 4.8,
        reviewCount: 37
      }
    ]
  },
  "fearless": {
    id: "fearless",
    title: "Fearless",
    author: "Lauren Roberts",
    coverImage: "/images/fearless-cover.webp",
    rating: 4.9,
    reviewCount: 41,
    price: 22.99,
    originalPrice: 27.99,
    description: "A gripping tale of courage and resilience in the face of adversity.",
    authorMessage: "This story explores what it means to be truly fearless in a world full of challenges.",
    formats: ["Hardcover", "Paperback", "E-book", "Audiobook"],
    details: {
      publisher: "BookHaven Publishing",
      publicationDate: "2024",
      pages: 320,
      language: "English"
    },
    customerReviews: [
      {
        id: 1,
        author: "Emma L.",
        rating: 5,
        title: "Inspiring and Powerful",
        content: "This book changed my perspective on courage and strength.",
        date: "2024-01-25"
      }
    ],
    editorialReviews: [
      {
        author: "BookHaven Editorial",
        content: "A powerful narrative that explores themes of courage, resilience, and personal growth."
      }
    ],
    relatedBooks: [
      {
        id: "the-tenant",
        title: "The Tenant",
        author: "Freida McFadden",
        coverImage: "/images/the-tenant-cover.webp",
        rating: 4.8,
        reviewCount: 39
      }
    ]
  },
  "the-tenant": {
    id: "the-tenant",
    title: "The Tenant",
    author: "Freida McFadden",
    coverImage: "/images/the-tenant-cover.webp",
    rating: 4.8,
    reviewCount: 39,
    price: 21.99,
    originalPrice: 26.99,
    description: "A psychological thriller that will keep you guessing until the very end.",
    authorMessage: "This thriller explores the dark corners of human psychology and the secrets we keep.",
    formats: ["Hardcover", "Paperback", "E-book", "Audiobook"],
    details: {
      publisher: "BookHaven Publishing",
      publicationDate: "2024",
      pages: 384,
      language: "English"
    },
    customerReviews: [
      {
        id: 1,
        author: "David K.",
        rating: 5,
        title: "Edge of Your Seat Thriller",
        content: "Couldn't put it down! The twists and turns kept me guessing until the end.",
        date: "2024-01-30"
      }
    ],
    editorialReviews: [
      {
        author: "BookHaven Editorial",
        content: "A masterfully crafted psychological thriller that delivers on every level."
      }
    ],
    relatedBooks: [
      {
        id: "fearless",
        title: "Fearless",
        author: "Lauren Roberts",
        coverImage: "/images/fearless-cover.webp",
        rating: 4.9,
        reviewCount: 41
      }
    ]
  },
  "mark-twain": {
    id: "mark-twain",
    title: "MARK TWAIN",
    author: "Ron Chernow",
    coverImage: "/images/mark-twain-cover.webp",
    rating: 4.8,
    reviewCount: 1247,
    price: 29.99,
    originalPrice: 34.99,
    description: "Dive deep into the life of one of America's literary geniuses through the eyes of a master biographer.",
    authorMessage: "This biography reveals the complex man behind the beloved author and humorist.",
    formats: ["Hardcover", "Paperback", "E-book", "Audiobook"],
    details: {
      publisher: "BookHaven Publishing",
      publicationDate: "2024",
      pages: 512,
      language: "English"
    },
    customerReviews: [
      {
        id: 1,
        author: "John D.",
        rating: 5,
        title: "Comprehensive and Engaging",
        content: "A masterful biography that brings Mark Twain to life in all his complexity.",
        date: "2024-01-10"
      }
    ],
    editorialReviews: [
      {
        author: "BookHaven Editorial",
        content: "A definitive biography that captures the essence of America's greatest humorist."
      }
    ],
    relatedBooks: [
      {
        id: "fearless",
        title: "Fearless",
        author: "Lauren Roberts",
        coverImage: "/images/fearless-cover.webp",
        rating: 4.9,
        reviewCount: 41
      }
    ]
  }
}

export default function BookPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  const { id } = params
  const book = booksData[id as keyof typeof booksData]
  
  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="text-muted-foreground">The book you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <BookPageClient book={book} loading={loading} />
  )
}
