/* eslint-disable prettier/prettier */
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { GoBackButton } from '../components/goback-button'

export default function Episode() {
  return (
    <section className="p-6 pb-24 space-y-6">
      <div className="flex items-center justify-between">
        <GoBackButton />

        <Button variant="ghost" className="px-3">
          <div className="h-6 w-6 rounded-full border-2 border-violet-700 flex items-center justify-center">
            <Play className="h-3 w-3 stroke-violet-700 fill-violet-700 ml-[1px]" />
          </div>

          <span className="text-violet-700">Tocar agora</span>
        </Button>
      </div>

      <Image
        src="/podcast-1.png"
        alt={'podcast-1'}
        width={3072}
        height={900}
        className="w-full h-60 lg:h-[300px] rounded-md object-cover"
      />

      <div className="space-y-3">
        <h1 className="text-zinc-800 dark:text-white text-2xl lg:text-[2rem] font-semibold tracking-tight">
          Como começar na programação em 2021 do jeito certo
        </h1>

        <div className="flex items-center gap-[6px] text-muted-foreground">
          <span className="block">Diego e Richard</span>

          <div className="h-1 w-1 rounded-full bg-zinc-300" />

          <span className="block">8 Jan 21</span>

          <div className="h-1 w-1 rounded-full bg-zinc-300" />

          <span className="block">35:40</span>
        </div>
      </div>

      <article className="text-zinc-600 dark:text-zinc-400">
        <p>
          Nesse episódio do Faladev, Diego Fernandes se reúne com João Pedro Schmitz, Bruno Lemos e Diego Haz, para discutir sobre a importância da
          contribuição open source e quais desafios circulam na comunidade. A
          gente passa a maior parte do tempo escrevendo código. Agora chegou o
          momento de falar sobre isso. Toda semana reunimos profissionais da
          tecnologia para discutir sobre tudo que circula na órbita da
          programação. O Faladev é um podcast original Rocketseat.
        </p>
      </article>
    </section>
  )
}
