import { createFileRoute } from '@tanstack/react-router'
import { ServicesPage } from '../screens'
import { buildPageMeta } from '../seo/buildPageMeta'

export const Route = createFileRoute('/services/')({
  head: () => ({
    ...buildPageMeta({
      title: 'Services & programs',
      description:
        'Wellness programs, preventive care, packages, workshops, teleconsultation, and complementary therapies at Nirvana Integrated Clinic.',
      path: '/services',
    }),
  }),
  component: () => <ServicesPage />,
})
