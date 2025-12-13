import { type NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export async function GET(request: NextRequest, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params

  try {
    // Try to read the registry item JSON
    const filePath = path.join(process.cwd(), "public", "r", `${name}.json`)
    const content = await readFile(filePath, "utf-8")
    const registryItem = JSON.parse(content)

    // Read the actual component files and include their content
    if (registryItem.files) {
      for (const file of registryItem.files) {
        try {
          const componentPath = path.join(process.cwd(), file.path)
          const componentContent = await readFile(componentPath, "utf-8")
          file.content = componentContent
        } catch {
          // File not found, skip
        }
      }
    }

    return NextResponse.json(registryItem)
  } catch {
    return NextResponse.json({ error: `Registry item "${name}" not found` }, { status: 404 })
  }
}
