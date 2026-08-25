export function CodeSnippet({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto bg-card p-4 text-sm leading-relaxed ring-1 ring-foreground/10">
      <code>{children}</code>
    </pre>
  )
}
