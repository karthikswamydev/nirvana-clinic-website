import { createFileRoute } from '@tanstack/react-router'
import { Treatments } from '../screens'
import { buildPageMeta } from '../seo/buildPageMeta'

export const Route = createFileRoute('/treatments/')({
  head: () => ({
    ...buildPageMeta({
      title: 'Treatments',
      description:
        'Naturopathy, women’s health, stress and lifestyle care, acupuncture, physiotherapy, yoga therapy, and more — integrative treatment focus areas.',
      path: '/treatments',
    }),
  }),
  component: () => <Treatments />,
})
