'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const addPlaylistFormSchema = z.object({
  name: z.string().min(3, {
    message: 'O nome da playlist deve conter pelo menos 3 caracteres.',
  }),
  description: z.string().min(1, {
    message: 'A descrição da playlist é obrigatória.',
  }),
})

type AddPlaylistFormValues = z.infer<typeof addPlaylistFormSchema>

interface AddPlaylistDialogProps {
  children: ReactNode
}

export function AddPlaylistDialog({ children }: AddPlaylistDialogProps) {
  const form = useForm<AddPlaylistFormValues>({
    resolver: zodResolver(addPlaylistFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form

  async function handleCreatePlaylist(data: AddPlaylistFormValues) {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })

    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crie uma nova playlist</DialogTitle>
          <DialogDescription>
            Ao criar uma playlist você pode categorizar os seus episódios
            preferidos para econtra-los mais rapidamente.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(handleCreatePlaylist)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="back-end..."
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormDescription>
                    Digite um nome único para a sua playlist.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="descrição da minha playlist"
                    />
                  </FormControl>
                  <FormDescription>
                    Adicione uma descrição a sua playlist.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isSubmitting}
              className="w-full bg-violet-700 hover:bg-violet-700/80"
            >
              {isSubmitting && <Loader2 className="animate-spin h-5 w-5" />}
              Criar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
