import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { FaqAccordion } from '../components/FaqAccordion'
import { HighlightedBody } from '../components/HighlightedBody'
import { CATALOG_DETAIL_SECTIONS, type CatalogLongformSections, type LongformSubsection } from '../data/catalogDetailTypes'
import { servicesListingFaq, treatmentsListingFaq } from '../data/listingPageFaqs'

type CatalogDetailPageProps = {
  kind: 'treatment' | 'service'
  slug: string
  title: string
  shortDescription: string
  image: string
  imageAlt: string
  intro: string
  highlights: string[]
  longform: CatalogLongformSections
}

export default function CatalogDetailPage({
  kind,
  slug,
  title,
  shortDescription,
  image,
  imageAlt,
  intro,
  highlights,
  longform,
}: CatalogDetailPageProps) {
  const indexPath = kind === 'treatment' ? '/treatments' : '/services'
  const indexLabel = kind === 'treatment' ? 'Treatments' : 'Services'
  const faqItems = kind === 'treatment' ? treatmentsListingFaq : servicesListingFaq

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-brand-sage/15 via-white to-white">
      <div className="grow max-w-7xl mx-auto px-4 py-10 md:py-14 w-full">
        <nav className="text-sm text-gray-500 font-['Poppins'] mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-brand-forest transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to={indexPath} className="hover:text-brand-forest transition-colors">
                {indexLabel}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-brand-forest font-medium" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        <motion.header
          className="mb-10 md:mb-12 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs uppercase tracking-widest text-brand-forest/80 font-['Poppins'] font-semibold mb-3">
            Nirvana Integrated Clinic · {indexLabel}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent font-['Poppins'] mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-['Poppins'] leading-relaxed">{shortDescription}</p>
        </motion.header>

        <motion.div
          className="rounded-3xl overflow-hidden border border-brand-olive/25 shadow-xl bg-white mb-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="">
            <img src={image} alt={imageAlt} className="w-full h-full object-cover" loading="eager" decoding="async" />
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-10">
          <motion.p
            className="text-lg text-gray-700 font-['Poppins'] leading-relaxed text-pretty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {intro}
          </motion.p>
          <ul className="flex flex-wrap justify-center gap-2 mt-8">
            {highlights.map((h) => (
              <li
                key={h}
                className="text-sm font-medium text-brand-forest bg-brand-sage/40 border border-brand-olive/30 rounded-full px-4 py-1.5 font-['Poppins']"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>

        <nav
          className="lg:hidden mb-10 -mx-1 px-1 overflow-x-auto pb-2 font-['Poppins']"
          aria-label="On this page"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-forest/80 mb-2">Jump to</p>
          <div className="flex gap-2 min-w-min">
            {CATALOG_DETAIL_SECTIONS.map((section, idx) => (
              <a
                key={section.key}
                href={`#section-${section.key}`}
                className="shrink-0 rounded-full border border-brand-olive/30 bg-white px-3 py-1.5 text-xs font-medium text-brand-forest hover:bg-brand-sage/40 transition-colors"
              >
                {idx + 1}. {section.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_min(100%,240px)] lg:gap-12 xl:gap-16 items-start">
          <article className="min-w-0">
            {CATALOG_DETAIL_SECTIONS.map((section, idx) => {
              const blocks = longform[section.key]
              const sectionId = `section-${section.key}`
              return (
                <motion.section
                  key={section.key}
                  id={sectionId}
                  className="scroll-mt-28 mb-12 md:mb-16 last:mb-8"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 font-['Poppins'] border-b border-brand-olive/25 pb-3 mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-brand-olive/90 tabular-nums">{idx + 1}.</span>
                    <span>{section.title}</span>
                  </h2>
                  <div className="space-y-8">
                    {blocks.map((block: LongformSubsection, j: number) => (
                      <div key={`${section.key}-${j}-${block.subheading}`} id={`${sectionId}-sub-${j}`}>
                        <h3 className="text-lg md:text-xl font-semibold text-brand-forest font-['Poppins'] mb-3">
                          {block.subheading}
                        </h3>
                        <HighlightedBody
                          text={block.body}
                          className="text-gray-600 font-['Poppins'] leading-[1.75] text-base md:text-[17px] text-justify text-pretty"
                        />
                      </div>
                    ))}
                  </div>
                </motion.section>
              )
            })}
          </article>

          <aside className="hidden lg:block shrink-0 pt-2">
            <nav
              className="sticky top-28 rounded-2xl border border-brand-olive/20 bg-white/90 backdrop-blur-sm shadow-md p-5 font-['Poppins']"
              aria-label="On this page"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-forest/80 mb-4">On this page</p>
              <ol className="space-y-2 text-sm">
                {CATALOG_DETAIL_SECTIONS.map((section, idx) => (
                  <li key={section.key}>
                    <a
                      href={`#section-${section.key}`}
                      className="text-gray-600 hover:text-brand-forest transition-colors leading-snug block py-0.5 border-l-2 border-transparent hover:border-brand-olive pl-3 -ml-px"
                    >
                      <span className="text-brand-olive/80 mr-1.5 tabular-nums">{idx + 1}.</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>

        <FaqAccordion
          id={`${kind}-detail-faq-${slug}`}
          heading="Frequently asked questions"
          description={
            kind === 'treatment'
              ? 'General questions about how we deliver treatment care. Your clinician may tailor guidance to your situation.'
              : 'General questions about programs and how services support your plan. Open a topic for more detail.'
          }
          items={faqItems}
          className="mt-12 md:mt-16 pt-6"
        />

        <div className="max-w-7xl mx-auto mt-4 pt-10 border-t border-brand-olive/20 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            to={indexPath}
            className="inline-flex items-center text-sm font-semibold text-brand-forest font-['Poppins'] hover:text-brand-olive transition-colors"
          >
            ← Back to {indexLabel.toLowerCase()}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-forest px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-brand-forest/90 transition-colors font-['Poppins']"
          >
            Book / inquire
          </Link>
        </div>
      </div>
    </div>
  )
}
