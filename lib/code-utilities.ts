/**
 * Code Block Utilities
 * Helpers for syntax highlighting, language detection, and code formatting
 * Based on Context7 best practices from highlight.js and code-hike libraries
 */

/**
 * Language configuration with file extensions and detection patterns
 */
export const LANGUAGE_MAP: Record<string, string> = {
  ts: "TypeScript",
  tsx: "TypeScript JSX",
  js: "JavaScript",
  jsx: "JavaScript JSX",
  py: "Python",
  python: "Python",
  bash: "Bash",
  shell: "Shell",
  sh: "Shell",
  html: "HTML",
  css: "CSS",
  json: "JSON",
  yaml: "YAML",
  yml: "YAML",
  sql: "SQL",
  rb: "Ruby",
  go: "Go",
  rs: "Rust",
  java: "Java",
  cpp: "C++",
  c: "C",
  md: "Markdown",
  xml: "XML",
}

/**
 * Get the full language name from a language code
 */
export function getLanguageName(lang: string): string {
  return LANGUAGE_MAP[lang.toLowerCase()] || lang
}

/**
 * Detect language from code content
 * Uses heuristic patterns to detect programming language
 */
export function detectLanguage(code: string): string {
  const firstLine = code.split("\n")[0]

  // Shebang detection
  if (firstLine.startsWith("#!")) {
    if (firstLine.includes("python")) return "python"
    if (firstLine.includes("bash")) return "bash"
    if (firstLine.includes("sh")) return "bash"
  }

  // Pattern-based detection
  if (code.includes("<?php") || code.includes("?>")) return "php"
  if (code.includes("import React") || code.includes("from 'react'")) return "tsx"
  if (code.includes("def ") && code.includes(":")) return "python"
  if (code.includes("function ") || code.includes("const ") || code.includes("let "))
    return "javascript"
  if (code.includes("<html") || code.includes("<!DOCTYPE")) return "html"
  if (code.includes("SELECT ") || code.includes("INSERT INTO")) return "sql"

  return "text"
}

/**
 * Get the file extension for a programming language
 */
export function getFileExtension(language: string): string {
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
    ruby: "rb",
    go: "go",
    rust: "rs",
    java: "java",
    cpp: "cpp",
    c: "c",
    markdown: "md",
    xml: "xml",
  }
  return extensions[language.toLowerCase()] || "txt"
}

/**
 * Count lines in code and return formatted line numbers
 */
export function getLineNumbers(code: string): string[] {
  const lines = code.split("\n")
  const count = lines.length
  const width = Math.max(2, String(count).length)

  return lines.map((_, index) => String(index + 1).padStart(width, " "))
}

/**
 * Highlight specific line ranges in code
 * Returns array of line numbers to highlight
 */
export function parseHighlightLines(highlightSpec: string | number[]): number[] {
  if (Array.isArray(highlightSpec)) {
    return highlightSpec
  }

  // Parse range syntax like "1-3" or "1,3,5"
  const ranges: number[] = []

  highlightSpec.split(",").forEach((part) => {
    const trimmed = part.trim()

    if (trimmed.includes("-")) {
      const [start, end] = trimmed.split("-").map((s) => parseInt(s.trim(), 10))
      for (let i = start; i <= end; i++) {
        ranges.push(i)
      }
    } else {
      ranges.push(parseInt(trimmed, 10))
    }
  })

  return ranges.filter((n) => !isNaN(n))
}

/**
 * Format code with consistent indentation
 */
export function normalizeIndentation(code: string, spaces: number = 2): string {
  const lines = code.split("\n")
  const minIndent = lines.reduce((min, line) => {
    if (!line.trim()) return min
    const indent = line.match(/^\s*/)?.[0].length ?? 0
    return Math.min(min, indent)
  }, Infinity)

  if (minIndent === Infinity || minIndent === 0) {
    return code
  }

  return lines
    .map((line) => (line.trim() ? line.slice(minIndent) : line))
    .join("\n")
    .replace(/^\n+|\n+$/g, "") // Remove leading/trailing empty lines
}

/**
 * Truncate code for previews while preserving complete syntax
 */
export function truncateCode(code: string, maxLines: number = 10): string {
  const lines = code.split("\n")

  if (lines.length <= maxLines) {
    return code
  }

  return lines.slice(0, maxLines).join("\n") + "\n// ... (truncated)"
}

/**
 * Get readable code statistics
 */
export interface CodeStats {
  lineCount: number
  charCount: number
  wordCount: number
  language: string
}

export function getCodeStats(code: string, language?: string): CodeStats {
  return {
    lineCount: code.split("\n").length,
    charCount: code.length,
    wordCount: code.split(/\s+/).length,
    language: language || detectLanguage(code),
  }
}
