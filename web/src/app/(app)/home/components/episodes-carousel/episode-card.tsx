import { Play } from 'lucide-react'
import Image from 'next/image'

export function EpisodeCard() {
  return (
    <div className="relative w-[20.5rem] h-[12.5rem] rounded-md overflow-hidden">
      <Image
        src="/podcast-1.png"
        alt="podcast-1"
        width={900}
        height={600}
        className="w-full h-full object-cover"
      />

      <div className="absolute left-0 bottom-0 right-0 py-3 px-4 bg-blur flex items-center justify-between">
        <div>
          <h3>O que é um bom codigo?</h3>

          <div className="flex gap-4">
            <span className="block text-sm text-zinc-400">Diego e Richard</span>

            <span className="block text-sm text-zinc-400">8 Jan, 2021</span>
          </div>
        </div>

        <button className="bg-violet-700 hover:bg-violet-700/80 h-8 w-8 flex items-center justify-center rounded-full">
          <Play className="h-4 w-4 stroke-muted fill-muted ml-[1px]" />
        </button>
      </div>
    </div>
  )
}
