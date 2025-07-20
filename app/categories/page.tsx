import Image from "next/image"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    {
      id: "fiction",
      name: "Fiction",
      description: "Explore imaginative stories and compelling narratives",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "nonfiction",
      name: "Non-Fiction",
      description: "Discover real stories, facts, and knowledge",
      image: "/images/nonfiction.png"
    },
    {
      id: "children",
      name: "Children's Books",
      description: "Magical stories for young readers",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "audiobooks",
      name: "Audiobooks",
      description: "Listen to stories on the go",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "nature",
      name: "Nature & Science",
      description: "Explore the natural world and scientific discoveries",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "biography",
      name: "Biography & Memoir",
      description: "Real stories of remarkable people",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "mystery",
      name: "Mystery & Thriller",
      description: "Suspenseful stories that keep you guessing",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "romance",
      name: "Romance",
      description: "Love stories and romantic tales",
      image: "/images/romance11.png"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Browse Categories</h1>
        <p className="text-muted-foreground">Find your next favorite book by category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.id}`} className="group">
            <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 