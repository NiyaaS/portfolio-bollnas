import { copyFile, mkdir, writeFile } from 'node:fs/promises'

// GitHub Pages serves files directly and has no SPA rewrite setting.
// Give the contact route its own entry so direct links and refreshes work.
await mkdir('dist/kontakt', { recursive: true })
await copyFile('dist/index.html', 'dist/kontakt/index.html')
await copyFile('dist/index.html', 'dist/404.html')
await writeFile('dist/.nojekyll', '')
