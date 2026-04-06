import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

function ContactPage() {
  return (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent font-['Poppins']">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins']">
              Healing begins with the right guidance. Let us help you return to balance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent mb-6 font-['Poppins']">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-olive/15 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-['Poppins']">Phone</p>
                      <p className="text-lg font-semibold text-gray-900 font-['Poppins']">7448811001</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-olive/15 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-['Poppins']">Email</p>
                      <p className="text-lg font-semibold text-gray-900 font-['Poppins']">contact@nirvanaclinic.com</p>
                      <p className="text-sm text-gray-500 font-['Poppins']">(Email will be updated after domain purchase)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-olive/15 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-['Poppins']">Address</p>
                      <p className="text-lg font-semibold text-gray-900 font-['Poppins']">Nirvana Integrated Clinic</p>
                      <p className="text-gray-700 font-['Poppins']">
                        Paribalan Complex,<br />
                        East Coast Road, Near Bus stand,<br />
                        Manamelkudi,<br />
                        Pudukkottai (dt) – 614620<br />
                        Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Poppins']">Clinic Hours</h3>
                <div className="space-y-2 text-gray-700 font-['Poppins']">
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <h2 className="text-2xl font-semibold bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent mb-6 font-['Poppins']">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-olive focus:border-transparent font-['Poppins']"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-olive focus:border-transparent font-['Poppins']"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-olive focus:border-transparent font-['Poppins']"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-olive focus:border-transparent font-['Poppins']"
                      placeholder="Tell us about your health concerns..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-forest text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-forest/90 transition-colors shadow-lg font-['Poppins']"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 bg-white rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 font-['Poppins']">Google Maps Location (To be added)</p>
            </div>
          </motion.div>
        </div>
  )
}

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})
