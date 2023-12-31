'use client'

import { Play } from 'lucide-react'
import { MouseEvent } from 'react'
import { PlayButton } from './play-button'

export function EpisodePlayButton() {
  function handlePlay(e: MouseEvent) {
    e.preventDefault()

    alert('Tocando!')
  }

  return (
    <PlayButton
      onClick={handlePlay}
      className="hover:bg-violet-700 hover:brightness-90"
    >
      <Play className="h-4 w-4 stroke-muted fill-muted ml-[1px]" />
    </PlayButton>
  )
}
