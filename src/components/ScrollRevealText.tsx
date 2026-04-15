import { useScroll, useTransform, motion } from 'motion/react'
import { useRef } from 'react'

type ScrollRevealTextProps = {
  /** Replaces default `text-brand-forest` for dark backdrops */
  textClassName?: string
}

export function ScrollRevealText({ textClassName }: ScrollRevealTextProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.3"]
  })

  const text = "Our passionate team blends ancient naturopathic wisdom with modern therapies, guided by a profound belief in the healing powers of nature. From acupuncture to yoga, we harness nature's gifts to unlock the body's innate ability to heal, promoting a lifestyle that embraces the principles of self-healing. Our mission is to guide individuals towards holistic, nourishing lifestyles, making vibrant living not just a goal, but a way of life."

  const words = text.split(' ')

  return (
    <div ref={targetRef} className="py-10">
      <p
        className={`text-balance leading-[1.15] font-medium text-center text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto ${textClassName ?? "text-brand-forest"}`}
      >
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)

          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          )
        })}
      </p>
    </div>
  )
}

function Word({ children, progress, range }: { children: string; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const y = useTransform(progress, range, [14, 0])

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.35em] will-change-[opacity,transform]"
    >
      {children}
    </motion.span>
  )
}
