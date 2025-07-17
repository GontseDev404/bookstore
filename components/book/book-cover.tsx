import Image from "next/image"
import { cn } from "@/lib/utils"

interface BookCoverProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function BookCover({ src, alt, width = 400, height = 600, className }: BookCoverProps) {
  return (
    <div className={cn("overflow-hidden rounded-md border bg-muted", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover transition-all hover:scale-105"
      />
    </div>
  )
}
