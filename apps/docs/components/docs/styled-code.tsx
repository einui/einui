"use client"

/**
 * Styled Code Renderer
 * Component to render syntax-highlighted code with proper styling
 */

import React, { ReactElement } from "react"
import SyntaxHighlighter, { type Token, type TokenType } from "@/lib/syntax-highlighter"

interface StyledCodeProps {
  code: string
  language?: string
  lineNumber?: number
  highlighted?: boolean
}

/**
 * Get the CSS class for a token type
 */
export function getTokenClassName(type: TokenType): string {
  const classes: Record<TokenType, string> = {
    keyword: "text-pink-400 font-semibold",
    string: "text-emerald-400",
    number: "text-cyan-400",
    comment: "text-slate-500 italic",
    function: "text-blue-400 font-semibold",
    operator: "text-yellow-400",
    tag: "text-orange-400 font-semibold",
    attribute: "text-purple-400",
    punctuation: "text-white/70",
    builtin: "text-blue-300 font-semibold",
    text: "text-white/85",
  }
  return classes[type] || classes.text
}

/**
 * Render a single token with syntax highlighting
 */
export function StyledToken({ token }: { token: Token }): ReactElement {
  return (
    <span className={getTokenClassName(token.type)}>
      {token.value}
    </span>
  )
}

/**
 * Render a line of code with syntax highlighting
 */
export function StyledCodeLine({
  code,
  language = "text",
  lineNumber,
  highlighted = false,
}: StyledCodeProps): ReactElement {
  const tokens = SyntaxHighlighter.highlight(code || "\u00A0", language)

  return (
    <div
      className={`flex gap-3 transition-colors duration-200 ${
        highlighted ? "bg-blue-500/20 border-l-2 border-blue-500/50 pl-2 ml-0" : ""
      }`}
    >
      {lineNumber !== undefined && (
        <span
          className="inline-flex w-6 select-none text-right text-white/30 font-mono text-xs shrink-0"
          aria-hidden="true"
        >
          {String(lineNumber).padStart(2, " ")}
        </span>
      )}
      <span className="flex-1 font-mono text-sm leading-relaxed">
        {tokens.map((token: Token, i: number) => (
          <StyledToken key={i} token={token} />
        ))}
      </span>
    </div>
  )
}

/**
 * Render multiple lines with syntax highlighting
 */
export function StyledCode({
  code,
  language = "text",
  showLineNumbers = true,
  highlightLines = [],
}: {
  code: string
  language?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
}): ReactElement {
  const lines = code.split("\n")

  return (
    <div className="flex flex-col">
      {lines.map((line, index) => {
        const lineNum = index + 1
        return (
          <StyledCodeLine
            key={index}
            code={line}
            language={language}
            lineNumber={showLineNumbers ? lineNum : undefined}
            highlighted={highlightLines.includes(lineNum)}
          />
        )
      })}
    </div>
  )
}
