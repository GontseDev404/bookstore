export interface Audiobook {
  id: string;
  title: string;
  author: string;
  narrator: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  duration: string;
  price: number;
  link: string;
}

export const audiobooks: Audiobook[] = [
  {
    id: "big-dumb-eyes",
    title: "Big Dumb Eyes: Stories from a Comedian",
    author: "Nate Bargatze",
    narrator: "Nate Bargatze",
    coverImage: "/images/big-dumb-eyes-cover.webp",
    rating: 4.5,
    reviewCount: 32,
    duration: "6h 23m",
    price: 24.99,
    link: "/books/big-dumb-eyes",
  },
  {
    id: "class-clown",
    title: "Class Clown: The Memoirs of a Class Clown",
    author: "Dave Barry",
    narrator: "Dave Barry",
    coverImage: "/images/class-clown-cover.webp",
    rating: 4.7,
    reviewCount: 29,
    duration: "8h 15m",
    price: 29.99,
    link: "/books/class-clown",
  },
  {
    id: "champion-mindset",
    title: "Champion Mindset: Coach, Competitor, Change-Maker",
    author: "Michael Johnson",
    narrator: "Michael Johnson",
    coverImage: "/images/champion-mindset-cover.webp",
    rating: 4.8,
    reviewCount: 45,
    duration: "5h 42m",
    price: 19.99,
    link: "/books/champion-mindset",
  },
  {
    id: "immaculate-conception",
    title: "Immaculate Conception: A Novel",
    author: "Sarah Johnson",
    narrator: "Emma Thompson",
    coverImage: "/images/immaculate-conception-cover.webp",
    rating: 4.6,
    reviewCount: 38,
    duration: "12h 8m",
    price: 34.99,
    link: "/books/immaculate-conception",
  },
  {
    id: "anji-kills-a-king",
    title: "Anji Kills a King",
    author: "David Mitchell",
    narrator: "Simon Vance",
    coverImage: "/images/anji-kills-a-king-cover.webp",
    rating: 4.9,
    reviewCount: 52,
    duration: "15h 33m",
    price: 39.99,
    link: "/books/anji-kills-a-king",
  },
  {
    id: "the-devils",
    title: "The Devils",
    author: "Fyodor Dostoevsky",
    narrator: "Constantine Gregory",
    coverImage: "/images/the-devils-cover.webp",
    rating: 4.7,
    reviewCount: 41,
    duration: "18h 27m",
    price: 44.99,
    link: "/books/the-devils",
  },
]; 