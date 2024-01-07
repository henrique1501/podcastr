import Image from 'next/image'
import Link from 'next/link'
import { TopEpisodeContainer } from './top-episode-container'
import { TopEpisodePlayButton } from './top-episode-play-button'

export function TopEpisodeCard() {
  return (
    <Link
      href={`/episodes/123`}
      className="relative w-[20.5rem] h-[12.5rem] rounded-md overflow-hidden"
    >
      <Image
        src="/podcast-1.png"
        alt="podcast-1"
        width={900}
        height={600}
        className="w-full h-full object-cover"
      />

      <TopEpisodeContainer>
        <div>
          <h3>O que é um bom codigo?</h3>

          <div className="flex gap-4">
            <span className="block text-sm text-muted-foreground">
              Diego e Richard
            </span>

            <span className="block text-sm text-muted-foreground">
              8 Jan, 2021
            </span>
          </div>
        </div>

        <TopEpisodePlayButton />
      </TopEpisodeContainer>
    </Link>
  )
}
