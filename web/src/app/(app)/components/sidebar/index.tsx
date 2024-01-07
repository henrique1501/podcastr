import { ScrollArea } from '@/components/ui/scroll-area'
import { Heart, ListMusic, PlayCircle, Plus, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AddPlaylistDialog } from '../add-playlist-dialog'
import { NavLink } from './nav-link'

export function Sidebar() {
  return (
    <aside className="hidden bg-violet-700 dark:bg-background border-r border-transparent dark:border-zinc-800 w-[16.875rem] fixed top-0 left-0 h-screen lg:flex flex-col items-center p-4">
      <Link href="/home">
        <Image src="/logo-white.svg" alt="" width={154} height={30} />
      </Link>

      <div className="space-y-6 w-full mt-10">
        <div className="space-y-2">
          <h2 className="ml-4 text-muted dark:text-white text-lg font-semibold">
            Explorar
          </h2>

          <ul>
            <li>
              <NavLink href="/home">
                <PlayCircle className="h-5 w-5" />
                <span>Escute agora</span>
              </NavLink>
            </li>

            <li>
              <NavLink href="/search">
                <Search className="h-5 w-5" />
                <span>Pesquisar</span>
              </NavLink>
            </li>

            <li>
              <NavLink href="/liked">
                <Heart className="h-5 w-5" />
                <span>Curtidos</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="ml-4 text-muted dark:text-white text-lg font-semibold">
            Playlists
          </h2>

          <ScrollArea className="pb-3 h-56 w-full">
            <NavLink href={`/playlists/123`}>
              <ListMusic className="h-5 w-5" />
              <span>Back-end</span>
            </NavLink>

            <NavLink href={`/playlists/123`}>
              <ListMusic className="h-5 w-5" />
              <span>Front-end</span>
            </NavLink>

            <NavLink href={`/playlists/123`}>
              <ListMusic className="h-5 w-5" />
              <span>Node.js</span>
            </NavLink>

            <NavLink href={`/playlists/123`}>
              <ListMusic className="h-5 w-5" />
              <span>SveltKit</span>
            </NavLink>

            <NavLink href={`/playlists/123`}>
              <ListMusic className="h-5 w-5" />
              <span>Next.js</span>
            </NavLink>

            <NavLink href={`/playlists/123`}>
              <ListMusic className="h-5 w-5" />
              <span>PHP</span>
            </NavLink>

            <NavLink href={`/playlists/123`}>
              <ListMusic className="h-5 w-5" />
              <span>Golang</span>
            </NavLink>
          </ScrollArea>

          <AddPlaylistDialog>
            <button className="w-full justify-start inline-flex gap-2 items-center h-9 opacity-50 rounded-md px-4 text-sm font-medium text-muted dark:text-zinc-200 transition-colors bg-transparent hover:bg-violet-800 hover:opacity-100 data-[active=true]:bg-violet-800 dark:hover:bg-zinc-900 dark:data-[active=true]:bg-zinc-800">
              <Plus className="h-5 w-5" />
              <span>Criar Playlist</span>
            </button>
          </AddPlaylistDialog>
        </div>
      </div>
    </aside>
  )
}
