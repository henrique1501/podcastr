import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ExternalLink, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function App() {
  return (
    <>
      <header className="h-16 border-b border-zinc-100 dark:border-zinc-900 px-4 flex items-center">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
          <Image src="/logo.svg" alt="" width={154} height={30} />

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="rounded-full dark:bg-zinc-900 dark:hover:bg-zinc-900/80 dark:text-zinc-200"
            >
              <Link href="/sign-in">Entrar</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-violet-700 hover:bg-violet-700/80 dark:text-zinc-200"
            >
              <Link href="/sign-up">Criar conta</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <section className="relative home-height flex flex-col items-center justify-center gap-4 px-4">
          <Button
            asChild
            className="bg-violet-200 rounded-full text-violet-700 dark:text-muted-foreground dark:bg-zinc-900 dark:hover:bg-zinc-900/80 gap-1 hover:bg-violet-200/80"
          >
            <a
              href="https://www.github.com/henrique998/podcastr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span> <ExternalLink className="h-5 w-5" />
            </a>
          </Button>

          <h1 className="text-3xl lg:text-6xl text-zinc-800 dark:text-zinc-200 text-center max-w-[900px] w-full font-bold">
            Ouça agora mesmo os melhores{' '}
            <span className="text-violet-700">podcasts</span> sobre o universo
            da programação
          </h1>

          <p className="text-muted-foreground text-xl text-center max-w-[640px] w-full">
            Abordamos diversos temas referentes ao universo da programação, como
            javascript, typescript, react, node e muito mais. crie uma conta
            agora comece a ouvir.
          </p>

          <div className="flex items-start gap-4 mt-2">
            <div className="flex -space-x-3 overflow-hidden">
              {Array.from({ length: 3 }).map((_, i) => (
                <Avatar key={i}>
                  <AvatarFallback>
                    <User2 />
                  </AvatarFallback>
                  <AvatarImage
                    src="/avatars/instant.jpeg"
                    alt="instant"
                    className="object-cover"
                  />
                </Avatar>
              ))}
            </div>

            <div>
              <strong className="text-sm text-violet-700 block leading-4">
                +536
              </strong>
              <span className="text-sm text-muted-foreground">
                usuários ouvem o nosso conteúdo
              </span>
            </div>
          </div>

          <div className="absolute -bottom-36 -left-36 lg:-bottom-32 lg:-left-32 h-72 w-72  rounded-full bg-violet-700 blur-[160px]" />
        </section>
      </main>
    </>
  )
}
