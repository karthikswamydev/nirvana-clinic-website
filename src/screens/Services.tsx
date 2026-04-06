import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

type ServiceItem = {
  title: string
  description: string
  to: '/contact' | '/treatments' | '/facilities'
  image: string
  imageAlt: string
}

const services: ServiceItem[] = [
  {
    title: 'Specialized wellness programs',
    description:
      'Structured programs tailored to your goals—detox, stress recovery, weight balance, and chronic-condition support—with coordinated naturopathic care.',
    to: '/contact',
    image: '/yoga-rehab.png',
    imageAlt: 'Therapeutic movement and guided wellness for structured healing programs',
  },
  {
    title: 'Customized health packages',
    description:
      'Assessment-led bundles that combine consultations, therapies, and follow-up so you get clear milestones without a one-size-fits-all plan.',
    to: '/contact',
    image: '/care.png',
    imageAlt: 'Personalised naturopathic assessment and supportive clinical care',
  },
  {
    title: 'Workshops & training',
    description:
      'Group sessions on lifestyle, nutrition, breathwork, and self-care—practical skills you can use between visits.',
    to: '/contact',
    image: '/yogalife.jpeg',
    imageAlt: 'Group wellness and yoga-inspired training in a bright studio setting',
  },
  {
    title: 'Online & teleconsultation',
    description:
      'Remote guidance when travel is difficult: review progress, adjust plans, and stay supported from home.',
    to: '/contact',
    image: '/Therapy-room.png',
    imageAlt: 'Calm consultation and therapy room for professional follow-up care',
  },
  {
    title: 'Geriatrics care',
    description:
      'Gentle, natural support for mobility, sleep, digestion, and vitality—paced for comfort and safety.',
    to: '/treatments',
    image: '/foot-therapy.png',
    imageAlt: 'Gentle therapeutic foot and body care suitable for senior wellness',
  },
  {
    title: 'Home care',
    description:
      'Continuity of care with home-appropriate recommendations and family-friendly education alongside in-clinic therapy when needed.',
    to: '/contact',
    image: '/oil-treatment.png',
    imageAlt: 'Restorative oil-based therapy suggesting comfort and home-aligned healing',
  },
  {
    title: 'Additional healing therapies',
    description:
      'Complementary modalities including massage, hydrotherapy, acupuncture-style care, and restorative bodywork—used where clinically appropriate.',
    to: '/treatments',
    image: '/swedana.png',
    imageAlt: 'Steam and hydrotherapy-style wellness supporting detox and relaxation',
  },
  {
    title: 'Day care services',
    description:
      'Focused same-day visits for therapy blocks, supervised relaxation, and structured wellness sessions in a calm clinical setting.',
    to: '/facilities',
    image: '/treatment-area.png',
    imageAlt: 'Clinical treatment area for same-day wellness and therapy visits',
  },
  {
    title: 'Wellness & preventive healthcare',
    description:
      'Early screening habits, lifestyle review, and proactive plans to reduce risk and maintain energy long term.',
    to: '/contact',
    image: '/mud-therapy.png',
    imageAlt: 'Natural mud and earth-based therapy for preventive detox and balance',
  },
  {
    title: 'Counseling & mind–body support',
    description:
      'Holistic conversations that address stress, habits, and emotional load as part of your overall healing picture.',
    to: '/contact',
    image: '/ShidhoraOil.png',
    imageAlt: 'Deep relaxation therapy calming the nervous system and mind–body stress',
  },
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
            className="text-center space-y-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent font-['Poppins']">
              Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins'] leading-relaxed">
              Programs, packages, and support options that wrap around our treatments—so care stays personal, practical, and continuous.
            </p>
            <img
              className="max-w-[280px] h-auto object-contain mx-auto mt-6"
              src="/brand/divider.png"
              alt=""
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.article
                key={item.title}
                className="bg-white rounded-2xl border border-brand-olive/25 shadow-lg shadow-brand-forest/5 overflow-hidden flex flex-col hover:shadow-xl hover:border-brand-olive/45 transition-all duration-300"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
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
                  <p className="text-gray-600 font-['Poppins'] text-sm leading-relaxed grow mb-5">{item.description}</p>
                  <Link
                    to={item.to}
                    className="inline-flex items-center text-sm font-semibold text-brand-forest font-['Poppins'] hover:text-brand-olive transition-colors"
                  >
                    Learn more
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-600 font-['Poppins'] mt-16 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join us on a transformative journey toward holistic wellness—tell us what you need and we&apos;ll help map the right mix of services
            and therapies.
          </motion.p>
          <div className="flex justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-forest px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-brand-forest/90 transition-colors font-['Poppins']"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
