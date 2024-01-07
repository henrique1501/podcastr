'use client'

import { Play } from 'lucide-react'
import { MouseEvent } from 'react'
import { PlayButton } from './play-button'

export function TopEpisodePlayButton() {
  function handlePlay(e: MouseEvent) {
    e.preventDefault()

    alert('Tocando!')
  }

  return (
    <PlayButton onClick={handlePlay}>
      <Play className="h-4 w-4 stroke-zinc-200 fill-zinc-200 ml-[2px]" />
    </PlayButton>
  )
}
