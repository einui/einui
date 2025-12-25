"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const GlassSelect = SelectPrimitive.Root

const GlassSelectGroup = SelectPrimitive.Group

const GlassSelectValue = SelectPrimitive.Value

const GlassSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between gap-2 rounded-xl px-4 py-2 text-sm",
      "bg-white/10 backdrop-blur-xl border border-white/20",
      "text-white placeholder:text-white/40",
      "shadow-[0_4px_16px_rgba(0,0,0,0.2)]",
      "transition-all duration-300",
      "focus:outline-none focus:border-white/40 focus:bg-white/15",
      "focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-0",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 text-white/60" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
GlassSelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const GlassSelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4 text-white/60" />
  </SelectPrimitive.ScrollUpButton>
))
GlassSelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const GlassSelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4 text-white/60" />
  </SelectPrimitive.ScrollDownButton>
))
GlassSelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const GlassSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl",
        "bg-white/10 backdrop-blur-2xl border border-white/20",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <GlassSelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <GlassSelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
GlassSelectContent.displayName = SelectPrimitive.Content.displayName

const GlassSelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-white/60", className)}
    {...props}
  />
))
GlassSelectLabel.displayName = SelectPrimitive.Label.displayName

const GlassSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-lg py-2 pl-8 pr-2 text-sm",
      "text-white/80 outline-none",
      "focus:bg-white/10 focus:text-white",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "transition-colors duration-150",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-cyan-400" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
GlassSelectItem.displayName = SelectPrimitive.Item.displayName

const GlassSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-white/10", className)} {...props} />
))
GlassSelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  GlassSelect,
  GlassSelectGroup,
  GlassSelectValue,
  GlassSelectTrigger,
  GlassSelectContent,
  GlassSelectLabel,
  GlassSelectItem,
  GlassSelectSeparator,
  GlassSelectScrollUpButton,
  GlassSelectScrollDownButton,
}
