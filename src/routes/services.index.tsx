import { createFileRoute } from '@tanstack/react-router'
import { ServicesPage } from '../screens'

export const Route = createFileRoute('/services/')({
  component: () => <ServicesPage />,
})
