/**
 * Adds the `.js` extension to the relative imports of the compiled output.
 *
 * The sources import without extension (`./make-icon`), so that the very
 * same files can be copied into an app by the shadcn CLI. Node's ESM
 * resolution, however, needs full specifiers: this pass rewrites
 * `./make-icon` into `./make-icon.js`, and a directory into `./icons/index.js`,
 * in the `.js` files and in the `.d.ts` declarations.
 *
 *   node scripts/fix-esm-extensions.ts dist
 */
import fs from 'node:fs'
import path from 'node:path'

const SPECIFIER = /(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+)(['"])(\.{1,2}\/[^'"]*)\2/g

function resolve(file: string, specifier: string): string {
  if (/\.(js|json)$/.test(specifier)) return specifier
  const base = path.resolve(path.dirname(file), specifier)
  if (fs.existsSync(`${base}.js`)) return `${specifier}.js`
  if (fs.existsSync(path.join(base, 'index.js'))) return `${specifier}/index.js`
  throw new Error(`${file}: cannot resolve ${specifier}`)
}

function walk(dir: string, visit: (file: string) => void) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, visit)
    else if (/\.(js|d\.ts)$/.test(entry.name)) visit(full)
  }
}

const root = process.argv[2]
if (!root) {
  console.error('usage: node scripts/fix-esm-extensions.ts <dir>')
  process.exit(2)
}
let rewritten = 0
walk(path.resolve(root), (file) => {
  const source = fs.readFileSync(file, 'utf8')
  const next = source.replace(SPECIFIER, (_, keyword: string, quote: string, specifier: string) => {
    rewritten++
    return `${keyword}${quote}${resolve(file, specifier)}${quote}`
  })
  if (next !== source) fs.writeFileSync(file, next)
})
console.log(`fix-esm-extensions: ${rewritten} relative specifiers checked in ${root}`)
