import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Home } from '../screens'

export const Route = createRootRoute({
  component: () => (
    <>
      <Home />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})