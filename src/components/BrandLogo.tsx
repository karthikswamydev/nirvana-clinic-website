const EMBLEM_SRC = '/brand/nirvana-emblem.png'

type BrandLogoProps = {
  /** Round mark for header / compact placements (default). */
  variant?: 'emblem' | 'card'
  className?: string
  /** Emblem frame size (Tailwind size class or arbitrary). */
  emblemClassName?: string
}

export function BrandLogo({ variant = 'emblem', className = '', emblemClassName = 'h-14 w-14 sm:h-16 sm:w-16' }: BrandLogoProps) {
  if (variant === 'card') {
    return (
      <img
        src={EMBLEM_SRC}
        alt="Nirvana Integrated Clinic"
        className={`h-auto w-full max-w-[min(100%,420px)] object-contain ${className}`}
        width={700}
        height={437}
        decoding="async"
      />
    )
  }

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-brand-forest/35 bg-white p-1 shadow-sm ${emblemClassName} ${className}`}
    >
      <img
        src={EMBLEM_SRC}
        alt=""
        className="h-full w-full object-contain object-center select-none"
        width={1400}
        height={874}
        decoding="async"
        aria-hidden
      />
    </div>
  )
}
