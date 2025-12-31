/**
 * Syntax Highlighting Utilities
 * Lightweight syntax highlighting for code blocks
 */

export type TokenType =
  | "keyword"
  | "string"
  | "number"
  | "comment"
  | "function"
  | "operator"
  | "tag"
  | "attribute"
  | "punctuation"
  | "builtin"
  | "text"

export interface Token {
  type: TokenType
  value: string
}

const KEYWORDS = {
  js: [
    "abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch",
    "char", "class", "const", "continue", "debugger", "default", "delete", "do",
    "double", "else", "enum", "eval", "export", "extends", "false", "final",
    "finally", "float", "for", "function", "goto", "if", "implements", "import",
    "in", "instanceof", "int", "interface", "let", "long", "native", "new",
    "null", "package", "private", "protected", "public", "return", "short", "static",
    "super", "switch", "synchronized", "this", "throw", "throws", "transient",
    "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield",
  ],
  py: [
    "False", "None", "True", "and", "as", "assert", "async", "await", "break",
    "class", "continue", "def", "del", "elif", "else", "except", "finally",
    "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal",
    "not", "or", "pass", "raise", "return", "try", "while", "with", "yield",
  ],
  html: [
    "html", "head", "body", "div", "span", "p", "a", "img", "input", "button",
    "form", "table", "tr", "td", "ul", "li", "h1", "h2", "h3", "h4", "h5", "h6",
    "class", "id", "style", "src", "href", "type", "name", "value", "placeholder",
  ],
}

class SyntaxHighlighter {
  static highlightJS(code: string): Token[] {
    const tokens: Token[] = []
    let i = 0

    while (i < code.length) {
      // Comments
      if (code.substr(i, 2) === "//") {
        const end = code.indexOf("\n", i)
        const commentEnd = end === -1 ? code.length : end
        tokens.push({
          type: "comment",
          value: code.substring(i, commentEnd),
        })
        i = commentEnd
        continue
      }

      if (code.substr(i, 2) === "/*") {
        const end = code.indexOf("*/", i)
        const commentEnd = end === -1 ? code.length : end + 2
        tokens.push({
          type: "comment",
          value: code.substring(i, commentEnd),
        })
        i = commentEnd
        continue
      }

      // Strings
      if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
        const quote = code[i]
        let j = i + 1
        while (j < code.length) {
          if (code[j] === quote && code[j - 1] !== "\\") break
          j++
        }
        tokens.push({
          type: "string",
          value: code.substring(i, j + 1),
        })
        i = j + 1
        continue
      }

      // Numbers
      if (/\d/.test(code[i])) {
        let j = i
        while (j < code.length && /[\d.xXoObBeE]/.test(code[j])) j++
        tokens.push({
          type: "number",
          value: code.substring(i, j),
        })
        i = j
        continue
      }

      // Keywords and identifiers
      if (/[a-zA-Z_$]/.test(code[i])) {
        let j = i
        while (j < code.length && /[a-zA-Z0-9_$]/.test(code[j])) j++
        const word = code.substring(i, j)
        const isKeyword = KEYWORDS.js.includes(word)

        if (isKeyword) {
          tokens.push({ type: "keyword", value: word })
        } else if (code[j] === "(") {
          tokens.push({ type: "function", value: word })
        } else {
          tokens.push({ type: "text", value: word })
        }
        i = j
        continue
      }

      // Operators
      if (/[+\-*/%=<>!&|^~?:]/.test(code[i])) {
        let j = i + 1
        while (j < code.length && /[+\-*/%=<>!&|^~?:]/.test(code[j])) j++
        tokens.push({
          type: "operator",
          value: code.substring(i, j),
        })
        i = j
        continue
      }

      // Punctuation
      if (/[{}()\[\];,.]/.test(code[i])) {
        tokens.push({
          type: "punctuation",
          value: code[i],
        })
        i++
        continue
      }

      // Whitespace
      if (/\s/.test(code[i])) {
        let j = i
        while (j < code.length && /\s/.test(code[j])) j++
        tokens.push({
          type: "text",
          value: code.substring(i, j),
        })
        i = j
        continue
      }

      // Default
      tokens.push({ type: "text", value: code[i] })
      i++
    }

