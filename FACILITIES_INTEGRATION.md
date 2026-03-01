# Facilities Section Integration

## 1. Add Images to /public folder

Create this folder structure:
```
/public
  /facilities
    - hydrotherapy.jpg
    - consultation.jpg
    - therapy.jpg
    - yoga.jpg
    - treatment.jpg
    - environment.jpg
```

## 2. Import in Home.tsx

```tsx
// Add to imports at top of Home.tsx
import { FacilitiesSection } from '../components/FacilitiesSection'
```

## 3. Insert in Home Page

**Recommended placement:** After the Service component, before Footer

```tsx
{/* What Sets Us Apart - Journey Map */}
<Service />

{/* Facilities Section - NEW */}
<FacilitiesSection />

</section>
</main>
<Footer />
```

## 4. Full Integration Example

```tsx
// In Home.tsx, around line 170-180:

{/* What Sets Us Apart - Journey Map */}
<Service />
</section>

{/* Facilities Section */}
<FacilitiesSection />

</main>
<Footer />
```

## Design Features

✅ **Full-bleed image backgrounds** (not cards)
✅ **Dark gradient overlay** for text readability
✅ **Bottom-left text placement** (premium look)
✅ **Hover zoom effect** (subtle, 1.05x scale)
✅ **2-column grid** on desktop, stacked on mobile
✅ **Accessible** (focus rings, sr-only text, aria-labels)
✅ **Responsive** (h-80 = 320px height, adjusts on mobile)

## Customization Options

### Change image height:
```tsx
// In component, change h-80 to:
h-64  // 256px (shorter)
h-96  // 384px (taller)
```

### Adjust gradient darkness:
```tsx
// Change overlay gradient:
from-black/70 → from-black/80 (darker)
from-black/70 → from-black/60 (lighter)
```

### Change text alignment:
```tsx
// For center-aligned text:
<div className="absolute inset-0 flex items-center justify-center p-8 text-white text-center">

// For top-left:
<div className="absolute top-0 left-0 right-0 p-8 text-white">
```

### Add 3-column layout on large screens:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## Image Requirements

- **Format:** JPG or WebP
- **Size:** 1200x800px minimum (3:2 aspect ratio)
- **Quality:** High resolution, well-lit
- **Tone:** Calm, professional, clean
- **Avoid:** Stock photos with watermarks, overly staged shots

## Accessibility Notes

✅ Each panel is wrapped in an `<a>` tag linking to /facilities
✅ Focus ring visible on keyboard navigation
✅ Screen reader text with aria-label
✅ Sufficient color contrast (white text on dark gradient)

## Performance Tips

- Optimize images (compress to ~200-300KB each)
- Use WebP format for better compression
- Consider lazy loading if many images
- Add loading="lazy" if using <img> tags

## Alternative: Without Images (Placeholder)

If you don't have images yet, use gradient backgrounds:

```tsx
// Replace backgroundImage style with:
className="absolute inset-0 bg-linear-to-br from-teal-600 to-blue-700 transition-transform duration-700 group-hover:scale-105"
```

Use different gradient colors for each facility:
- Hydrotherapy: `from-blue-600 to-cyan-600`
- Consultation: `from-teal-600 to-green-600`
- Therapy: `from-green-600 to-emerald-600`
- Yoga: `from-purple-600 to-indigo-600`
- Treatment: `from-gray-600 to-slate-600`
- Environment: `from-emerald-600 to-teal-600`
