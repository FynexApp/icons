import fs from 'node:fs'
import path from 'node:path'

import { describe, expect, it } from 'vitest'

const ROOT = path.resolve(__dirname, '..')
const SKIP = new Set(['node_modules', '.git', 'dist', 'public', 'coverage', 'package-lock.json'])

function files(dir: string, out: string[] = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files(full, out)
    else if (/\.(tsx?|js|json|md|ya?ml)$|^LICENSE/.test(entry.name)) out.push(full)
  }
  return out
}

const NON_ASCII = /[^\t\n\r\u0020-\u007e]/
const CATALOG = path.join(ROOT, 'src/catalog.ts')

/** The source without the contents of its single and double quoted string literals. */
function withoutStrings(source: string) {
  return source.replace(/'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"/g, "''")
}

/**
 * What must be ASCII in a file. The catalog carries French keywords and
 * motion sentences, which keep their accents: only its string literals are
 * exempted, so that its code and comments stay in plain English.
 */
function asciiPart(file: string, source: string) {
  return file === CATALOG ? withoutStrings(source) : source
}

describe('repository text', () => {
  const all = files(ROOT)

  it('scans the sources, the docs and the registry', () => {
    // Guard of the test itself: a broken walk would make it pass on nothing.
    expect(all.length).toBeGreaterThan(180)
  })

  it('uses no em dash or en dash', () => {
    const offenders = all.filter((file) => /[\u2013\u2014]/.test(fs.readFileSync(file, 'utf8')))
    expect(offenders.map((file) => path.relative(ROOT, file))).toEqual([])
  })

  it('is plain ASCII (English only), except the French data of the catalog and the website', () => {
    // The demo website is bilingual on purpose: its French copy lives in site/src.
    const bilingual = path.join(ROOT, 'site', 'src') + path.sep
    const offenders = all
      .filter((file) => !file.startsWith(bilingual))
      .filter((file) => NON_ASCII.test(asciiPart(file, fs.readFileSync(file, 'utf8'))))
    expect(offenders.map((file) => path.relative(ROOT, file))).toEqual([])
  })

  it('exempts only the string literals of the catalog', () => {
    const catalog = fs.readFileSync(CATALOG, 'utf8')
    // Guard of the exemption itself: the French data is there, and its code and comments stay ASCII.
    expect(NON_ASCII.test(catalog)).toBe(true)
    expect(NON_ASCII.test(withoutStrings(catalog))).toBe(false)
  })
})
