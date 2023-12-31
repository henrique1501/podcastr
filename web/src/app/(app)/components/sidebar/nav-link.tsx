'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === props.href

  return (
    <Link
      data-active={isActive}
      className={twMerge(
        'inline-flex gap-2 items-center h-9 rounded-md px-4 w-full text-sm font-medium text-muted transition-colors bg-transparent hover:bg-violet-800 data-[active=true]:bg-violet-800',
        props.className,
      )}
      {...props}
    />
  )
}
