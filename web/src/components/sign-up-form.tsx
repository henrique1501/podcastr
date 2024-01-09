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

const signUpFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'first name must have at least 3 characters' }),
  lastName: z.string().optional(),
  email: z.string().email('Provide an valid e-mail'),
  password: z
    .string()
    .min(6, { message: 'password must have at least 6 characters' }),
})

type SignUpFormValues = z.infer<typeof signUpFormSchema>

export function SignUpForm() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onChange',
  })

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = form

  async function handleSignUp(data: SignUpFormValues) {
    console.log(data)

    setValue('email', '')
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primeiro Nome</FormLabel>
              <FormControl>
                <Input {...field} placeholder="jhon" className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Último Nome (opcional)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="jhon" className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
