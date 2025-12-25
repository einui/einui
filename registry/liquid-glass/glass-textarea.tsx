"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface GlassTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  glowOnFocus?: boolean
  label?: string
  error?: string
}

const GlassTextarea = React.forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
  ({ className, glowOnFocus = true, label, error, id, ...props }, ref) => {
    const textareaId = id || "glass-textarea-id"
    const errorId = `${textareaId}-error`

    return (
      <div className="relative w-full">
        {label && (
          <motion.label
            htmlFor={textareaId}
            className="block text-sm font-medium text-white/80 mb-2"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        )}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", visualDuration: 0.3, bounce: 0.2 }}
        >
          {glowOnFocus && (
            <motion.div
              className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 blur-md group-focus-within:from-cyan-500/30 group-focus-within:via-blue-500/30 group-focus-within:to-purple-500/30 transition-all duration-300"
              aria-hidden="true"
            />
          )}
          <textarea
            id={textareaId}
            className={cn(
              "relative flex min-h-[120px] w-full rounded-xl px-4 py-3 text-sm",
              "bg-white/10 backdrop-blur-xl border border-white/20",
              "text-white placeholder:text-white/40",
              "shadow-[0_4px_16px_rgba(0,0,0,0.2)]",
              "transition-all duration-300 resize-none",
              "focus:outline-none focus:border-white/40 focus:bg-white/15",
              "focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-0",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-400/50 focus:border-red-400/70 focus:ring-red-400/30",
              className,
            )}
            ref={ref}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
        </motion.div>
        {error && (
          <motion.p
            id={errorId}
            className="mt-2 text-sm text-red-400"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  },
)
GlassTextarea.displayName = "GlassTextarea"

export { GlassTextarea }
