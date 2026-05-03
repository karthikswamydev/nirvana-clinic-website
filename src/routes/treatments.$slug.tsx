import { createFileRoute, Link } from '@tanstack/react-router'
import CatalogDetailPage from '../screens/CatalogDetailPage'
import { buildCatalogLongform } from '../data/longformBuilder'
import { getTreatmentBySlug } from '../data/treatmentsCatalog'

export const Route = createFileRoute('/treatments/$slug')({
  component: TreatmentSlugPage,
})

function TreatmentSlugPage() {
  const { slug } = Route.useParams()
  const item = getTreatmentBySlug(slug)
  const longform = item ? buildCatalogLongform('treatment', item.title, item.shortDescription, slug) : undefined

  if (!item || !longform) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center font-['Poppins']">
        <p className="text-gray-600 mb-6">We could not find that treatment page.</p>
        <Link to="/treatments" className="text-brand-forest font-semibold hover:text-brand-olive transition-colors">
          View all treatments
        </Link>
      </div>
    )
  }

  return (
    <CatalogDetailPage
      kind="treatment"
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
