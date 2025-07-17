import {
  BookOpen,
  Rocket,
  Heart,
  Scroll,
  Landmark,
  User,
  Utensils,
  Sparkles,
  Search,
  type LucideIcon,
} from "lucide-react"

interface CategoryIconProps {
  name: string
  className?: string
}

export function CategoryIcon({ name, className }: CategoryIconProps) {
  const icons: Record<string, LucideIcon> = {
    "magnifying-glass": Search,
    rocket: Rocket,
    heart: Heart,
    scroll: Scroll,
    landmark: Landmark,
    user: User,
    utensils: Utensils,
    sparkles: Sparkles,
    "teddy-bear": BookOpen, // Using BookOpen as a fallback for teddy-bear
    book: BookOpen,
  }

  const IconComponent = icons[name] || BookOpen

  return <IconComponent className={className} />
}
