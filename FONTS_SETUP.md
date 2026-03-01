# Google Fonts Setup

Add this to your `index.html` in the `<head>` section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

Or add to your CSS/Tailwind config:

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
```

## Fonts Used:
- **Plus Jakarta Sans** - Headlines (modern, premium)
- **Inter** - Body text (clean, readable)

Replace all `font-['Poppins']` with `font-['Inter']` throughout your app for consistency.
