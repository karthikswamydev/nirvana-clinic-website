import { motion } from 'motion/react'

const facilities = [
  {
    title: 'Hydrotherapy & Mud Therapy Units',
    description: 'Modern water-based and natural mud therapy facilities',
    image: 'public/mud-therapy.png', // Replace with your actual image paths
  },
  {
    title: 'Consultation Rooms with Privacy',
    description: 'Private spaces for personalized health assessments',
    image: 'public/treatment-area.png',
  },
  {
    title: 'Dedicated Therapy Rooms',
    description: 'Specialized rooms for massage, acupuncture, and physiotherapy',
    image: 'public/Therapy-room.png',
  },
  {
    title: 'Yoga & Rehabilitation Hall',
    description: 'Spacious hall for yoga therapy and rehabilitation exercises',
    image: 'public/yoga-rehab.png',
  },
  {
    title: 'Clean & Hygienic Treatment Areas',
    description: 'Maintained to the highest standards of safety and comfort',
    image: 'public/treatment-area.png',
  },
  {
    title: 'Calm, Healing Environment',
    description: 'Thoughtfully designed spaces that promote natural healing',
    image: 'public/healing-env.png',
  },
]

export function FacilitiesSection() {
  return (
    <section className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-semibold text-gray-900 font-['Poppins']">
            <span
              className="bg-linear-to-r from-lime-400 to-lime-200 text-green-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg">
              Our Facilities
            </span>
          </h2>

          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto font-['Poppins'] leading-relaxed">
            Modern infrastructure designed for your comfort and healing
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              className="group relative h-80 overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${facility.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-light mb-2 font-['Poppins']">
                  {facility.title}
                </h3>
                <p className="text-white/90 font-thin font-['Poppins']">
                  {facility.description}
                </p>
              </div>

              {/* Focus Ring for Accessibility */}
              <a
                href="/facilities"
                className="absolute inset-0 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-inset rounded-lg"
                aria-label={`Learn more about ${facility.title}`}
              >
                <span className="sr-only">View {facility.title}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection
