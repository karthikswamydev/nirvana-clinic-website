import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../screens'
import { buildPageMeta } from '../seo/buildPageMeta'
import { SITE_NAME } from '../seo/site'

export const Route = createFileRoute('/')({
  head: () => ({
    ...buildPageMeta({
      title: SITE_NAME,
      description:
        'Integrative naturopathy, yoga, acupuncture, hydrotherapy, and lifestyle medicine at Nirvana Integrated Clinic — Manamelkudi, Tamil Nadu.',
      path: '/',
      imagePath: '/hero-buddha-tree.jpg',
    }),
  }),
  component: () => <Home />,
})