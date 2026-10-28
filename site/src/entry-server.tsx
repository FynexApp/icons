import { prerenderToNodeStream } from 'react-dom/static'

import { App } from './App'

/**
 * The page as static HTML, for the build (site/scripts/prerender.ts). The App
 * renders in English and reads no browser API during its first render, so the
 * client hydrates exactly this markup.
 */
export async function render(): Promise<string> {
  const { prelude } = await prerenderToNodeStream(<App />)
  let html = ''
  for await (const chunk of prelude) html += typeof chunk === 'string' ? chunk : chunk.toString('utf8')
  return html
}
