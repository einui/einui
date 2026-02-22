"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const GlassSheet = SheetPrimitive.Root

const GlassSheetTrigger = SheetPrimitive.Trigger

const GlassSheetClose = SheetPrimitive.Close

const GlassSheetPortal = SheetPrimitive.Portal

const GlassSheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
))
GlassSheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  cn(
    "fixed z-50 gap-4 p-6",
    "bg-white/10 backdrop-blur-2xl border border-white/20",
    "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
    "transition ease-in-out duration-300",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "before:absolute before:inset-0",
    "before:bg-gradient-to-b before:from-white/15 before:to-transparent before:pointer-events-none",
  ),
  {
    variants: {
      side: {
        top: cn(
          "inset-x-0 top-0 border-b rounded-b-2xl",
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        ),
        bottom: cn(
          "inset-x-0 bottom-0 border-t rounded-t-2xl",
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        ),
        left: cn(
          "inset-y-0 left-0 h-full w-3/4 border-r rounded-r-2xl sm:max-w-sm",
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        ),
        right: cn(
          "inset-y-0 right-0 h-full w-3/4 border-l rounded-l-2xl sm:max-w-sm",
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        ),
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
)

interface GlassSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const GlassSheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, GlassSheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <GlassSheetPortal>
      <GlassSheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        <div className="relative z-10">{children}</div>
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-lg p-1 text-white/60 transition-all hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </GlassSheetPortal>
  ),
)
GlassSheetContent.displayName = SheetPrimitive.Content.displayName

const GlassSheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2 text-left", className)} {...props} />
)
GlassSheetHeader.displayName = "GlassSheetHeader"

const GlassSheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-row justify-end gap-2", className)} {...props} />
)
GlassSheetFooter.displayName = "GlassSheetFooter"

const GlassSheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-white", className)} {...props} />
))
GlassSheetTitle.displayName = SheetPrimitive.Title.displayName

const GlassSheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-white/60", className)} {...props} />
))
GlassSheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  GlassSheet,
  GlassSheetPortal,
  GlassSheetOverlay,
  GlassSheetTrigger,
  GlassSheetClose,
  GlassSheetContent,
  GlassSheetHeader,
  GlassSheetFooter,
  GlassSheetTitle,
  GlassSheetDescription,
}
