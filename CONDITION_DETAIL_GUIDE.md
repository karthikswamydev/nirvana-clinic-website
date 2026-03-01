# Condition Detail Page - Implementation Guide

## Components Created

1. **Breadcrumb.tsx** - Sticky breadcrumb navigation
2. **AnchorNav.tsx** - Left sidebar anchor navigation with scroll spy
3. **ConditionDetail.tsx** - Full condition detail page layout

## Key Features

### ✅ No Cards
- Clean editorial layout
- Vertical sections with subtle separators
- Border-left accents for therapies
- Generous whitespace

### ✅ Breadcrumb Navigation
- Sticky at top
- Glassmorphism effect (backdrop-blur)
- Accessible with aria-label
- Smooth transitions

### ✅ Anchor Navigation
- Sticky left sidebar
- Auto-highlights active section (IntersectionObserver)
- Smooth scroll to sections
- Active state with emerald accent

### ✅ Content Sections
- Overview
- Symptoms (bullet list with dots)
- Root Causes (bullet list)
- Our Approach (paragraph)
- Therapies (border-left accent list)
- Expected Outcomes (checkmark icons)
- CTA (gradient background, centered)

### ✅ Design Elements
- **Typography**: Large, bold headings (text-5xl/6xl)
- **Spacing**: 16-unit gaps between sections
- **Separators**: Border-bottom on section titles
- **Accents**: Emerald-600 for active states
- **Animations**: Fade-in on scroll (Framer Motion)

## Usage

### 1. Add Route
```tsx
// In your router config
{
  path: '/conditions/:conditionId',
  component: ConditionDetailPage
}
```

### 2. Link from Conditions Page
```tsx
<Link to={`/conditions/${conditionSlug}`}>
  {conditionName}
</Link>
```

### 3. Create Condition Data
```tsx
const conditionData = {
  name: 'Condition Name',
  tagline: 'Short description',
  overview: '...',
  symptoms: ['...'],
  rootCauses: ['...'],
  approach: '...',
  therapies: [{ name: '...', description: '...' }],
  outcomes: ['...']
}
```

## Responsive Behavior

- **Desktop (≥1024px)**: 2-column layout (nav + content)
- **Tablet/Mobile (<1024px)**: Single column, nav hidden

## Accessibility

- ✅ Semantic HTML (nav, section, main, aside)
- ✅ ARIA labels on breadcrumb
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Scroll-margin for anchor links

## Customization

### Change Accent Color
Replace `emerald-600` with your brand color:
```tsx
className="text-emerald-600" → className="text-teal-600"
```

### Adjust Section Spacing
```tsx
className="space-y-16" → className="space-y-12" // Tighter
className="space-y-16" → className="space-y-20" // Looser
```

### Add More Sections
```tsx
const sections = [
  ...existing,
  { id: 'faqs', label: 'FAQs' }
]

<Section id="faqs" title="Frequently Asked Questions">
  {/* Content */}
</Section>
```

## Why This Works Better Than Cards

1. **Depth over breadth**: Users get comprehensive information in one place
2. **Clinical credibility**: Reads like a medical document, not marketing
3. **Better engagement**: Scroll-based reading is more natural than clicking cards
4. **Information hierarchy**: Clear structure with anchor navigation
5. **Professional aesthetic**: Clean, spacious, premium feel
6. **Accessibility**: Easier to navigate with keyboard and screen readers
7. **Mobile-friendly**: Vertical scroll works better than card grids on mobile

## Next Steps

1. Create condition data files (JSON or TypeScript)
2. Build dynamic routing based on condition slug
3. Add SEO meta tags per condition
4. Implement related conditions section (optional)
5. Add print stylesheet for clinical reference
