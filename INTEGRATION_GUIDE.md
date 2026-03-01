# HomeQuickNav Integration Guide

## 4) Drop-in Integration Example

### Recommended Placement
Insert the navigation **after the "Essence of Nirvana" section** and **before the Service component**.

This placement works because:
- Users have context about the clinic
- Natural transition from "what we do" to "explore specific areas"
- Breaks up long content sections
- Provides clear next actions

### Integration Code

```tsx
// In Home.tsx, add import at top:
import { HomeQuickNavSplit } from '../components/HomeQuickNav'
// OR for pills variant:
// import { HomeQuickNavPills } from '../components/HomeQuickNav'

// Then insert after the "Essence of Nirvana" content block:

<motion.div
  className="w-full lg:w-2/3 space-y-6"
  initial={{ opacity: 0, x: 100, y: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* ...existing Essence of Nirvana content... */}
</motion.div>

{/* ADD THIS: Quick Navigation */}
<HomeQuickNavSplit />

{/* Section Break */}
<div className="flex items-center justify-center gap-6 py-8">
  {/* ...existing section break... */}
</div>
```

### Full Integration (Exact Line Numbers)

Insert between line 157 (after closing motion.div) and line 160 (before Section Break):

```tsx
</motion.div>
</div>

{/* Quick Navigation - NEW */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <HomeQuickNavSplit />
</motion.div>

{/* Section Break */}
<div className="flex items-center justify-center gap-6 py-8">
```

---

## 5) Style Variants

### Variant A: Minimal Pills (Segmented Control)
```tsx
import { HomeQuickNavPills } from '../components/HomeQuickNav'

// Usage:
<HomeQuickNavPills />
```

**Characteristics:**
- Horizontal pill-shaped links
- Subtle borders, no shadows
- Icon + label + arrow
- 2x2 grid on mobile
- Minimal visual weight
- Best for: Clean, minimal aesthetic

### Variant B: Split Panel (List + Preview)
```tsx
import { HomeQuickNavSplit } from '../components/HomeQuickNav'

// Usage:
<HomeQuickNavSplit />
```

**Characteristics:**
- Left: Vertical link list with descriptions
- Right: Preview panel (desktop only)
- Hover changes preview content
- Border-left accent on active item
- Collapses to list on mobile
- Best for: Premium, informative experience

---

## Accessibility Notes

✅ **Keyboard Navigation:**
- All links are focusable with Tab
- Focus states with ring-2 outline
- Enter/Space to activate links

✅ **Screen Readers:**
- Semantic `<nav>` with aria-label
- Proper heading hierarchy
- aria-current for active state
- aria-label with descriptions
- aria-hidden on decorative icons

✅ **WCAG Compliance:**
- Color contrast ratio > 4.5:1
- Focus indicators visible
- Touch targets > 44x44px
- No motion for reduced-motion users (add if needed)

---

## Responsive Behavior

### Pills Variant:
- **Desktop (≥768px):** Horizontal row, 4 items
- **Tablet (640-767px):** 2x2 grid
- **Mobile (<640px):** Vertical stack

### Split Panel Variant:
- **Desktop (≥768px):** 2-column grid (list + preview)
- **Mobile (<768px):** List only, no preview panel

---

## Customization Options

### Change Colors:
```tsx
// In component, replace:
border-blue-600 → border-teal-600
bg-blue-50 → bg-teal-50
text-blue-700 → text-teal-700
```

### Add Icons (replace emoji):
```tsx
// Install lucide-react or heroicons
import { Pill, Stethoscope, Building, Camera } from 'lucide-react'

// Replace emoji with:
<Pill className="w-5 h-5" />
```

### Adjust Spacing:
```tsx
// Pills: Change py-12 to py-8 or py-16
// Split: Change py-16 to py-12 or py-20
```

---

## Performance Notes

- No external dependencies (uses TanStack Router Link)
- Minimal state (only activeIndex in Split variant)
- CSS transitions (GPU-accelerated)
- No images loaded (uses emoji placeholders)
- Lazy-load preview images if added later

---

## Next Steps

1. Copy `HomeQuickNav.tsx` to `/src/components/`
2. Import chosen variant in `Home.tsx`
3. Insert after "Essence of Nirvana" section
4. Wrap in motion.div for scroll animation (optional)
5. Test keyboard navigation and screen reader
6. Replace emoji with real icons if needed
7. Add preview images to Split variant (optional)
