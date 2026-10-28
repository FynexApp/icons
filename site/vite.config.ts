import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

const repo = (path: string) => fileURLToPath(new URL(`../${path}`, import.meta.url))

// The site runs the repository's own sources, never a published build of @fynex/icons.
export default defineConfig(({ isSsrBuild }) => ({
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
