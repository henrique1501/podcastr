'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function GoBackButton() {
  const { back } = useRouter()

  return (
    <button
      onClick={back}
      className="flex items-center gap-2 text-muted-foreground"
    >
      <ArrowLeft />
      <span>voltar</span>
    </button>
  )
}
