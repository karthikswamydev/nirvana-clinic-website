import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { buildPageMeta } from '../seo/buildPageMeta'
import { AboutExpertiseVisionSection } from '../components/AboutExpertiseVisionSection'
import { DoctorLeadershipSection } from '../components/DoctorLeadershipSection'

function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-4 lg:pt-20">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent font-['Poppins']">
            About us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Poppins'] leading-relaxed">
            Expertise in integrated natural medicine, a clear vision for whole-person care, and leadership
            you can trust.
          </p>
        </motion.div>
      </div>
      <AboutExpertiseVisionSection />
      <DoctorLeadershipSection />
    </div>
  )
}

export const Route = createFileRoute('/about')({
  head: () => ({
    ...buildPageMeta({
      title: 'About us',
      description:
        'Expertise in integrated natural medicine, vision for whole-person care, and clinical leadership at Nirvana Integrated Clinic.',
      path: '/about',
    }),
  }),
  component: AboutPage,
})