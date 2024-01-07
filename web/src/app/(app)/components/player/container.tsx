'use client'

import { useTheme } from 'next-themes'
import { ReactNode } from 'react'

export function PlayerContainer({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  if (theme === 'dark') {
    return (
      <div className="hidden border-r border-zinc-800 px-16 py-2 fixed left-0 bottom-0 right-0 lg:flex items-center justify-between backdrop-blur-md bg-zinc-900 bg-opacity-50 border-t-[1.5px] border-gradient-to-l from-violet-700 to-violet-700">
        {children}
      </div>
    )
  }

  return (
    <div className="hidden border-r border-transparent px-16 py-2 fixed left-0 bottom-0 right-0 lg:flex items-center justify-between backdrop-blur-md bg-white bg-opacity-50 border-t-[1.5px] border-gradient-to-l from-violet-700 to-violet-700">
      {children}
    </div>
  )
}
