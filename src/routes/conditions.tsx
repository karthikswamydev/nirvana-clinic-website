import { createFileRoute } from '@tanstack/react-router'
import { Conditions } from '../screens'
import { buildPageMeta } from '../seo/buildPageMeta'

export const Route = createFileRoute('/conditions')({
  head: () => ({
    ...buildPageMeta({
      title: 'Conditions we support',
      description:
        'How Nirvana Integrated Clinic approaches metabolic, musculoskeletal, stress-related, and other conditions with integrative naturopathic and AYUSH-aligned care.',
      path: '/conditions',
    }),
  }),
  component: () => <Conditions />,
})