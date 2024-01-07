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
import Image from 'next/image'
import { PlayButton } from '../../home/components/play-button'
import { SelectPlayListDialog } from '../select-playlist-dialog'
import { PlayerContainer } from './container'

export function Player() {
  const disabled = false

  return (
    <PlayerContainer>
      <div className="flex items-center gap-4">
        {disabled ? (
          <>
            <Disc3
              data-disabled={disabled}
              className="h-10 w-10 stroke-muted-foreground data-[disabled=true]:opacity-50"
            />

            <div className="w-28" />
          </>
        ) : (
          <>
            <Image
              src="/podcast-1.png"
              alt="podcast-1"
              width={300}
              height={200}
              className="h-10 w-10 rounded-md object-cover"
            />

            <div className="space-y-1 w-28">
              <h3 className="text-sm text-zinc-800 dark:text-white font-semibold">
                Diego e Richard
              </h3>

              <span className="block text-sm text-muted-foreground">
                8 Jan, 2021
              </span>
            </div>
          </>
        )}
      </div>

      <div className="space-y-1 max-w-xl w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button disabled={disabled} className="group disabled:opacity-50">
              <Heart className="h-5 w-5 stroke-muted-foreground group-disabled:group-hover:stroke-muted-foreground group-disabled:group-hover:fill-none group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>

            <SelectPlayListDialog episodeId={'1234'}>
              <button disabled={disabled} className="group disabled:opacity-50">
                <ListMusic className="h-5 w-5 stroke-muted-foreground group-disabled:group-hover:stroke-muted-foreground group-disabled:group-hover:fill-none group-hover:stroke-violet-700 group-hover:fill-violet-400" />
              </button>
            </SelectPlayListDialog>
          </div>

          <div className="flex items-center gap-4">
            <button disabled={disabled} className="group disabled:opacity-50">
              <SkipBack className="h-5 w-5 stroke-muted-foreground group-disabled:group-hover:stroke-muted-foreground group-disabled:group-hover:fill-none group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>

            <PlayButton disabled={disabled}>
              <Play className="h-5 w-5 stroke-zinc-200 fill-zinc-200 ml-[2px]" />
            </PlayButton>

            <button disabled={disabled} className="group disabled:opacity-50">
              <SkipForward className="h-5 w-5 stroke-muted-foreground group-disabled:group-hover:stroke-muted-foreground group-disabled:group-hover:fill-none group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button disabled={disabled} className="group disabled:opacity-50">
              <Repeat className="h-5 w-5 stroke-muted-foreground group-disabled:group-hover:stroke-muted-foreground group-hover:stroke-violet-700" />
            </button>

            <button disabled={disabled} className="group disabled:opacity-50">
              <Shuffle className="h-5 w-5 stroke-muted-foreground group-disabled:group-hover:stroke-muted-foreground group-hover:stroke-violet-700" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span
            data-disabled={disabled}
            className="block text-sm text-muted-foreground data-[disabled=true]:opacity-50"
          >
            12:02
          </span>

          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            data-disabled={disabled}
          />

          <span
            data-disabled={disabled}
            className="block text-sm text-muted-foreground data-[disabled=true]:opacity-50"
          >
            35:16
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 max-w-[14.75rem] w-full">
        <Volume1
          data-disabled={disabled}
          className="stroke-muted-foreground data-[disabled=true]:opacity-50"
        />
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          data-disabled={disabled}
        />
      </div>
    </PlayerContainer>
  )
}
