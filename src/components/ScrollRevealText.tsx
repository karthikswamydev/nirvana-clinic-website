import { useScroll, useTransform, motion } from 'motion/react'
import { useRef } from 'react'

export function ScrollRevealText() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.3"]
  })

  const text = "At Nirvana Integrated Clinic, we redefine healthcare through thoughtful integration and clinical precision. We believe true wellness is achieved not by treating isolated symptoms, but by harmonizing the body, mind, and lifestyle as one interconnected whole.Our approach blends evidence-based natural therapies with modern medical insight to craft deeply personalized treatment experiences. Every care plan is designed with intention — addressing root causes, restoring balance, and delivering meaningful, lasting transformation.Because exceptional care is not about doing more.It is about doing what is right — with clarity, expertise, and compassion."

  const words = text.split(' ')

  return (
    <div ref={targetRef} className="py-10">
      <p className="text-balance leading-[1.15] font-medium text-green-800 text-center text-2xl md:text-3xl lg:text-4xl font-['Coolvetica'] max-w-5xl mx-auto">
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
  const opacity = useTransform(progress, range, [0.3, 1])
  const y = useTransform(progress, range, [4, 0])

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.35em] will-change-[opacity,transform]"
    >
      {children}
    </motion.span>
  )
}
