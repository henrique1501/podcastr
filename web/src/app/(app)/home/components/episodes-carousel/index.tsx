'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { EpisodeCard } from './episode-card'

export function EpisodesCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-1/3">
          <EpisodeCard />
        </CarouselItem>
        <CarouselItem>
          <EpisodeCard />
        </CarouselItem>
        <CarouselItem>
          <EpisodeCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
