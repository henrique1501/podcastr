'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { EpisodeCard } from './episode-card'

export function EpisodesCarousel() {
  return (
    <Carousel className="max-w-full">
      <CarouselContent>
        {Array.from({ length: 15 }).map((_, i) => (
          <CarouselItem key={i}>
            <EpisodeCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
