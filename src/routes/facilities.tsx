import { createFileRoute } from '@tanstack/react-router'
import { FacilitiesPage } from '../screens'

export const Route = createFileRoute('/facilities')({
  component: () => <FacilitiesPage />
})