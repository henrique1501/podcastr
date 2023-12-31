import { ReactNode } from 'react'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-white">
        <Header />
        {children}
      </main>
    </div>
  )
}
