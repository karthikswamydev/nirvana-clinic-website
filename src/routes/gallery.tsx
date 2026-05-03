import { createFileRoute } from '@tanstack/react-router'
import { GalleryPage } from '../screens'
import { buildPageMeta } from '../seo/buildPageMeta'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    ...buildPageMeta({
      title: 'Gallery',
      description: 'Photos from Nirvana Integrated Clinic — therapies, spaces, and the healing environment.',
      path: '/gallery',
    }),
  }),
  component: () => <GalleryPage />,
})