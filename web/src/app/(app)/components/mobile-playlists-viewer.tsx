import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ListMusic } from 'lucide-react'
import { ReactNode } from 'react'
import { NavLink } from './sidebar/nav-link'

interface MobilePlaylistsViewProps {
  children: ReactNode
}

export function MobilePlaylistsView({ children }: MobilePlaylistsViewProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      <DrawerContent className="h-fit p-6">
        <DrawerHeader>
          <DrawerTitle className="text-left">Suas playlists</DrawerTitle>
        </DrawerHeader>

        <ScrollArea className="pb-3 h-56 w-full">
          <NavLink href={`/playlists/1`}>
            <ListMusic className="h-5 w-5" />
            <span>Back-end</span>
          </NavLink>

          <NavLink href={`/playlists/2`}>
            <ListMusic className="h-5 w-5" />
            <span>Front-end</span>
          </NavLink>

          <NavLink href={`/playlists/3`}>
            <ListMusic className="h-5 w-5" />
            <span>Node.js</span>
          </NavLink>

          <NavLink href={`/playlists/4`}>
            <ListMusic className="h-5 w-5" />
            <span>SveltKit</span>
          </NavLink>

          <NavLink href={`/playlists/5`}>
            <ListMusic className="h-5 w-5" />
            <span>Next.js</span>
          </NavLink>

          <NavLink href={`/playlists/6`}>
            <ListMusic className="h-5 w-5" />
            <span>PHP</span>
          </NavLink>

          <NavLink href={`/playlists/7`}>
            <ListMusic className="h-5 w-5" />
            <span>Golang</span>
          </NavLink>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
