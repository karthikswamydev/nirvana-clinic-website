/**
 * Renders body text with **phrase** segments shown as highlighted emphasis.
 */
export function HighlightedBody({ text, className = '' }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const inner = part.slice(2, -2)
          return (
            <mark
              key={i}
              className="bg-brand-sage/70 text-brand-forest font-semibold px-1 rounded-sm not-italic"
            >
              {inner}
            </mark>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </p>
  )
}
