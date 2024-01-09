'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'

const signInFormSchema = z.object({
  email: z.string().email('Provide an valid e-mail'),
  password: z
    .string()
    .min(6, { message: 'password must have at least 6 characters' }),
})

type SignInFormValues = z.infer<typeof signInFormSchema>

export function SignInForm() {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    mode: 'onChange',
  })

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = form

  async function handleSignin(data: SignInFormValues) {
    console.log(data)

    setValue('email', '')
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleSignin)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input {...field} placeholder="name@example.com" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input {...field} placeholder="sua_senha" type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isSubmitting}
          className="w-full bg-violet-700 hover:bg-violet-700/80"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Entrar
        </Button>
      </form>
    </Form>
  )
}
