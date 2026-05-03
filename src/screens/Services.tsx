import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { FaqAccordion } from '../components/FaqAccordion'
import { servicesListingFaq } from '../data/listingPageFaqs'
import { servicesCatalog } from '../data/servicesCatalog'

const serviceJourney: { src: string; alt: string; title: string; text: string }[] = [
  {
    src: '/care.png',
    alt: 'One-to-one clinical assessment and supportive planning discussion',
    title: 'Assessment and clarity',
    text: 'We map goals, constraints, and any medical collaboration needed so packages and programs fit real life—not a fantasy schedule.',
  },
  {
    src: '/Therapy-room.png',
    alt: 'Calm therapy and consultation space for in-clinic care and follow-up',
    title: 'In-clinic rhythm',
    text: 'Structured visits, supervised therapies, and written milestones keep momentum without overwhelming your calendar.',
  },
  {
    src: '/yogalife.jpeg',
    alt: 'Group and movement-based wellness supporting habits between appointments',
    title: 'Skills between visits',
    text: 'Workshops, breath and movement coaching, and remote check-ins reinforce what you practice at home.',
  },
]

const serviceGallery: { src: string; alt: string }[] = [
  { src: '/treatment-area.png', alt: 'Same-day wellness and multi-modality treatment space' },
  { src: '/oil-treatment.png', alt: 'Comfort-oriented restorative body care session' },
  { src: '/kizhi-potli.png', alt: 'Warm herbal bolus therapy for stiffness and circulation' },
]

export default function ServicesPage() {
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
              <li className="text-brand-forest font-medium">Services</li>
            </ol>
          </nav>

          <motion.div
            className="text-center space-y-4 mb-12 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent font-['Poppins']">
              Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins'] leading-relaxed">
              Programs, packages, and support options around our treatments—each card links to a full page describing
              scope, safety, and how we deliver it.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto font-['Poppins'] leading-relaxed">
              From day-stay blocks to tele-follow-ups, services are how we keep your plan coherent when life gets busy.
            </p>
            <img className="max-w-[280px] h-auto object-contain mx-auto mt-6" src="/brand/divider.png" alt="" />
          </motion.div>

          <motion.section
            className="mb-14 md:mb-20 grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <figure className="m-0 rounded-2xl overflow-hidden shadow-xl border border-brand-olive/20 aspect-4/3 order-2 md:order-1">
              <img
                src="/mud-therapy.png"
                alt="Grounding and preventive wellness therapies complementing structured service packages"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="space-y-4 font-['Poppins'] text-gray-700 leading-relaxed order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">What “service” means here</h2>
              <p>
                Treatments address symptoms and tissue change; services organize your care—how often we see you, what
                happens at home, and how teams stay aligned. That distinction helps you invest in the right layer at the
                right time.
              </p>
              <p>
                Whether you need a short intensive block or long-horizon prevention, we spell out inclusions, realistic
                outcomes, and how to pause or scale if your situation changes.
              </p>
              <Link
                to="/treatments"
                className="inline-flex text-sm font-semibold text-brand-forest hover:text-brand-olive transition-colors"
              >
                Browse treatments →
              </Link>
            </div>
          </motion.section>

          <motion.section
            className="mb-14 md:mb-20 rounded-3xl bg-linear-to-br from-brand-sage/35 via-white to-brand-sage/25 border border-brand-olive/20 p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 font-['Poppins'] mb-3">
              How care typically flows
            </h2>
            <p className="text-center text-gray-600 font-['Poppins'] text-sm md:text-base max-w-2xl mx-auto mb-12">
              Every path is individualized; this is a simple mental model many guests find helpful before reading
              individual service pages.
            </p>
            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {serviceJourney.map((step, i) => (
                <motion.article
                  key={step.title}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-brand-olive/20 overflow-hidden shadow-md flex flex-col"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <div className="aspect-16/11 overflow-hidden bg-brand-sage/25">
                    <img src={step.src} alt={step.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col grow font-['Poppins']">
                    <h3 className="text-lg font-semibold text-brand-forest mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed grow">{step.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="mb-14 md:mb-20"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-['Poppins'] text-center mb-8">
              Inside the clinic experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {serviceGallery.map((g, i) => (
                <motion.figure
                  key={g.src}
                  className="m-0 rounded-2xl overflow-hidden border border-brand-olive/25 bg-white shadow-md"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div className="aspect-4/3 overflow-hidden bg-brand-sage/25">
                    <img src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                </motion.figure>
              ))}
            </div>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesCatalog.map((item, index) => (
              <motion.article
                key={item.slug}
                className="bg-white rounded-2xl border border-brand-olive/25 shadow-lg shadow-brand-forest/5 overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-olive/45 transition-all duration-300"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="aspect-16/10 overflow-hidden bg-brand-sage/25 shrink-0">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h2 className="text-xl font-semibold bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent font-['Poppins'] mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 font-['Poppins'] text-sm leading-relaxed grow mb-5">{item.shortDescription}</p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Link
                      to="/services/$slug"
                      params={{ slug: item.slug }}
                      className="inline-flex items-center text-sm font-semibold text-brand-forest font-['Poppins'] hover:text-brand-olive transition-colors"
                    >
                      Full details
                      <span className="ml-1" aria-hidden="true">
                        →
                      </span>
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm font-medium text-gray-500 font-['Poppins'] hover:text-brand-forest transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.section
            className="mt-16 md:mt-20 flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden border border-brand-olive/25 shadow-lg bg-brand-sage/15"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="md:w-2/5 min-h-[200px] md:min-h-0 shrink-0">
              <img
                src="/foot-therapy.png"
                alt="Gentle in-clinic care suitable for recovery days and senior-friendly service plans"
                className="w-full h-full object-cover min-h-[200px] md:min-h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 font-['Poppins'] flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Geriatrics, home support, and telecare</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                Some guests need slower pacing, family-inclusive instructions, or remote tune-ups between visits. Those
                threads are woven into specific service pages—open geriatrics care, home care, or online consultation for
                the full picture.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/services/$slug"
                  params={{ slug: 'geriatrics-care' }}
                  className="text-sm font-semibold text-brand-forest hover:text-brand-olive"
                >
                  Geriatrics care →
                </Link>
                <span className="text-gray-300" aria-hidden="true">
                  |
                </span>
                <Link
                  to="/services/$slug"
                  params={{ slug: 'home-care' }}
                  className="text-sm font-semibold text-brand-forest hover:text-brand-olive"
                >
                  Home care →
                </Link>
                <span className="text-gray-300" aria-hidden="true">
                  |
                </span>
                <Link
                  to="/services/$slug"
                  params={{ slug: 'online-teleconsultation' }}
                  className="text-sm font-semibold text-brand-forest hover:text-brand-olive"
                >
                  Teleconsultation →
                </Link>
              </div>
            </div>
          </motion.section>

          <motion.p
            className="text-center text-gray-600 font-['Poppins'] mt-14 md:mt-16 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tell us your goals and constraints—we will map the right mix of services and in-clinic therapies for your
            situation.
          </motion.p>
          <div className="flex justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-forest px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-brand-forest/90 transition-colors font-['Poppins']"
            >
              Contact us
            </Link>
          </div>

          <FaqAccordion
            id="services-faq"
            heading="Frequently asked questions"
            description="Common questions about programs, packages, and how services wrap around in-clinic therapies."
            items={servicesListingFaq}
          />
        </div>
      </main>
    </div>
  )
}
