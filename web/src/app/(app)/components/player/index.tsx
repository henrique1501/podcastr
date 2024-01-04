import { Slider } from '@/components/ui/slider'
import {
  Disc3,
  Heart,
  ListMusic,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from 'lucide-react'
// import Image from 'next/image'
import { PlayButton } from '../../home/components/play-button'

export function Player() {
  return (
    <div className="hidden px-16 py-2 fixed left-0 bottom-0 right-0 lg:flex items-center justify-between backdrop-blur-md bg-white bg-opacity-50 border-t-[1.5px] border-gradient-to-l from-violet-700 to-violet-700">
      <div className="flex items-center gap-4">
        {/* <Image
          src="/podcast-1.png"
          alt="podcast-1"
          width={300}
          height={200}
          className="h-10 w-10 rounded-md object-cover"
        /> */}
        <Disc3 className="h-10 w-10 stroke-zinc-500" />

        <div className="space-y-1 w-28">
          {/* <h3 className="text-sm text-zinc-800 font-semibold">
            Diego e Richard
          </h3>

          <span className="block text-sm text-muted-foreground">
            8 Jan, 2021
          </span> */}
        </div>
      </div>

      <div className="space-y-1 max-w-xl w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="group">
              <Heart className="h-5 w-5 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>

            <button className="group">
              <ListMusic className="h-5 w-5 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="group">
              <SkipBack className="h-5 w-5 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>

            <PlayButton>
              <Play className="h-5 w-5 stroke-muted fill-muted ml-[2px]" />
            </PlayButton>

            <button className="group">
              <SkipForward className="h-5 w-5 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="group">
              <Repeat className="h-5 w-5 stroke-muted-foreground group-hover:stroke-violet-700" />
            </button>

            <button className="group">
              <Shuffle className="h-5 w-5 stroke-muted-foreground group-hover:stroke-violet-700" />
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
