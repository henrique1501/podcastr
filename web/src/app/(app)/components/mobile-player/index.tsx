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
import { ChevronDown, Play } from 'lucide-react'
import Image from 'next/image'
import { PlayButton } from '../../home/components/play-button'

export function MobilePlayer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <PlayButton>
          <Play />
        </PlayButton>
      </DrawerTrigger>

      <DrawerContent className="h-[90%] px-6">
        <DrawerHeader>
          <DrawerTitle>Tocando agora</DrawerTitle>
        </DrawerHeader>

        <DrawerClose asChild className="absolute top-8 left-9">
          <Button variant="secondary" className="h-10 w-10 rounded-full p-0">
            <ChevronDown className="h-5 w-5" />
          </Button>
        </DrawerClose>

        <div className="mt-6 flex flex-col items-center gap-6">
          <Image
            src="/podcast-1.png"
            alt="podcast-1"
            width={960}
            height={960}
            className="h-96 w-[348px] rounded-xl object-cover shadow-lg"
          />

          <div className="space-y-1 text-center">
            <h3 title="A vida é boa" className="font-medium leading-none">
              A vida é boa
            </h3>
            <p title="Diego e Richard" className="text-muted-foreground">
              Diego e Richard
            </p>
          </div>
        </div>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
