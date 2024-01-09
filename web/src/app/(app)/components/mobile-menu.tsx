'use client'

import { Heart, ListMusic, ListPlus, PlayCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AddPlaylistDialog } from './add-playlist-dialog'
import { MobilePlaylistsView } from './mobile-playlists-viewer'

export function MobileMenu() {
  const pathname = usePathname()

  const isCurrentPath = (path: string) => path === pathname

  return (
    <div className="h-16 fixed left-0 bottom-0 right-0 border-t border-transparent dark:border-t-zinc-800 bg-violet-700 dark:bg-background px-6 lg:hidden">
      <div className="flex items-center justify-between h-full">
        <Link href="/home">
          <PlayCircle
            data-active={isCurrentPath('/home')}
            className="stroke-white opacity-50 data-[active=true]:opacity-100"
          />
        </Link>

        <Link href="/liked">
          <Heart
            data-active={isCurrentPath('/liked')}
            className="stroke-white opacity-50 data-[active=true]:opacity-100"
          />
        </Link>

        <MobilePlaylistsView>
          <button>
            <ListMusic
              data-active={isCurrentPath('/playlists')}
              className="stroke-white opacity-50 data-[active=true]:opacity-100"
            />
          </button>
        </MobilePlaylistsView>

        <AddPlaylistDialog>
          <button>
            <ListPlus className="stroke-white opacity-50" />
          </button>
        </AddPlaylistDialog>
      </div>
    </div>
  )
}
