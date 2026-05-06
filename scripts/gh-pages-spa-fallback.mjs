/**
 * GitHub Pages has no server rewrite for SPA routes. Unknown paths return 404
 * unless 404.html exists — then GH Pages serves that file. Copying index.html
 * lets the app boot and TanStack Router can render /contact, etc. after refresh.
 */
import { copyFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const index = join(root, 'dist', 'index.html')
const fallback = join(root, 'dist', '404.html')

if (!existsSync(index)) {
  console.error('gh-pages-spa-fallback: dist/index.html missing — run vite build first')
  process.exit(1)
}
copyFileSync(index, fallback)
console.log('gh-pages-spa-fallback: wrote dist/404.html')
