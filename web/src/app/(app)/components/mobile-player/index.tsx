import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Slider } from '@/components/ui/slider'
import {
  ChevronDown,
  ChevronUp,
  Heart,
  ListMusic,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react'
import Image from 'next/image'
import { PlayButton } from '../../home/components/play-button'
import { SelectPlayListDialog } from '../select-playlist-dialog'

export function MobilePlayer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="h-10 w-10 rounded-full p-0 bg-violet-700 hover:bg-violet-700/80 shadow-sm">
          <ChevronUp className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-fit px-6 pb-6">
        <DrawerHeader>
          <DrawerTitle>Tocando agora</DrawerTitle>
        </DrawerHeader>

        <DrawerClose asChild className="absolute top-8 left-9">
          <Button variant="secondary" className="h-10 w-10 rounded-full p-0">
            <ChevronDown className="h-5 w-5" />
          </Button>
        </DrawerClose>

        <div className="mt-6 w-[348px] mx-auto flex flex-col items-center gap-6">
          <Image
            src="/podcast-1.png"
            alt="podcast-1"
            width={960}
            height={960}
            className="h-96 w-full rounded-xl object-cover shadow-lg"
          />

          <div className="space-y-1 text-center">
            <h3
              title="A vida é boa"
              className="font-medium leading-none text-xl"
            >
              A vida é boa
            </h3>
            <p title="Diego e Richard" className="text-muted-foreground">
              Diego e Richard
            </p>
          </div>

          <div className="w-full flex items-center justify-between">
            <button className="group">
              <Heart className="h-8 w-8 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>

            <SelectPlayListDialog episodeId="1212">
              <button className="group">
                <ListMusic className="h-8 w-8 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400" />
              </button>
            </SelectPlayListDialog>
          </div>

          <div className="space-y-2 w-full">
            <Slider />

            <div className="flex items-center justify-between">
              <span className="block text-sm text-muted-foreground">12:56</span>
              <span className="block text-sm text-muted-foreground">36:41</span>
            </div>
          </div>
        </div>

        <DrawerFooter className="flex flex-row items-center justify-between">
          <button className="group">
            <Repeat className="h-8 w-8 stroke-muted-foreground group-hover:stroke-violet-700" />
          </button>

          <div className="flex items-center gap-4">
            <button className="group">
              <SkipBack className="h-8 w-8 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>

            <PlayButton className="h-20 w-20">
              <Play className="h-8 w-8 stroke-zinc-200 fill-zinc-200 ml-[2px]" />
            </PlayButton>

            <button className="group">
              <SkipForward className="h-8 w-8 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400" />
            </button>
          </div>

          <button className="group">
            <Shuffle className="h-8 w-8 stroke-muted-foreground group-hover:stroke-violet-700" />
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
