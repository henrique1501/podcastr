import { UserNav } from './user-nav'

export function Header() {
  return (
    <header className="h-16 border-b border-zinc-100 dark:border-zinc-800 px-6 flex items-center justify-between bg-background">
      <span className="block text-sm text-muted-foreground">
        O melhor para você ouvir, sempre.
      </span>

      <UserNav />
    </header>
  )
}
