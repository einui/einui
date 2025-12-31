"use client"

import React, { useState, useCallback } from "react"
import { Copy, Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyButtonProps {
  text: string
  label?: string
  language?: string
  className?: string
  showLabel?: boolean
}

/**
 * Copy Button Component
 * Allows users to copy text with visual feedback
 */
export function CopyButton({
  text,
  label,
  language,
  className,
  showLabel = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      setError(false)
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 focus:ring-offset-slate-950/40 active:scale-95",
        copied
          ? "bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20 border border-emerald-500/30"
          : error
            ? "bg-red-500/20 text-red-400 border border-red-500/30"
            : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10 hover:border-white/20",
        className
      )}
      title={copied ? "Copied!" : error ? "Failed to copy" : "Copy to clipboard"}
      aria-pressed={copied}
    >
      {copied ? (
        <Check className="h-4 w-4 shrink-0" />
      ) : error ? (
        <AlertCircle className="h-4 w-4 shrink-0" />
      ) : (
        <Copy className="h-4 w-4 shrink-0" />
      )}
      {showLabel && (
        <span className="text-xs font-medium">
          {copied ? "Copied" : error ? "Failed" : label || "Copy"}
        </span>
      )}
    </button>
  )
}
