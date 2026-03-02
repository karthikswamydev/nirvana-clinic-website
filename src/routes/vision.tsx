import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { motion } from 'motion/react'

function VisionPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0F9B4A] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent font-['Poppins']">
              Our Vision
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins']">
              Building the future of integrated healthcare in India
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Poppins']">
              At Nirvana Integrated Clinic, our vision is to build a fully integrated Multispeciality AYUSH & Modern Medicine Hospital where every patient receives the right treatment, from the right system, at the right time — without confusion, conflict, or unnecessary expenses.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-['Poppins']">
              We envision a healthcare model where Naturopathy, Ayurveda, Yoga, Acupuncture, Chiropractic, Physiotherapy, Functional Medicine, and Allopathy work in harmony, not separately. Instead of patients running from one doctor to another, receiving different explanations and contradictory advice, we aim to create a unified, patient-centric system where all medical sciences come together to discuss, diagnose, and guide each patient with clarity and confidence.
            </p>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-linear-to-r from-[#0F9B4A] to-[#0EB4A0] bg-clip-text text-transparent mb-12 font-['Poppins']">
              Our Future Multispeciality Centre
            </h2>

            {[
              {
                title: 'All systems of medicine support each other',
                description: 'Every department collaborates to provide holistic, scientific, and personalised treatment plans.'
              },
              {
                title: 'Patients receive what they actually need',
                points: [
                  'If a patient needs modern medicine, we provide it.',
                  'If the patient needs natural therapies for long-term healing, we offer them.',
                  'If they require a combination of therapies for faster cure, we integrate them safely.'
                ]
              },
              {
                title: 'Healthcare becomes affordable without compromising quality',
                points: [
                  'We aim to remove the financial pressure that often prevents people from getting complete treatment.',
                  'Our integrated model reduces repeated consultations, unnecessary tests, and trial-and-error treatments.'
                ]
              },
              {
                title: 'Confusion between AYUSH and Allopathy ends',
                points: [
                  'Patients will no longer be confused between medical opinions.',
                  'They will receive a single, unified treatment plan created by experts from both sides.'
                ]
              },
              {
                title: 'True healing becomes the focus — not just disease management',
                description: 'With the strength of modern diagnostics and the transformative power of AYUSH therapies, we want to cure root causes, prevent relapses, and restore long-term wellbeing.'
              },
              {
                title: 'India becomes a global model for integrative medicine',
                description: 'Our long-term vision is to set a benchmark for holistic healthcare, inspire more integrative centres, and contribute to India\'s leadership in AYUSH-based wellness.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold bg-linear-to-r from-[#0F9B4A] to-[#0EB4A0] bg-clip-text text-transparent mb-4 font-['Poppins']">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-700 leading-relaxed font-['Poppins']">{item.description}</p>
                )}
                {item.points && (
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="text-gray-700 flex items-start font-['Poppins']">
                        <span className="text-[#0EB4A0] mr-2 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-linear-to-r from-[#0F9B4A] to-[#0EB4A0] rounded-2xl p-8 md:p-12 text-white text-center mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-semibold font-['Poppins']">
              "A healthcare environment where medicine is not divided, and patients are not burdened, but healing becomes comprehensive, scientific, compassionate, and accessible to all."
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const Route = createFileRoute('/vision')({
  component: VisionPage,
})
