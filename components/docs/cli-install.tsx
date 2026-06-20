"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"

const CLI_INSTALL_COMMAND = "npx shadcn@latest add"
const COPY_FEEDBACK_DURATION = 2000

interface CLIInstallProps {
  componentName: string
}

function getInstallCommand(componentName: string) {
  return `${CLI_INSTALL_COMMAND} @einui/${componentName}`
}

export function CLIInstall({ componentName }: CLIInstallProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const command = useMemo(
    () => getInstallCommand(componentName),
    [componentName]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      timeoutRef.current = window.setTimeout(
        () => setCopied(false),
        COPY_FEEDBACK_DURATION
      )
    } catch (error) {
      console.error("Failed to copy install command:", error)
    }
  }, [command])

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Terminal className="h-4 w-4 text-cyan-400" />
        <span className="text-sm font-medium text-white/80">Installation</span>
      </div>
      <div className="relative group">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm px-4 py-3 font-mono text-sm text-white/70 overflow-x-auto">
          <span className="text-cyan-400 select-none">$</span>
          <code className="flex-1">{command}</code>
          <button
            type="button"
            onClick={copyToClipboard}
            className="shrink-0 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
            aria-label="Copy install command"
            aria-pressed={copied}
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
