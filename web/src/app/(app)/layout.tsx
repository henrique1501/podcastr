import { ReactNode } from 'react'
import { Header } from './components/header'
import { MobilePlayer } from './components/mobile-player'
import { Player } from './components/player'
import { Sidebar } from './components/sidebar'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex">
      <Sidebar />

      <main className="overflow-auto lg:w-[calc(100vw - 16.875rem)] lg:ml-[16.875rem] bg-white">
        <Header />
        {children}
      </main>

      <Player />

      <div className="fixed right-4 bottom-4 lg:hidden">
        <MobilePlayer />
      </div>
    </div>
  )
}
