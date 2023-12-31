import { Slider } from '@/components/ui/slider'
import {
  Heart,
  ListMusic,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from 'lucide-react'
import Image from 'next/image'
import { PlayButton } from '../../home/components/play-button'

export function Player() {
  return (
    <div className="px-16 py-2 fixed left-0 bottom-0 right-0 flex items-center justify-between backdrop-blur-md bg-white bg-opacity-50 border-t-[1.5px] border-gradient-to-l from-violet-700 to-violet-700">
      <div className="flex gap-4">
        <Image
          src="/podcast-1.png"
          alt="podcast-1"
          width={300}
          height={200}
          className="h-10 w-10 rounded-md object-cover"
        />

        <div className="space-y-1">
          <h3 className="text-sm text-zinc-800 font-semibold">
            Diego e Richard
          </h3>

          <span className="block text-sm text-muted-foreground">
            8 Jan, 2021
          </span>
        </div>
      </div>

      <div className="space-y-1 max-w-xl w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button>
              <Heart className="h-5 w-5 stroke-muted-foreground" />
            </button>

            <button>
              <ListMusic className="h-5 w-5 stroke-muted-foreground" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button>
              <SkipBack className="h-5 w-5 stroke-muted-foreground" />
            </button>

            <PlayButton>
              <Play className="h-5 w-5 stroke-muted fill-muted ml-[2px]" />
            </PlayButton>

            <button>
              <SkipForward className="h-5 w-5 stroke-muted-foreground" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button>
              <Repeat className="h-5 w-5 stroke-muted-foreground" />
            </button>

            <button>
              <Shuffle className="h-5 w-5 stroke-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="block text-sm text-muted-foreground">12:02</span>

          <Slider defaultValue={[33]} max={100} step={1} />

          <span className="block text-sm text-muted-foreground">35:16</span>
        </div>
      </div>

      <div className="flex items-center gap-4 max-w-[14.75rem] w-full">
        <Volume1 className="stroke-muted-foreground" />
        <Slider defaultValue={[25]} max={100} step={1} />
      </div>
    </div>
  )
}
