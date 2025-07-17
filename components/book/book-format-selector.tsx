"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Format {
  id: string
  name: string
  price: number
  originalPrice?: number
}

interface BookFormatSelectorProps {
  formats: Format[]
  onFormatChange?: (format: Format) => void
}

export function BookFormatSelector({ formats, onFormatChange }: BookFormatSelectorProps) {
  const [selectedFormat, setSelectedFormat] = useState(formats[0])

  const handleFormatChange = (format: Format) => {
    setSelectedFormat(format)
    if (onFormatChange) {
      onFormatChange(format)
    }
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-2">
        {formats.map((format) => (
          <Button
            key={format.id}
            variant={selectedFormat.id === format.id ? "default" : "outline"}
            onClick={() => handleFormatChange(format)}
            className="flex-1"
          >
            {format.name}
          </Button>
        ))}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">${selectedFormat.price.toFixed(2)}</span>
        {selectedFormat.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">${selectedFormat.originalPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  )
}
