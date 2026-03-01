import { createFileRoute } from '@tanstack/react-router'
import { Treatments } from '../screens'

export const Route = createFileRoute('/treatments')({
  component: () => <Treatments />
})