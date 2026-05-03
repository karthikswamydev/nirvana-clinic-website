import { createFileRoute } from '@tanstack/react-router'
import { FacilitiesPage } from '../screens'
import { buildPageMeta } from '../seo/buildPageMeta'

export const Route = createFileRoute('/facilities')({
  head: () => ({
    ...buildPageMeta({
      title: 'Facilities',
      description:
        'Hydrotherapy and mud therapy units, private consultation rooms, therapy spaces, and a yoga and rehabilitation hall at Nirvana Integrated Clinic.',
      path: '/facilities',
    }),
  }),
  component: () => <FacilitiesPage />,
})