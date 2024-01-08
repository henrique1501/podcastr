import { EpisodeCard } from '../home/components/episode-card'

interface SearchProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function Search({ searchParams }: SearchProps) {
  const query = searchParams?.q

  return (
    <section className="space-y-6 p-6 pb-20">
      <div className="space-y-1">
        <h1 className="text-3xl text-zinc-800 dark:text-white font-semibold tracking-tight lg:leading-[1.1]">
          {query}
        </h1>
        <p className="text-sm text-muted-foreground">
          Não econtrou o episódio que procura? Faça mais uma pesquisa.
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
