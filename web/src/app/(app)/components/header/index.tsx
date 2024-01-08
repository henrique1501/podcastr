import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { UserNav } from './user-nav'

export function Header() {
  return (
    <header className="h-16 border-b border-zinc-100 dark:border-zinc-800 px-6 flex items-center justify-between bg-background">
      <Link href="/home" className="lg:hidden">
        <Image src="/phone-logo.svg" alt="" width={40} height={40} />
      </Link>

      <form
        action="/search"
        className="w-56 flex items-center gap-2 px-3 rounded-md border border-input focus-within:border-violet-700 transition-colors"
      >
        <Search className="h-5 w-5" />
        <Input
          placeholder="front..."
          type="search"
          name="q"
          className="h-9 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </form>

      <div className="flex items-center gap-2">
        <span className="hidden lg:block text-sm text-muted-foreground">
          O melhor para você ouvir, sempre.
        </span>
        <UserNav />
      </div>
    </header>
  )
}
