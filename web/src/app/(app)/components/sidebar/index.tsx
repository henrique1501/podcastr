import { ScrollArea } from '@/components/ui/scroll-area'
import { Heart, ListMusic, PlayCircle, Plus, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLink } from './nav-link'

export function Sidebar() {
  return (
    <aside className="bg-violet-700 w-[16.875rem] flex flex-col items-center p-4">
      <Link href="/home">
        <Image src="/logo-white.svg" alt="" width={154} height={30} />
      </Link>

      <div className="space-y-6 w-full mt-14">
        <div className="space-y-2">
          <h2 className="ml-4 text-muted text-lg font-semibold">Explorar</h2>

          <ul className="space-y-2">
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
          <h2 className="ml-4 text-muted text-lg font-semibold">Playlists</h2>

          <ScrollArea className="space-y-2 pb-3 h-56 w-full">
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

          <button className="w-full justify-start inline-flex gap-2 items-center h-9 opacity-50 rounded-md px-4 text-sm font-medium text-muted transition-colors bg-transparent hover:bg-violet-800 hover:opacity-100 data-[active=true]:bg-violet-800">
            <Plus className="h-5 w-5" />
            <span>Adicionar Playlist</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
