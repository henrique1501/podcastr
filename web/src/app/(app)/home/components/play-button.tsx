import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const playButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full h-8 w-8 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-violet-700 hover:bg-violet-700/80',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof playButtonVariants> {
  asChild?: boolean
}

const PlayButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(playButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

PlayButton.displayName = 'PlayButton'

export { PlayButton, playButtonVariants }
