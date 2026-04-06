import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

const pillars = [
  { title: 'Professional Doctors', description: 'Experienced physicians dedicated to natural, patient-centred care.' },
  { title: 'Natural Diagnosis', description: 'Assessment that respects the body’s signals and holistic patterns.' },
  { title: 'Holistic Care', description: 'Therapies and lifestyle guidance that support mind, body, and vitality together.' },
  { title: 'Finest service', description: 'Attentive support and a healing environment at every step of your journey.' },
]

const easeReveal = [0.16, 1, 0.3, 1] as const

const Service = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const servicesHeadingY = useTransform(scrollYProgress, [0, 1], [0, -26])
  const servicesContentY = useTransform(scrollYProgress, [0, 1], [0, 44])

  return (
    <section ref={sectionRef} id="services" className="scroll-mt-24">
      <motion.div className="text-center space-y-4 py-12" style={{ y: servicesHeadingY }}>
        <motion.div
          className="inline-block"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeReveal }}
          viewport={{ once: true, margin: '0px 0px -10% 0px', amount: 0.2 }}
        >
          <p className="text-sm md:text-base font-bold tracking-widest uppercase bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent px-6 py-2 rounded-full border-2 border-brand-olive/35 backdrop-blur-sm shadow-lg">
            Why choose us
          </p>
        </motion.div>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent font-['Poppins']"
          initial={reduceMotion ? false : { opacity: 0, y: 48 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeReveal }}
          viewport={{ once: true, margin: '0px 0px -10% 0px', amount: 0.2 }}
        >
          Wellness Through <br className="hidden sm:block" />
          <span className="bg-linear-to-r from-brand-forest via-brand-olive to-brand-sage bg-clip-text text-transparent">Nature&apos;s Healing</span>
        </motion.h2>
        <motion.img
          className="max-w-[300px] h-auto object-contain mx-auto my-4"
          src="/brand/divider.png"
          alt=""
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14, ease: easeReveal }}
          viewport={{ once: true, margin: '0px 0px -10% 0px', amount: 0.15 }}
        />
      </motion.div>

      <motion.div className="max-w-7xl mx-auto px-4 pb-16" style={{ y: servicesContentY }}>
        <motion.p
          className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto font-['Poppins'] leading-relaxed text-center mb-10"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeReveal }}
          viewport={{ once: true, margin: '0px 0px -10% 0px', amount: 0.2 }}
        >
          At our center, we offer a unique blend of naturopathic therapies inspired by nature, including acupuncture, yoga, massage therapy, hydrotherapy, and more. With a focus on restoring balance and vitality, our holistic approach honors the body&apos;s innate ability to heal itself.
        </motion.p>
        <motion.p
          className="text-center text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-brand-forest/90 font-['Poppins'] mb-8 px-4 py-3 rounded-lg bg-brand-forest text-white shadow-md"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: easeReveal }}
          viewport={{ once: true, margin: '0px 0px -10% 0px', amount: 0.2 }}
        >
          Integrated Naturopathy · Yoga · Acupuncture · Ozone Therapy
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-brand-olive/40 bg-white/60 backdrop-blur-sm p-6 shadow-lg shadow-brand-forest/5 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeReveal }}
              viewport={{ once: true, margin: '0px 0px -12% 0px', amount: 0.15 }}
            >
              <h3 className="text-lg font-semibold text-brand-forest font-['Poppins'] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 font-['Poppins'] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Service
