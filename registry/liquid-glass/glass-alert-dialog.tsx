"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cn } from "@/lib/utils"
import { glassButtonVariants } from "./glass-button"

const GlassAlertDialog = AlertDialogPrimitive.Root

const GlassAlertDialogTrigger = AlertDialogPrimitive.Trigger

const GlassAlertDialogPortal = AlertDialogPrimitive.Portal

const GlassAlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
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
GlassAlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName


const GlassAlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <GlassAlertDialogPortal>
    <GlassAlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2",
        "rounded-2xl border border-white/20 p-6",
        "bg-white/10 backdrop-blur-2xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
        "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        // Glass highlight
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-b before:from-white/15 before:to-transparent before:pointer-events-none",
        className,
      )}
      {...props}
    />
  </GlassAlertDialogPortal>
))
GlassAlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const GlassAlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("relative z-10 flex flex-col gap-2 text-center sm:text-left", className)} {...props} />
)
GlassAlertDialogHeader.displayName = "GlassAlertDialogHeader"

const GlassAlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("relative z-10 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6", className)}
    {...props}
  />
)
GlassAlertDialogFooter.displayName = "GlassAlertDialogFooter"

const GlassAlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-white", className)} {...props} />
))
GlassAlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const GlassAlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-white/60", className)} {...props} />
))
GlassAlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

const GlassAlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(glassButtonVariants({ variant: "primary" }), className)}
    {...props}
  />
))
GlassAlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const GlassAlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(glassButtonVariants({ variant: "outline" }), className)}
    {...props}
  />
))
GlassAlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  GlassAlertDialog,
  GlassAlertDialogPortal,
  GlassAlertDialogOverlay,
  GlassAlertDialogTrigger,
  GlassAlertDialogContent,
  GlassAlertDialogHeader,
  GlassAlertDialogFooter,
  GlassAlertDialogTitle,
  GlassAlertDialogDescription,
  GlassAlertDialogAction,
  GlassAlertDialogCancel,
}
