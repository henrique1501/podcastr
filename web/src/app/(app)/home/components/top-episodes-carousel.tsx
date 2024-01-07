'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { TopEpisodeCard } from './top-episode-card'

export function TopEpisodesCarousel() {
  return (
    <Carousel className="lg:hidden">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, i) => (
          <CarouselItem key={i} className="basis-[75%]">
            <TopEpisodeCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
