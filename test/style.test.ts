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

  it('is plain ASCII (English only)', () => {
    const offenders = all.filter((file) => /[^\t\n\r\u0020-\u007e]/.test(fs.readFileSync(file, 'utf8')))
    expect(offenders.map((file) => path.relative(ROOT, file))).toEqual([])
  })
})
