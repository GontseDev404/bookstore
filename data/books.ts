// Book data types (excluding reviews)
export interface BookFormat {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
}

export interface BookDetails {
  isbn: string;
  publisher: string;
  publicationDate: string;
  pages: number;
  language: string;
  age: string;
}

export interface RelatedBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  price?: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  description: string;
  formats: BookFormat[];
  details: BookDetails;
  editorialReviews: string[];
  relatedBooks: RelatedBook[];
  authorMessage?: string;
}

// Book database (excluding customerReviews)
const books: Record<string, Book> = {
  "silver-feet-and-her-wonder": {
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
    relatedBooks: [
      {
        id: "the-garden-whispers",
        title: "The Garden Whispers",
        author: "Nana Ndlovana-Mthimkhulu",
        coverImage: "/images/shield-of-sparrows-cover.webp",
        rating: 4.7,
        reviewCount: 28,
        price: 14.99,
      },
      {
        id: "remarkably-bright-creatures",
        title: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        coverImage: "/images/remarkably-bright-creatures-cover.webp",
        rating: 4.6,
        reviewCount: 35,
        price: 11.99,
      },
      {
        id: "fearless",
        title: "Fearless",
        author: "Lauren Roberts",
        coverImage: "/images/fearless-cover.webp",
        rating: 4.9,
        reviewCount: 41,
        price: 12.99,
      },
      {
        id: "great-big-beautiful-life",
        title: "Great Big Beautiful Life",
        author: "Emily Henry",
        coverImage: "/images/great-big-beautiful-life-cover.webp",
        rating: 4.5,
        reviewCount: 33,
        price: 10.99,
      },
      {
        id: "the-tenant",
        title: "The Tenant",
        author: "Freida McFadden",
        coverImage: "/images/the-tenant-cover.webp",
        rating: 4.8,
        reviewCount: 39,
        price: 13.99,
      },
      {
        id: "james",
        title: "James",
        author: "Percival Everett",
        coverImage: "/images/james-cover.webp",
        rating: 4.7,
        reviewCount: 27,
        price: 11.99,
      },
    ],
    authorMessage: `In "Silver Feet and her Wonder," the author presents a compelling narrative that challenges conventional notions of birth and belonging within the bird family. Through the character of Silver Feet, readers are encouraged to reflect on the power of individuality and the beauty of embracing one's uniqueness in a world that often seeks to homogenize differences. \n\nBy weaving together themes of identity, acceptance, and resilience, the author invites readers to ponder the complexities of self-discovery and the transformative journey towards embracing one's true essence. "Silver Feet and her Wonder" stands as a testament to the beauty of diversity and the strength found in embracing one's authentic self, even in the face of adversity.`,
  },
  "the-monkey-blanket": {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/the-monkey-blanket-cover.png",
    rating: 4.9,
    reviewCount: 45,
    description: "A touching story about family, love, and the power of imagination.",
    formats: [
      { id: "hardcover", name: "Hardcover", price: 19.99, originalPrice: 24.99 },
      { id: "ebook", name: "eBook", price: 9.99 }
    ],
    details: {
      isbn: "9781234567891",
      publisher: "Sunshine Children's Press",
      publicationDate: "04/10/2025",
      pages: 40,
      language: "English",
      age: "4-8 years"
    },
    editorialReviews: [
      "A heartwarming tale that resonates with readers of all ages."
    ],
    relatedBooks: [
      { id: "silver-feet-and-her-wonder", title: "Silver Feet and Her Wonder", author: "Nana Ndlovana-Mthimkhulu", coverImage: "/images/silver-feet-cover.png", rating: 4.8, reviewCount: 37, price: 24.99 }
    ],
    authorMessage: "This story celebrates the bonds of family and the comfort of familiar objects."
  },
  "fearless": {
    id: "fearless",
    title: "Fearless",
    author: "Lauren Roberts",
    coverImage: "/images/fearless-cover.webp",
    rating: 4.9,
    reviewCount: 41,
    description: "A gripping tale of courage and resilience in the face of adversity.",
    formats: [
      { id: "hardcover", name: "Hardcover", price: 22.99, originalPrice: 27.99 },
      { id: "ebook", name: "eBook", price: 12.99 }
    ],
    details: {
      isbn: "9781234567892",
      publisher: "BookHaven Publishing",
      publicationDate: "2024",
      pages: 320,
      language: "English",
      age: "Teen & Young Adult"
    },
    editorialReviews: [
      "A powerful narrative that explores themes of courage, resilience, and personal growth."
    ],
    relatedBooks: [
      { id: "the-tenant", title: "The Tenant", author: "Freida McFadden", coverImage: "/images/the-tenant-cover.webp", rating: 4.8, reviewCount: 39, price: 21.99 }
    ],
    authorMessage: "This story explores what it means to be truly fearless in a world full of challenges."
  },
  "great-big-beautiful-life": {
    id: "great-big-beautiful-life",
    title: "Great Big Beautiful Life",
    author: "Emily Henry",
    coverImage: "/images/great-big-beautiful-life-cover.webp",
    rating: 4.5,
    reviewCount: 33,
    description: "A celebration of life’s wonders and the beauty of everyday moments.",
    formats: [
      { id: "hardcover", name: "Hardcover", price: 18.99, originalPrice: 23.99 },
      { id: "ebook", name: "eBook", price: 10.99 }
    ],
    details: {
      isbn: "9781234567893",
      publisher: "BookHaven Publishing",
      publicationDate: "2023",
      pages: 280,
      language: "English",
      age: "Adult"
    },
    editorialReviews: [
      "A moving and uplifting story that reminds us to cherish every moment."
    ],
    relatedBooks: [
      { id: "fearless", title: "Fearless", author: "Lauren Roberts", coverImage: "/images/fearless-cover.webp", rating: 4.9, reviewCount: 41, price: 22.99 }
    ],
    authorMessage: "A story about finding beauty in the ordinary."
  },
  "the-tenant": {
    id: "the-tenant",
    title: "The Tenant",
    author: "Freida McFadden",
    coverImage: "/images/the-tenant-cover.webp",
    rating: 4.8,
    reviewCount: 39,
    description: "A psychological thriller that will keep you guessing until the very end.",
    formats: [
      { id: "hardcover", name: "Hardcover", price: 21.99, originalPrice: 26.99 },
      { id: "ebook", name: "eBook", price: 13.99 }
    ],
    details: {
      isbn: "9781234567894",
      publisher: "BookHaven Publishing",
      publicationDate: "2022",
      pages: 350,
      language: "English",
      age: "Adult"
    },
    editorialReviews: [
      "A masterfully crafted psychological thriller that delivers on every level."
    ],
    relatedBooks: [
      { id: "fearless", title: "Fearless", author: "Lauren Roberts", coverImage: "/images/fearless-cover.webp", rating: 4.9, reviewCount: 41, price: 22.99 }
    ],
    authorMessage: "This thriller explores the dark corners of human psychology and the secrets we keep."
  },
  "remarkably-bright-creatures": {
    id: "remarkably-bright-creatures",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    coverImage: "/images/remarkably-bright-creatures-cover.webp",
    rating: 4.6,
    reviewCount: 35,
    description: "A heartwarming and quirky story about unexpected friendships.",
    formats: [
      { id: "hardcover", name: "Hardcover", price: 20.99, originalPrice: 25.99 },
      { id: "ebook", name: "eBook", price: 11.99 }
    ],
    details: {
      isbn: "9781234567895",
      publisher: "BookHaven Publishing",
      publicationDate: "2023",
      pages: 320,
      language: "English",
      age: "Adult"
    },
    editorialReviews: [
      "A delightfully original story with unforgettable characters."
    ],
    relatedBooks: [
      { id: "the-monkey-blanket", title: "The Monkey Blanket", author: "Nana Ndlovana-Mthimkhulu", coverImage: "/images/the-monkey-blanket-cover.png", rating: 4.9, reviewCount: 45, price: 19.99 }
    ],
    authorMessage: "A novel about the power of connection and kindness."
  },
  "james": {
    id: "james",
    title: "James",
    author: "Percival Everett",
    coverImage: "/images/james-cover.webp",
    rating: 4.7,
    reviewCount: 27,
    description: "A gripping psychological thriller that explores the dark side of human nature.",
    formats: [
      { id: "hardcover", name: "Hardcover", price: 15.99, originalPrice: 19.99 },
      { id: "ebook", name: "eBook", price: 11.99 }
    ],
    details: {
      isbn: "9781234567896",
      publisher: "BookHaven Publishing",
      publicationDate: "2021",
      pages: 400,
      language: "English",
      age: "Adult"
    },
    editorialReviews: [
      "A masterfully crafted psychological thriller that will keep you on the edge of your seat."
    ],
    relatedBooks: [],
    authorMessage: "This thriller explores the depths of human depravity and the struggle for identity."
  },
  "mark-twain": {
    id: "mark-twain",
    title: "Mark Twain",
    author: "Ron Chernow",
    coverImage: "/images/mark-twain.jpg",
    rating: 4.7,
    reviewCount: 25,
    description: "A definitive biography of Mark Twain by Pulitzer Prize-winning author Ron Chernow, exploring the life and legacy of America's greatest humorist.",
    formats: [
      { id: "hardcover", name: "Hardcover", price: 24.99, originalPrice: 29.99 },
      { id: "ebook", name: "eBook", price: 14.99 }
    ],
    details: {
      isbn: "9780525559540",
      publisher: "Allen Lane",
      publicationDate: "2024",
      pages: 784,
      language: "English",
      age: "Adult"
    },
    editorialReviews: [
      "A masterful portrait of Mark Twain, capturing both his genius and his contradictions.",
      "Ron Chernow brings Twain to life in a way that is both scholarly and deeply human."
    ],
    relatedBooks: [
      { id: "james", title: "James", author: "Percival Everett", coverImage: "/images/james-cover.webp", rating: 4.7, reviewCount: 27, price: 15.99 },
      { id: "the-tenant", title: "The Tenant", author: "Freida McFadden", coverImage: "/images/the-tenant-cover.webp", rating: 4.8, reviewCount: 39, price: 21.99 }
    ],
    authorMessage: "In this biography, I sought to illuminate the many facets of Mark Twain's life, from his humor to his heartbreaks."
  }
};

export function getBookById(id: string): Book | null {
  return books[id] || null;
}

export function getAllBooks(): Book[] {
  return Object.values(books);
}

export function getBookIds(): string[] {
  return Object.keys(books);
} 