import { absoluteUrl, SITE_NAME } from './site'

export type PageMetaInput = {
  title: string
  description: string
  path: string
  /** Path or absolute URL for og:image / twitter:image */
  imagePath?: string
}

/** Title, description, canonical, and Open Graph / Twitter card tags for a route. */
export function buildPageMeta({ title, description, path, imagePath = '/vite.svg' }: PageMetaInput) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const url = absoluteUrl(path)
  const ogImage = imagePath.startsWith('http') ? imagePath : absoluteUrl(imagePath)

  const meta = [
    { title: fullTitle },
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:locale', content: 'en_IN' },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: fullTitle },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ]

  const links = [{ rel: 'canonical', href: url }]

  return { meta, links }
}

/** Organization structured data; include on the root route only. */
export function organizationJsonLd() {
  return {
    'script:ld+json': {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: SITE_NAME,
      url: absoluteUrl('/'),
      email: 'contact@nirvanaclinic.com',
      telephone: '+91-7448811001',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Paribalan Complex, East Coast Road, Near Bus stand, Manamelkudi',
        addressLocality: 'Manamelkudi',
        addressRegion: 'Tamil Nadu',
        postalCode: '614620',
        addressCountry: 'IN',
      },
    },
  }
}
