import { EpisodeCard } from './components/episodes-carousel/episode-card'

export default function Home() {
  return (
    <section className="p-6">
      <h1 className="text-xl text-muted-foreground font-semibold">
        Escute agora
      </h1>

      <div className="mt-6 flex gap-6">
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </div>
    </section>
  )
}
