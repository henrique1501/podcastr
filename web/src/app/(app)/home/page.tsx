import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Heart, ListMusic, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SelectPlayListDialog } from '../components/select-playlist-dialog'
import { PlayButton } from './components/play-button'
import { TopEpisodeCard } from './components/top-episode-card'
import { TopEpisodesCarousel } from './components/top-episodes-carousel'

export default function Home() {
  return (
    <section className="space-y-6 p-6 pb-20">
      <div className="space-y-1">
        <h1 className="text-2xl text-zinc-800 dark:text-white font-semibold tracking-tight">
          Top episódios
        </h1>
        <p className="text-sm text-muted-foreground">
          Escute os episódios mais populares do nosso catálogo.
        </p>
      </div>

      <div className="hidden lg:flex gap-6">
        <TopEpisodeCard />
        <TopEpisodeCard />
        <TopEpisodeCard />
      </div>

      <TopEpisodesCarousel />

      <div className="space-y-1">
        <h1 className="text-2xl text-zinc-800 dark:text-white font-semibold tracking-tight">
          Escute agora
        </h1>
        <p className="text-sm text-muted-foreground">
          Principais escolhas para você. Atualizado diariamente.
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Episódio</TableHead>
            <TableHead>Integrantes</TableHead>
            <TableHead>Publico em</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Link
                  href="/episodes/123"
                  className="flex items-center gap-4 hover:underline"
                >
                  <Image
                    src="/podcast-1.png"
                    alt="podcast-1"
                    width={300}
                    height={200}
                    className="h-10 w-10 rounded-md object-cover"
                  />
                  <span className="text-zinc-800 dark:text-white">
                    A vida é boa
                  </span>
                </Link>
              </TableCell>
              <TableCell>Tiago, Diego e Pellizzetti</TableCell>
              <TableCell>8 Jan, 2021</TableCell>
              <TableCell>01:35:18</TableCell>
              <TableCell>
                <SelectPlayListDialog episodeId={'4567'}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-8 w-8 ring-offset-background transition-colors hover:bg-muted-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 group">
                    <ListMusic className="h-4 w-4 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400 transition-colors" />
                  </button>
                </SelectPlayListDialog>
              </TableCell>
              <TableCell>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-8 w-8 ring-offset-background transition-colors hover:bg-muted-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 group">
                  <Heart className="h-4 w-4 stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400 transition-colors" />
                </button>
              </TableCell>
              <TableCell>
                <PlayButton variant="outline" className="group">
                  <Play className="h-4 w-4 ml-[3px] stroke-muted-foreground group-hover:stroke-violet-700 group-hover:fill-violet-400 transition-colors" />
                </PlayButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
