export interface WishlistBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  inStock: boolean;
  link: string;
}

export const wishlistBooks: WishlistBook[] = [
  {
    id: "silver-feet-and-her-wonder",
    title: "Silver Feet and Her Wonder",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/silver-feet-cover.png",
    rating: 4.8,
    reviewCount: 37,
    price: 24.99,
    originalPrice: 29.99,
    inStock: true,
    link: "/books/silver-feet-and-her-wonder",
  },
  {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/the-monkey-blanket-cover.png",
    rating: 4.9,
    reviewCount: 45,
    price: 19.99,
    originalPrice: 24.99,
    inStock: true,
    link: "/books/the-monkey-blanket",
  },
  {
    id: "fearless",
    title: "Fearless",
    author: "Lauren Roberts",
    coverImage: "/images/fearless-cover.webp",
    rating: 4.9,
    reviewCount: 41,
    price: 22.99,
    originalPrice: 27.99,
    inStock: false,
    link: "/books/fearless",
  },
  {
    id: "great-big-beautiful-life",
    title: "Great Big Beautiful Life",
    author: "Emily Henry",
    coverImage: "/images/great-big-beautiful-life-cover.webp",
    rating: 4.5,
    reviewCount: 33,
    price: 18.99,
    originalPrice: 23.99,
    inStock: true,
    link: "/books/great-big-beautiful-life",
  },
  {
    id: "the-tenant",
    title: "The Tenant",
    author: "Freida McFadden",
    coverImage: "/images/the-tenant-cover.webp",
    rating: 4.8,
    reviewCount: 39,
    price: 21.99,
    originalPrice: 26.99,
    inStock: true,
    link: "/books/the-tenant",
  },
  {
    id: "remarkably-bright-creatures",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    coverImage: "/images/remarkably-bright-creatures-cover.webp",
    rating: 4.6,
    reviewCount: 35,
    price: 20.99,
    originalPrice: 25.99,
    inStock: true,
    link: "/books/remarkably-bright-creatures",
  },
]; 