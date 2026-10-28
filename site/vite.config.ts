import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

import { defineConfig, type Plugin } from 'vite'

import { ICON_CATALOG } from '../src/catalog.ts'

const repo = (path: string) => fileURLToPath(new URL(`../${path}`, import.meta.url))

/**
 * The facts the head of index.html repeats (title, description, Open Graph,
 * JSON-LD), written once here: `__ICON_COUNT__` is the size of the catalog,
 * `__VERSION__` the version of the package.
 */
function headFacts(): Plugin {
  const { version } = JSON.parse(fs.readFileSync(repo('package.json'), 'utf8')) as { version: string }
  const facts: Record<string, string> = { __ICON_COUNT__: String(ICON_CATALOG.length), __VERSION__: version }
  return {
    name: 'fynex-head-facts',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        for (const [token, value] of Object.entries(facts)) html = html.replaceAll(token, value)
        return html
      },
    },
  }
}

// The site runs the repository's own sources, never a published build of @fynex/icons.
export default defineConfig(({ isSsrBuild }) => ({
  root: fileURLToPath(new URL('.', import.meta.url)),
  // Served at the root of the custom domain https://icons.fynexapp.com (GitHub Pages).
  base: '/',
  plugins: [headFacts()],
  resolve: {
    alias: [
      { find: /^@fynex\/icons\/catalog$/, replacement: repo('src/catalog.ts') },
      { find: /^@fynex\/icons$/, replacement: repo('src/index.ts') },
    ],
    dedupe: ['react', 'react-dom', 'motion'],
  },
  build: {
    // The server build (`vite build --ssr src/entry-server.tsx`) only feeds the prerender
    // script, which deletes it once the page is written: it never ships.
    outDir: isSsrBuild ? 'dist/.ssr' : 'dist',
    emptyOutDir: true,
    copyPublicDir: !isSsrBuild,
    rolldownOptions: {
      // The icons and motion start with "use client" for React Server Components; a client bundle can drop it.
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('"use client"')) return
        warn(warning)
      },
    },
  },
}))
