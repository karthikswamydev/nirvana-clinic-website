import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useState, type FormEvent } from 'react'
import { getEmailJsConfig, sendContactEmail, toTemplateParams, validateContactForm } from '../lib/emailjs'
import { buildPageMeta } from '../seo/buildPageMeta'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedback, setFeedback] = useState<string | null>(null)

  const configReady = getEmailJsConfig().ready

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFeedback(null)

    const validationError = validateContactForm({ name, email, phone, message })
    if (validationError) {
      setStatus('error')
      setFeedback(validationError)
      return
    }

    setStatus('sending')
    const result = await sendContactEmail(toTemplateParams({ name, email, phone, message }))
    if (result.ok) {
      setStatus('success')
      setFeedback('Thank you — your message was sent. We will get back to you soon.')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } else {
      setStatus('error')
      setFeedback(result.message)
    }
  }

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
                      <p className="text-lg font-semibold text-gray-900 font-['Poppins']">contact@nirvanaintegratedclinic.com</p>
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
                {!configReady && (
                  <p
                    className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 font-['Poppins']"
                    role="status"
                  >
                    Email sending is not configured. Add{' '}
                    <code className="rounded bg-amber-100/80 px-1 text-xs">VITE_EMAILJS_PUBLIC_KEY</code>,{' '}
                    <code className="rounded bg-amber-100/80 px-1 text-xs">VITE_EMAILJS_SERVICE_ID</code>, and{' '}
                    <code className="rounded bg-amber-100/80 px-1 text-xs">VITE_EMAILJS_TEMPLATE_ID</code> to{' '}
                    <code className="rounded bg-amber-100/80 px-1 text-xs">.env.local</code> (see EmailJS dashboard),
                    then restart the dev server.
                  </p>
                )}
                {feedback && (
                  <p
                    className={`mb-4 rounded-lg border px-4 py-3 text-sm font-['Poppins'] ${
                      status === 'success'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                        : 'border-red-200 bg-red-50 text-red-900'
                    }`}
                    role="status"
                  >
                    {feedback}
                  </p>
                )}
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="from_name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-olive focus:border-transparent font-['Poppins']"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="from_email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-olive focus:border-transparent font-['Poppins']"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(ev) => setPhone(ev.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-olive focus:border-transparent font-['Poppins']"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={message}
                      onChange={(ev) => setMessage(ev.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-olive focus:border-transparent font-['Poppins']"
                      placeholder="Tell us about your health concerns..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending' || !configReady}
                    className="w-full bg-brand-forest text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-forest/90 transition-colors shadow-lg font-['Poppins'] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
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
            <div className="relative aspect-video w-full min-h-[240px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.714976582813!2d79.22818977475875!3d10.040362272339467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0023fc04896495%3A0x29fd630b690fa256!2sNirvana%20Integrated%20Clinic!5e0!3m2!1sen!2sza!4v1777818916031!5m2!1sen!2sza"
                title="Nirvana Integrated Clinic on Google Maps"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
  )
}

export const Route = createFileRoute('/contact')({
  head: () => ({
    ...buildPageMeta({
      title: 'Contact',
      description:
        'Phone, email, address, and clinic hours for Nirvana Integrated Clinic — Manamelkudi, Pudukkottai district, Tamil Nadu.',
      path: '/contact',
    }),
  }),
  component: ContactPage,
})
