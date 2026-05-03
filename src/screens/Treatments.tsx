import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { FaqAccordion } from '../components/FaqAccordion'
import { treatmentsListingFaq } from '../data/listingPageFaqs'
import { treatmentsCatalog } from '../data/treatmentsCatalog'

const treatmentSpotlights: { src: string; alt: string; caption: string }[] = [
  {
    src: '/yoga-rehab.png',
    alt: 'Therapeutic movement and guided posture work in a bright studio',
    caption: 'Movement and breath',
  },
  {
    src: '/swedana.png',
    alt: 'Steam and warmth-based therapy supporting circulation and relaxation',
    caption: 'Heat, steam, and recovery',
  },
  {
    src: '/foot-therapy.png',
    alt: 'Focused lower-body and reflex-style therapeutic care',
    caption: 'Point work and release',
  },
]

function TreatmentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 font-['Poppins'] mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-brand-forest transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-forest font-medium">Treatments</li>
            </ol>
          </nav>

          <motion.div
            className="text-center space-y-4 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent font-['Poppins']">
              Our treatments
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins'] leading-relaxed">
              Naturopathic and integrative modalities grouped the way we deliver care—each topic opens a dedicated page
              with how we work, who it suits, and what to expect.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto font-['Poppins'] leading-relaxed">
              We combine lifestyle education with hands-on and movement-based therapies so you leave with both relief today
              and skills for tomorrow.
            </p>
            <img className="max-w-[280px] h-auto object-contain mx-auto mt-6" src="/brand/divider.png" alt="" />
          </motion.div>

          <motion.section
            className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center rounded-3xl bg-brand-sage/20 border border-brand-olive/20 p-6 md:p-10 lg:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="order-2 md:order-1 space-y-4 font-['Poppins'] text-gray-700 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Consultation-first, always</h2>
              <p>
                Before any modality is scheduled, we clarify your history, current medications, and what success looks like
                for you—whether that is less pain, steadier energy, calmer sleep, or better mobility.
              </p>
              <p>
                Treatments are layered deliberately: we start with foundations that support digestion, sleep, and stress
                regulation, then add targeted bodywork or movement where it accelerates your plan.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-brand-olive font-bold">•</span>
                  Clear visit rhythm with written take-home notes when helpful
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-olive font-bold">•</span>
                  Gentle progression—especially if you are new to natural medicine or returning after a break
                </li>
              </ul>
            </div>
            <figure className="order-1 md:order-2 m-0 rounded-2xl overflow-hidden shadow-xl border border-white/60 aspect-4/3 bg-brand-sage/30">
              <img
                src="/treatment-area.png"
                alt="Calm treatment area prepared for integrative naturopathic and body therapies"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </motion.section>

          <motion.section
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 font-['Poppins'] mb-3">
              A glimpse across modalities
            </h2>
            <p className="text-center text-gray-600 font-['Poppins'] max-w-2xl mx-auto mb-10 text-sm md:text-base">
              These are representative of the environments and tools we use—your exact sequence is chosen after assessment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {treatmentSpotlights.map((item, i) => (
                <motion.figure
                  key={item.src}
                  className="m-0 rounded-2xl overflow-hidden border border-brand-olive/25 bg-white shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="aspect-4/3 overflow-hidden bg-brand-sage/25">
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-medium text-brand-forest font-['Poppins'] text-center border-t border-brand-olive/15">
                    {item.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <figure className="m-0 rounded-2xl overflow-hidden shadow-xl border border-brand-olive/20 aspect-4/3 md:aspect-auto md:min-h-[280px]">
              <img
                src="/ShidhoraOil.png"
                alt="Deep relaxation therapy supporting the nervous system and restorative sleep"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="space-y-4 font-['Poppins'] text-gray-700 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Nervous system care, built in</h2>
              <p>
                Many symptoms—tension headaches, gut flare-ups, hormonal swings—track closely with an overloaded stress
                response. Our treatment plans deliberately make space for down-regulation alongside physical work.
              </p>
              <p>
                That might mean breath-led movement, restorative body sessions, or hydrothermal routines chosen for your
                comfort level and medical history.
              </p>
              <Link
                to="/treatments/$slug"
                params={{ slug: 'stress-lifestyle-disease-management' }}
                className="inline-flex text-sm font-semibold text-brand-forest hover:text-brand-olive transition-colors"
              >
                Explore stress and lifestyle support →
              </Link>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentsCatalog.map((treatment, index) => (
              <motion.article
                key={treatment.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="aspect-16/10 overflow-hidden bg-brand-sage/25 shrink-0">
                  <img
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h2 className="text-2xl font-semibold bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent mb-3 font-['Poppins']">
                    {treatment.title}
                  </h2>
                  <p className="text-gray-600 mb-4 font-['Poppins'] leading-relaxed grow">{treatment.shortDescription}</p>
                  <div className="space-y-2 mb-5">
                    <p className="text-sm font-semibold text-gray-700 font-['Poppins']">Focus areas:</p>
                    <ul className="space-y-1">
                      {treatment.highlights.map((h) => (
                        <li key={h} className="text-sm text-gray-600 flex items-start font-['Poppins']">
                          <span className="text-brand-olive mr-2">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/treatments/$slug"
                    params={{ slug: treatment.slug }}
                    className="inline-flex items-center text-sm font-semibold text-brand-forest font-['Poppins'] hover:text-brand-olive transition-colors mt-auto"
                  >
                    Read full overview
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.section
            className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-10 items-stretch rounded-3xl overflow-hidden border border-brand-olive/25 shadow-lg bg-white"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <figure className="m-0 lg:col-span-5 min-h-[220px] lg:min-h-[320px]">
              <img
                src="/mud-therapy.png"
                alt="Natural earth-based therapy used as part of grounding and inflammation-aware care"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center font-['Poppins']">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Pair treatments with our services</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Day packages, home-care coaching, and tele-follow-ups help you stay consistent between in-person sessions.
                Browse services to see how programs wrap around the therapies you choose.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border-2 border-brand-forest px-6 py-3 text-sm font-semibold text-brand-forest hover:bg-brand-sage/30 transition-colors"
                >
                  View services
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-forest px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-forest/90 transition-colors"
                >
                  Ask which treatment fits you
                </Link>
              </div>
            </div>
          </motion.section>

          <motion.div
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-sm font-['Poppins'] max-w-xl mx-auto mb-6">
              Not sure where to begin? Tell us your main concern—we will suggest a sensible starting point and timeline.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-forest px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-brand-forest/90 transition-colors font-['Poppins']"
            >
              Book a consultation
            </Link>
          </motion.div>

          <FaqAccordion
            id="treatments-faq"
            heading="Frequently asked questions"
            description="Quick answers about how we structure treatment care. Open any item for details."
            items={treatmentsListingFaq}
          />
        </div>
      </main>
    </div>
  )
}

export default TreatmentsPage
