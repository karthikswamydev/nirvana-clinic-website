import { createFileRoute, Link } from '@tanstack/react-router'
import CatalogDetailPage from '../screens/CatalogDetailPage'
import { buildCatalogLongform } from '../data/longformBuilder'
import { getServiceBySlug } from '../data/servicesCatalog'

export const Route = createFileRoute('/services/$slug')({
  component: ServiceSlugPage,
})

function ServiceSlugPage() {
  const { slug } = Route.useParams()
  const item = getServiceBySlug(slug)
  const longform = item ? buildCatalogLongform('service', item.title, item.shortDescription, slug) : undefined

  if (!item || !longform) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center font-['Poppins']">
        <p className="text-gray-600 mb-6">We could not find that service page.</p>
        <Link to="/services" className="text-brand-forest font-semibold hover:text-brand-olive transition-colors">
          View all services
        </Link>
      </div>
    )
  }

  return (
    <CatalogDetailPage
      kind="service"
      slug={slug}
      title={item.title}
      shortDescription={item.shortDescription}
      image={item.image}
      imageAlt={item.imageAlt}
      intro={item.intro}
      highlights={item.highlights}
      longform={longform}
    />
  )
}
