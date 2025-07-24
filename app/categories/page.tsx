import Image from "next/image"
import Link from "next/link"
import { categories } from "@/data/categories"

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Browse Categories</h1>
        <p className="text-muted-foreground">Find your next favorite book by category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <Link key={idx} href={category.link} className="group">
            <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={category.image || "/images/placeholder.jpg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{category.description || ""}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 