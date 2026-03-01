import { createFileRoute } from '@tanstack/react-router'
import { GalleryPage } from '../screens'

export const Route = createFileRoute('/gallery')({
  component: () => <GalleryPage />
})