import { EpisodeCard } from '../home/components/episode-card'

export default function Search() {
  return (
    <section className="space-y-6 p-6 pb-20">
      <div className="space-y-1">
        <h1 className="text-3xl text-zinc-800 dark:text-white font-semibold tracking-tight lg:leading-[1.1]">
          Episódios curtidos por você
        </h1>
        <p className="text-sm text-muted-foreground">
          Ouça novamente os episódios que você mais gostou.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <EpisodeCard key={i} />
        ))}
      </div>
    </section>
  )
}
