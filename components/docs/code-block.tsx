"use client"

import { useState } from "react"
import { Check, Copy, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { StyledCode } from "./styled-code"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  className?: string
  highlightLines?: number[]
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = true,
  className,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setCopyFeedback(true)
      setTimeout(() => setCopied(false), 2000)
      setTimeout(() => setCopyFeedback(false), 3000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const downloadAsFile = () => {
    const element = document.createElement("a")
    const file = new Blob([code], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = filename || `code.${getFileExtension(language)}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const getFileExtension = (lang: string) => {
    const extensions: Record<string, string> = {
      tsx: "tsx",
      jsx: "jsx",
      ts: "ts",
      js: "js",
      python: "py",
      py: "py",
      bash: "sh",
      shell: "sh",
      html: "html",
      css: "css",
      json: "json",
      yaml: "yml",
      sql: "sql",
    }
    return extensions[lang] || "txt"
  }

  return (
    <div className={cn("relative group w-full", className)}>
      {/* Animated gradient background */}
      <div
        className="absolute -inset-1 rounded-xl bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-lg opacity-40 group-hover:opacity-60 transition-all duration-300"
        aria-hidden="true"
      />

      {/* Main container */}
      <div className="relative rounded-xl border border-white/10 bg-linear-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
        {/* Header with language tag and actions */}
        <div className="flex items-center justify-between border-b border-white/10 bg-linear-to-r from-white/5 to-white/2 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1.5 rounded-lg bg-linear-to-r from-blue-500/30 to-cyan-500/20 text-xs font-bold text-cyan-300 uppercase tracking-widest border border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
              role="status"
              aria-label={`Language: ${language}`}
            >
              {language}
            </span>
            {filename && (
              <span className="text-xs text-white/50 font-mono font-medium hidden sm:inline px-2 py-1 rounded bg-white/5 border border-white/5">
                {filename}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={downloadAsFile}
              className="rounded-lg p-2.5 text-white/40 transition-all hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 focus:ring-offset-slate-950/40 active:scale-95"
              aria-label="Download code"
              title="Download code file"
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              onClick={copyToClipboard}
              className={cn(
                "rounded-lg p-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 focus:ring-offset-slate-950/40 active:scale-95",
                copied
                  ? "bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20 border border-emerald-500/30"
                  : "text-white/40 hover:bg-white/10 hover:text-white hover:border hover:border-white/20"
              )}
              aria-label={copied ? "Code copied" : "Copy code"}
              aria-pressed={copied}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Code content */}
        <div className="relative overflow-hidden">
          <pre className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent px-6 py-5">
            <StyledCode
              code={code}
              language={language}
              showLineNumbers={showLineNumbers}
              highlightLines={highlightLines}
            />
          </pre>
        </div>

        {/* Copy feedback toast */}
        {copyFeedback && (
          <div
            className="absolute bottom-4 right-4 px-4 py-2.5 bg-linear-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium rounded-lg shadow-lg shadow-emerald-500/30 animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2"
            role="status"
            aria-live="polite"
          >
            <Check className="h-4 w-4" />
            Copied!
          </div>
        )}
      </div>
    </div>
  )
}
