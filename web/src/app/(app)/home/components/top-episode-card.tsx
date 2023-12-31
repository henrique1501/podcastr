import Image from 'next/image'
import Link from 'next/link'
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

      <div className="absolute left-0 bottom-0 right-0 py-3 px-4 backdrop-blur-md bg-white bg-opacity-50 flex items-center justify-between">
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
      </div>
    </Link>
  )
}
