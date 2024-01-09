import { SignInForm } from '@/components/sign-in-form'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Login',
  description: 'página de login',
}

export default function SignIn() {
  return (
    <main className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-violet-700  items-center justify-center hidden lg:flex">
        <Image src="/logo-white.svg" alt="" width={192} height={186} />
      </div>

      <Image
        src="/phone-logo.svg"
        alt=""
        width={40}
        height={40}
        className="absolute right-6 top-6"
      />

      <div className="max-w-[28rem] mx-auto w-full flex flex-col items-center justify-center gap-6 px-4">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Entre para ouvir os nossos conteúdos
          </h1>
          <p className="text-sm text-muted-foreground">
            Episódios novos toda semana
          </p>
        </div>

        <SignInForm />
      </div>
    </main>
  )
}
