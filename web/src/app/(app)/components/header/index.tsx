import { UserNav } from './user-nav'

export function Header() {
  return (
    <header className="h-16 border-b border-zinc-100 px-6 flex items-center justify-between">
      <span className="block text-sm text-muted-foreground">
        O melhor para você ouvir, sempre.
      </span>

      <UserNav />
    </header>
  )
}
