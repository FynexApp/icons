/**
 * Writes the prerendered page into site/dist/index.html, so that crawlers and
 * link previews read the real content (headline, families, icon names)
 * instead of an empty #root. The client then hydrates that HTML.
 *
 * Runs after the two builds of `npm run site:build`:
 *   vite build site                                 the client, into site/dist
 *   vite build site --ssr src/entry-server.tsx      the server entry, into site/dist/.ssr
 *   node site/scripts/prerender.ts                  this script
 *
 * The server build is deleted at the end: it never ships with the site.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const SSR = path.join(DIST, '.ssr')
const PAGE = path.join(DIST, 'index.html')
const EMPTY_ROOT = '<div id="root"></div>'

const entry = path.join(SSR, 'entry-server.js')
if (!fs.existsSync(entry)) throw new Error(`No server build at ${path.relative(process.cwd(), entry)}: run the SSR build first.`)

const { render } = (await import(pathToFileURL(entry).href)) as { render: () => Promise<string> }
const app = await render()

const page = fs.readFileSync(PAGE, 'utf8')
if (page.split(EMPTY_ROOT).length !== 2) throw new Error(`${EMPTY_ROOT} must appear exactly once in index.html`)
// No whitespace around the markup: hydration compares it node by node.
fs.writeFileSync(PAGE, page.replace(EMPTY_ROOT, () => `<div id="root">${app}</div>`))
fs.rmSync(SSR, { recursive: true, force: true })

console.log(`prerendered ${path.relative(process.cwd(), PAGE)} (${Math.round(app.length / 1024)} kB of markup)`)
