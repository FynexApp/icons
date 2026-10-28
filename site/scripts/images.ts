/**
 * Renders the images of the site head into site/public, from their sources:
 * - favicon.ico (16, 32 and 48 px) from favicon.svg, the mark of the header bar;
 * - apple-touch-icon.png (180 px), icon-192.png and icon-512.png, the same mark
 *   on a full square (the platforms round the corners themselves);
 * - og.png (1200 x 630), the link preview: the hero painting, the name, the
 *   install command and real icons of the package.
 *
 * The outputs are committed: run this again when the mark, the painting, the
 * icon count or the copy changes. It needs the package build (`npm run build`,
 * the icons are rendered from dist/) and Playwright, which is not a dependency
 * of this repository: point PLAYWRIGHT_FROM at a package.json that has it.
 *
 *   npm run build
 *   PLAYWRIGHT_FROM=/path/to/a/project/package.json node site/scripts/images.ts
 *
 * The fonts are the site's own (Google Fonts, the same families and weights as
 * site/index.html), so the preview needs the network.
 */
import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { createElement, type ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { ICON_CATALOG } from '../../src/catalog.ts'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const PUBLIC = path.join(ROOT, 'site', 'public')

const INK = '#0a0806'
const CANDLE = '#f6dfae'
const SAND = '#d6bf9e'
const ASH = '#8f8372'
const RULE = 'rgba(214, 191, 158, 0.28)'

const FONTS =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Poppins:wght@300&family=JetBrains+Mono:wght@400&display=block'

/** The finance icons of the preview, from the hero of the site. */
const PREVIEW_ICONS = ['Coins', 'Scale', 'ChartCandlestick', 'Landmark', 'PiggyBank', 'Wallet', 'TrendingUp', 'Gem', 'Crown', 'Banknote']

type Page = {
  setViewportSize(size: { width: number; height: number }): Promise<void>
  setContent(html: string, options?: { waitUntil?: 'load' | 'networkidle' }): Promise<void>
  evaluate<T>(fn: () => T | Promise<T>): Promise<T>
  screenshot(options: { path?: string; omitBackground?: boolean; type?: 'png' }): Promise<Buffer>
}
type Browser = { newPage(options?: { deviceScaleFactor?: number }): Promise<Page>; close(): Promise<void> }

const requireFrom = createRequire(process.env.PLAYWRIGHT_FROM ?? import.meta.url)
const { chromium } = requireFrom('playwright') as { chromium: { launch(): Promise<Browser> } }

const distEntry = path.join(ROOT, 'dist', 'index.js')
if (!fs.existsSync(distEntry)) throw new Error('No package build in dist/: run `npm run build` first.')
const Icons = (await import(pathToFileURL(distEntry).href)) as Record<
  string,
  ComponentType<{ size: number; strokeWidth: number; animateOnHover: boolean }> | undefined
>

const iconSvg = (name: string, size: number) => {
  const Icon = Icons[name]
  if (!Icon) throw new Error(`No icon ${name} in the package`)
  return renderToStaticMarkup(createElement(Icon, { size, strokeWidth: 1.5, animateOnHover: false }))
}

const shell = (body: string, css = '') =>
  `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent}${css}</style></head><body>${body}</body></html>`

/** The mark of favicon.svg on a full square, for the platforms that cut their own corners. */
const squareMark = fs.readFileSync(path.join(PUBLIC, 'favicon.svg'), 'utf8').replace(/ rx="[^"]*"/, '')

async function renderSvg(page: Page, svg: string, size: number) {
  await page.setViewportSize({ width: size, height: size })
  const sized = svg.replace('<svg ', `<svg width="${size}" height="${size}" `)
  await page.setContent(shell(sized, 'svg{display:block}'))
  return page.screenshot({ omitBackground: true, type: 'png' })
}

/** An .ico file that holds PNG images, which every current browser reads. */
function ico(images: { size: number; png: Buffer }[]) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)
  let offset = 6 + 16 * images.length
  const entries = images.map(({ size, png }) => {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0)
    entry.writeUInt8(size >= 256 ? 0 : size, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(png.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += png.length
    return entry
  })
  return Buffer.concat([header, ...entries, ...images.map((image) => image.png)])
}

function previewHtml() {
  const painting = `data:image/jpeg;base64,${fs.readFileSync(path.join(PUBLIC, 'art', 'hero.jpg')).toString('base64')}`
  const icons = PREVIEW_ICONS.map((name) => `<span>${iconSvg(name, 50)}</span>`).join('')
  const css = `
    html, body { width: 1200px; height: 630px; background: ${INK}; overflow: hidden; }
    body { position: relative; -webkit-font-smoothing: antialiased; }
    .painting { position: absolute; top: 0; right: 0; height: 630px; width: auto;
      -webkit-mask-image: linear-gradient(to right, transparent, #000 48%), linear-gradient(to bottom, transparent, #000 10%, #000 88%, transparent);
      -webkit-mask-composite: source-in; }
    .copy { position: absolute; top: 0; bottom: 0; left: 80px; width: 700px; display: flex; flex-direction: column; justify-content: center; }
    h1 { margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 300; font-size: 132px; line-height: 0.92; letter-spacing: -0.015em; color: ${CANDLE}; }
    p { margin: 26px 0 0; font-family: 'Poppins', sans-serif; font-weight: 300; font-size: 34px; line-height: 1.3; color: ${SAND}; }
    .icons { display: grid; grid-template-columns: repeat(5, 50px); gap: 22px 34px; margin-top: 40px; color: ${SAND}; }
    .icons svg { display: block; }
    .install { align-self: flex-start; margin-top: 42px; padding: 13px 22px; border: 1.5px solid ${RULE}; border-radius: 12px; font-family: 'JetBrains Mono', monospace; font-size: 30px; color: ${SAND}; }
    .install span { color: ${ASH}; margin-right: 16px; }`
  const body = `
    <img class="painting" src="${painting}" alt="">
    <div class="copy">
      <h1>Fynex Icons</h1>
      <p>${ICON_CATALOG.length} animated icons for React.<br>Open source, MIT.</p>
      <div class="icons">${icons}</div>
      <div class="install"><span>$</span>npm i @fynex/icons</div>
    </div>`
  return `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="${FONTS}"><style>html,body{margin:0;padding:0}${css}</style></head><body>${body}</body></html>`
}

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ deviceScaleFactor: 1 })

  const favicon = fs.readFileSync(path.join(PUBLIC, 'favicon.svg'), 'utf8')
  const sizes = [16, 32, 48]
  const pngs = []
  for (const size of sizes) pngs.push({ size, png: await renderSvg(page, favicon, size) })
  fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), ico(pngs))

  for (const [file, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]] as const) {
    fs.writeFileSync(path.join(PUBLIC, file), await renderSvg(page, squareMark, size))
  }

  await page.setViewportSize({ width: 1200, height: 630 })
  await page.setContent(previewHtml(), { waitUntil: 'networkidle' })
  const fonts = await page.evaluate(async () => {
    await document.fonts.ready
    return ['300 132px "Cormorant Garamond"', '300 34px Poppins', '400 30px "JetBrains Mono"'].map((font) => document.fonts.check(font))
  })
  if (fonts.includes(false)) throw new Error(`A font of the preview did not load: ${JSON.stringify(fonts)}`)
  await page.screenshot({ path: path.join(PUBLIC, 'og.png'), type: 'png' })
} finally {
  await browser.close()
}

console.log('wrote favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png and og.png in site/public')