    return tokens
  }

  static highlightPython(code: string): Token[] {
    const tokens: Token[] = []
    let i = 0

    while (i < code.length) {
      // Comments
      if (code[i] === "#") {
        const end = code.indexOf("\n", i)
        const commentEnd = end === -1 ? code.length : end
        tokens.push({
          type: "comment",
          value: code.substring(i, commentEnd),
        })
        i = commentEnd
        continue
      }

      // Strings
      if (
        code[i] === '"' ||
        code[i] === "'" ||
        code.substr(i, 3) === '"""' ||
        code.substr(i, 3) === "'''"
      ) {
        let quote = code[i]
        let j = i + 1
        if (code.substr(i, 3) === '"""' || code.substr(i, 3) === "'''") {
          quote = code.substr(i, 3)
          j = i + 3
        }
        while (j < code.length) {
          if (code.substr(j, quote.length) === quote) break
          j++
        }
        tokens.push({
          type: "string",
          value: code.substring(i, j + quote.length),
        })
        i = j + quote.length
        continue
      }

      // Numbers
      if (/\d/.test(code[i])) {
        let j = i
        while (j < code.length && /[\d.jJ]/.test(code[j])) j++
        tokens.push({
          type: "number",
          value: code.substring(i, j),
        })
        i = j
        continue
      }

      // Keywords and identifiers
      if (/[a-zA-Z_]/.test(code[i])) {
        let j = i
        while (j < code.length && /[a-zA-Z0-9_]/.test(code[j])) j++
        const word = code.substring(i, j)
        const isKeyword = KEYWORDS.py.includes(word)

        if (isKeyword) {
          tokens.push({ type: "keyword", value: word })
        } else if (code[j] === "(") {
          tokens.push({ type: "function", value: word })
        } else {
          tokens.push({ type: "text", value: word })
        }
        i = j
        continue
      }

      // Operators
      if (/[+\-*/%=<>!&|^~]/.test(code[i])) {
        let j = i + 1
        while (j < code.length && /[+\-*/%=<>!&|^~]/.test(code[j])) j++
        tokens.push({
          type: "operator",
          value: code.substring(i, j),
        })
        i = j
        continue
      }

      // Punctuation
      if (/[{}()\[\]:,.]/.test(code[i])) {
        tokens.push({
          type: "punctuation",
          value: code[i],
        })
        i++
        continue
      }

      // Whitespace
      if (/\s/.test(code[i])) {
        let j = i
        while (j < code.length && /\s/.test(code[j])) j++
        tokens.push({
          type: "text",
          value: code.substring(i, j),
        })
        i = j
        continue
      }

      tokens.push({ type: "text", value: code[i] })
      i++
    }

    return tokens
  }

  static highlightHTML(code: string): Token[] {
    const tokens: Token[] = []
    let i = 0

    while (i < code.length) {
      // Comments
      if (code.substr(i, 4) === "<!--") {
        const end = code.indexOf("-->", i)
        const commentEnd = end === -1 ? code.length : end + 3
        tokens.push({
          type: "comment",
          value: code.substring(i, commentEnd),
        })
        i = commentEnd
        continue
      }

      // Tags
      if (code[i] === "<") {
        let j = i + 1
        while (j < code.length && code[j] !== ">") j++
        tokens.push({
          type: "tag",
          value: code.substring(i, j + 1),
        })
        i = j + 1
        continue
      }

      // Strings
      if (code[i] === '"' || code[i] === "'") {
        const quote = code[i]
        let j = i + 1
        while (j < code.length && code[j] !== quote) j++
        tokens.push({
          type: "string",
          value: code.substring(i, j + 1),
        })
        i = j + 1
        continue
      }

      // Default text
      let j = i
      while (j < code.length && code[j] !== "<") j++
      if (j > i) {
        tokens.push({
          type: "text",
          value: code.substring(i, j),
        })
        i = j
      } else {
        i++
      }
    }

    return tokens
  }

  static highlight(code: string, language: string): Token[] {
    const lang = language.toLowerCase()

    if (lang === "python" || lang === "py") {
      return this.highlightPython(code)
    } else if (lang === "html") {
      return this.highlightHTML(code)
    } else if (
      lang === "javascript" ||
      lang === "js" ||
      lang === "typescript" ||
      lang === "ts" ||
      lang === "jsx" ||
      lang === "tsx"
    ) {
      return this.highlightJS(code)
    } else {
      return [{ type: "text", value: code }]
    }
  }
}

export default SyntaxHighlighter
