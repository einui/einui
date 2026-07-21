interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-white tracking-tight">{title}</h1>
      <p className="mt-3 text-lg text-white/60 max-w-2xl">{description}</p>
      <div className="mt-6 h-px bg-linear-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50" />
    </div>
  )
}
