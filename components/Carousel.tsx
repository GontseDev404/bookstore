import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Play, Pause, Heart } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  badge: string;
  type: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  currentSlide: number;
  isPlaying: boolean;
  wishlist: string[];
  onSlideChange: (index: number) => void;
  onPlayPause: () => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleWishlist: (id: string) => void;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  currentSlide,
  isPlaying,
  wishlist,
  onSlideChange,
  onPlayPause,
  onPrev,
  onNext,
  onToggleWishlist,
}) => (
  <section
    className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700"
    role="region"
    aria-label="Featured Books Carousel"
    aria-live="polite"
  >
    <div className="container mx-auto px-4 py-4 sm:py-6">
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="flex gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <Button
          onClick={onPlayPause}
          variant="ghost"
          size="icon"
          className="ml-4 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm h-6 w-6 sm:h-8 sm:w-8"
          aria-label={isPlaying ? 'Pause carousel autoplay' : 'Play carousel autoplay'}
        >
          {isPlaying ? <Pause className="h-3 w-3 sm:h-4 sm:w-4" /> : <Play className="h-3 w-3 sm:h-4 sm:w-4" />}
        </Button>
      </div>
      <div className="absolute top-1/2 left-2 right-2 sm:left-4 sm:right-4 flex justify-between items-center pointer-events-none z-10">
        <Button
          onClick={onPrev}
          variant="ghost"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white border-white/30 pointer-events-auto backdrop-blur-sm h-8 w-8 sm:h-10 sm:w-10 transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>
        <Button
          onClick={onNext}
          variant="ghost"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white border-white/30 pointer-events-auto backdrop-blur-sm h-8 w-8 sm:h-10 sm:w-10 transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>
      </div>
      <div className="relative w-full overflow-hidden rounded-lg slideshow-container">
        <span className="sr-only">Use left/right arrow keys to navigate the carousel. Press space to play or pause.</span>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-center">
                <div className="relative group">
                  <Link href={slide.link} className="block">
                    <div className="aspect-[3/4] relative max-w-[200px] sm:max-w-xs mx-auto transform transition-transform duration-500 group-hover:scale-105 cursor-pointer">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg" />
                      <Badge className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-red-500 text-white animate-pulse text-xs z-10">
                        {slide.badge}
                      </Badge>
                      <Badge className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-blue-500 text-white text-xs z-10">
                        {slide.type}
                      </Badge>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 text-amber-900 px-4 py-2 rounded-lg font-semibold text-sm">
                          View Details
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="space-y-3 sm:space-y-4 text-white text-center lg:text-left">
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg text-white/90 animate-fade-in animation-delay-200">
                    {slide.author}
                  </p>
                  <p className="text-white/80 text-sm sm:text-base animate-fade-in animation-delay-400">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-in animation-delay-600">
                    <Link href={slide.link}>
                      <Button
                        size="lg"
                        className="bg-white text-amber-900 hover:bg-white/90 font-semibold transform hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
                      >
                        SHOP NOW
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-amber-900 hover:bg-white/90 font-semibold transform hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl border-white"
                      onClick={() => onToggleWishlist(slide.id)}
                    >
                      <Heart
                        className="h-4 w-4 mr-2"
                        fill={wishlist.includes(slide.id) ? 'currentColor' : 'none'}
                      />
                      {wishlist.includes(slide.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
); 