import { useId } from 'react'

export type FaqItem = {
  question: string
  answer: string
}

type FaqAccordionProps = {
  /** Anchor id for deep links (optional); heading id is derived when set */
  id?: string
  heading: string
  description?: string
  items: readonly FaqItem[]
  /** Merges with default section layout (width, spacing) */
  className?: string
}

export function FaqAccordion({ id, heading, description, items, className = '' }: FaqAccordionProps) {
  const autoId = useId()
  const headingId = id ? `${id}-heading` : `${autoId}-heading`

  return (
    <section
      id={id}
      className={`mt-16 md:mt-24 max-w-7xl mx-auto w-full font-['Poppins'] ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="text-center mb-10">
        <h2 id={headingId} className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          {heading}
        </h2>
        {description ? <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p> : null}
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-brand-olive/25 bg-white shadow-md shadow-brand-forest/5 open:shadow-lg open:border-brand-olive/40 transition-shadow"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-brand-forest marker:content-none [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-olive/30 bg-brand-sage/20 text-brand-forest transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <div className="border-t border-brand-olive/15 px-5 pb-5 pt-3 text-sm md:text-[15px] text-gray-600 leading-relaxed text-pretty">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
