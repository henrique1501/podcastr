'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { Moon, Sun, User2 } from 'lucide-react'
import { useTheme } from 'next-themes'

export function UserNav() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-9 w-9">
          <AvatarFallback>
            <User2 className="h-5 w-5 stroke-muted-foreground" />
          </AvatarFallback>

          <AvatarImage />
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <div className="text-sm font-medium leading-none">
              <p>Jhon doe</p>
            </div>
            <p className="text-xs leading-none text-muted-foreground">
              jhondoe@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <div className="text-sm font-medium leading-none">
                <p>Tema</p>
              </div>
              <p className="text-xs leading-none text-muted-foreground">
                Mude para o tema light ou dark
              </p>
            </div>

            <div className="flex items-center justify-between">
              {theme === 'light' ? (
                <Switch onCheckedChange={() => setTheme('dark')} />
              ) : (
                <Switch checked onCheckedChange={() => setTheme('light')} />
              )}

              {theme === 'light' ? (
                <Sun className="h-5 w-5 stroke-zinc-800" />
              ) : (
                <Moon className="h-5 w-5 stroke-primary" />
              )}
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
