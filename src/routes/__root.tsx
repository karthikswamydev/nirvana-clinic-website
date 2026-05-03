import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { createPortal } from 'react-dom'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { organizationJsonLd } from '../seo/buildPageMeta'

export const Route = createRootRoute({
  head: () => ({
    // TanStack meta supports script:ld+json; core types only list HTML meta attributes.
    meta: [{ name: 'theme-color', content: '#2d545e' }, organizationJsonLd()] as Array<
      Record<string, string | Record<string, unknown>>
    >,
  }),
  component: () => (
    <>
      {createPortal(<HeadContent />, document.head)}
      <div className="min-h-screen flex flex-col ">
        <Header />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
})