import { BookOpen, Headphones } from "lucide-react";

export const categories = [
  { name: "Fiction", icon: BookOpen, count: "2.5k", color: "bg-blue-500", link: "/categories/fiction", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80", description: "Explore imaginative stories and compelling narratives" },
  { name: "Non-Fiction", icon: BookOpen, count: "1.8k", color: "bg-green-500", link: "/categories/nonfiction", image: "/images/nonfiction.png", description: "Discover real stories, facts, and knowledge" },
  { name: "Audiobooks", icon: Headphones, count: "1.2k", color: "bg-purple-500", link: "/audiobooks", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", description: "Listen to stories on the go" },
  { name: "Children's", icon: BookOpen, count: "950", color: "bg-yellow-500", link: "/categories/children", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80", description: "Magical stories for young readers" },
  { name: "Academic", icon: BookOpen, count: "750", color: "bg-red-500", link: "/categories/academic", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", description: "Explore the natural world and scientific discoveries" },
  { name: "Magazines", icon: BookOpen, count: "500", color: "bg-indigo-500", link: "/categories/magazines", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", description: "Real stories of remarkable people" }
]; 