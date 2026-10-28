import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

const repo = (path: string) => fileURLToPath(new URL(`../${path}`, import.meta.url))

// The site runs the repository's own sources, never a published build of @fynex/icons.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  // Served at the root of the custom domain https://icons.fynexapp.com (GitHub Pages).
  base: '/',
  resolve: {
    alias: [
      { find: /^@fynex\/icons\/catalog$/, replacement: repo('src/catalog.ts') },
      { find: /^@fynex\/icons$/, replacement: repo('src/index.ts') },
    ],
    dedupe: ['react', 'react-dom', 'motion'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rolldownOptions: {
      // The icons and motion start with "use client" for React Server Components; a client bundle can drop it.
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('"use client"')) return
        warn(warning)
      },
    },
  },
})
