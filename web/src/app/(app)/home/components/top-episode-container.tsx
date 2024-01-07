'use client'

import { useTheme } from 'next-themes'
import { ReactNode } from 'react'

export function TopEpisodeContainer({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  if (theme === 'dark') {
    return (
      <div className="absolute left-0 bottom-0 right-0 py-3 px-4 backdrop-blur-md bg-zinc-900 bg-opacity-50 flex items-center justify-between">
        {children}
      </div>
    )
  }

  return (
    <div className="absolute left-0 bottom-0 right-0 py-3 px-4 backdrop-blur-md bg-white bg-opacity-50 flex items-center justify-between">
      {children}
    </div>
  )
}
