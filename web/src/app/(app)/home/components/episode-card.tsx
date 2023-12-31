import Image from 'next/image'
import { EpisodePlayButton } from './episode-play-button'

export function EpisodeCard() {
  return (
    <div className="relative space-y-3 w-[175px]">
      <Image
        src="/podcast-1.png"
        alt="podcast-1"
        width={900}
        height={900}
        className="rounded-md object-cover h-auto w-[175px] aspect-square"
      />

      <div className="absolute right-2 bottom-14">
        <EpisodePlayButton />
      </div>

      <div className="space-y-1 text-sm">
        <h3
          title="A vida é boa"
          className="font-medium leading-none w-[175px] truncate"
        >
          A vida é boa
        </h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <p title="Diego e Richard" className="w-[84px] truncate">
            Diego e Richard
          </p>
          <span className="block">8 Jan, 2021</span>
        </div>
      </div>
    </div>
  )
}
