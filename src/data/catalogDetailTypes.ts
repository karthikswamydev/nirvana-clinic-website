/**
 * Long-form sections for treatment and service detail pages.
 * Copy is original for Nirvana Integrated Clinic (not sourced from third-party sites).
 * Use **double asterisks** around short phrases in body strings for inline highlights.
 */

export type LongformSubsection = {
  subheading: string
  /** Plain text; wrap phrases with **like this** for emphasis */
  body: string
}

export type CatalogLongformSections = {
  understanding: LongformSubsection[]
  keyComponents: LongformSubsection[]
  approaches: LongformSubsection[]
  integration: LongformSubsection[]
  conclusion: LongformSubsection[]
}

export const CATALOG_DETAIL_SECTIONS = [
  { key: 'understanding', title: 'Understanding' },
  { key: 'keyComponents', title: 'Key components' },
  { key: 'approaches', title: 'Approaches' },
  { key: 'integration', title: 'Integration' },
  { key: 'conclusion', title: 'Conclusion' },
] as const satisfies ReadonlyArray<{
  key: keyof CatalogLongformSections
  title: string
}>
