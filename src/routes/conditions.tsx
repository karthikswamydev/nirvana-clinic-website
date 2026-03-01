import { createFileRoute } from '@tanstack/react-router'
import { Conditions } from '../screens'

export const Route = createFileRoute('/conditions')({
  component: () => < Conditions />
})