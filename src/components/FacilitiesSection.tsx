import { motion } from 'motion/react'

const easeReveal = [0.16, 1, 0.3, 1] as const

const facilities = [
  {
    title: 'Hydrotherapy & Mud Therapy Units',
    description:
      'Temperature-controlled baths, steam-based options, and earth-based mud applications are brought together in a supervised, clinic-grade setting. Each session is paced to your comfort, with clear guidance on hydration, rest between passes, and how water and mud therapies can support circulation, muscle ease, deeper relaxation, and steadier recovery between visits.',
    image: '/mud-therapy.png',
    imageAlt: 'Hydrotherapy and mud therapy space with natural tones and clinical equipment',
  },
  {
    title: 'Consultation Rooms with Privacy',
    description:
      'Quiet, enclosed rooms are reserved for unhurried conversations, physical assessment when appropriate, and collaborative planning without interruption. Natural light, comfortable seating, and sound-masking help you speak freely while your practitioner documents goals, reviews history, and outlines sensible next steps that respect your pace, preferences, and wider medical care.',
    image: '/treatment-area.png',
    imageAlt: 'Private consultation room arranged for comfortable one-to-one assessment',
  },
  {
    title: 'Dedicated Therapy Rooms',
    description:
      'Each room is set up for massage, acupuncture-style care, or physiotherapy-style sessions with the right table, bolsters, and clear floor space. Surfaces stay uncluttered so attention stays on consent, positioning, and technique—whether you need soft-tissue release, better joint glide, or a paced rehab plan after strain or minor injury.',
    image: '/Therapy-room.png',
    imageAlt: 'Dedicated therapy room with treatment table and calm lighting',
  },
  {
    title: 'Yoga & Rehabilitation Hall',
    description:
      'The hall gives therapeutic yoga and rehabilitation movement room to breathe, with non-slip flooring, prop storage, and sight lines that help instructors cue clearly. Sequences can be adapted for balance, blood pressure, or joint history, and the layout keeps group sessions calm while still allowing quieter coaching along the sides when you need individual attention.',
    image: '/yoga-rehab.png',
    imageAlt: 'Spacious hall set up for therapeutic yoga and guided movement',
  },
  {
    title: 'Clean & Hygienic Treatment Areas',
    description:
      'Linens and hard surfaces are refreshed on a strict turnover rhythm, and wet zones get ventilation checks so heat and humidity stay comfortable rather than clammy. Staff follow hand-hygiene routines, safe handling for oils and herbs, and plain-language briefing before you lie down or enter water, so standards stay predictable from the first visit onward.',
    image: '/treatment-area.png',
    imageAlt: 'Clean, well-lit treatment area prepared for guest sessions',
  },
  {
    title: 'Calm, Healing Environment',
    description:
      'Sage, forest, and warm neutral tones soften corridors and waiting niches so visual noise drops before you reach the treatment floor. Lighting is layered instead of stark, chairs support unhurried waits, and signage stays intuitive for newcomers. The whole flow is meant to feel grounded so your nervous system can settle and your attention can return to breath, body, and the session in front of you.',
    image: '/healing-env.png',
    imageAlt: 'Calm clinic corridor and seating with natural, restorative palette',
  },
]

export function FacilitiesSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-semibold text-gray-900 font-['Poppins']">
            <span className="bg-linear-to-r from-brand-sage to-brand-olive/40 text-brand-forest px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg">
              Our Facilities
            </span>
          </h2>

          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto font-['Poppins'] leading-relaxed">
            Modern infrastructure designed for your comfort and healing
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-sage/60 bg-white/65 backdrop-blur-sm shadow-lg shadow-brand-forest/5"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: easeReveal }}
              viewport={{ once: true, margin: '0px 0px -12% 0px', amount: 0.12 }}
            >
              <div className="relative aspect-4/3 shrink-0 overflow-hidden bg-brand-sage/20">
                <img
                  src={facility.image}
                  alt={facility.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-forest/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand-forest font-semibold text-sm shadow-md backdrop-blur-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-semibold text-brand-forest mb-2 font-['Poppins']">{facility.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-['Poppins'] text-pretty grow">
                  {facility.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection
