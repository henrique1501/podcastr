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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const selectPlaylistFormSchema = z.object({
  playlistId: z.string({
    required_error: 'Selecione uma playlist para prosseguir.',
  }),
})

type SelectPlaylistFormValues = z.infer<typeof selectPlaylistFormSchema>

interface SelectPlayListDialogProps {
  episodeId: string
  children: ReactNode
}

export function SelectPlayListDialog({
  episodeId,
  children,
}: SelectPlayListDialogProps) {
  const form = useForm<SelectPlaylistFormValues>({
    resolver: zodResolver(selectPlaylistFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form

  async function handleCreatePlaylist(data: SelectPlaylistFormValues) {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })

    console.log({ playlistId: data.playlistId, episodeId })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicione este episódio a uma playlist</DialogTitle>
          <DialogDescription>
            Você pode organizar seus episódios favoritos para ouvi-los mais
            tarde.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(handleCreatePlaylist)}
            className="space-y-3"
          >
            <FormField
              control={form.control}
              name="playlistId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Playlist</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma playlist" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="back-end">Back-end</SelectItem>
                        <SelectItem value="front-end">Front-end</SelectItem>
                        <SelectItem value="figma">Figma</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isSubmitting}
              className="w-full bg-violet-700 hover:bg-violet-700/80"
            >
              {isSubmitting && <Loader2 className="animate-spin h-5 w-5" />}
              Adicionar episódio
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
