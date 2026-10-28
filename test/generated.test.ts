import fs from 'node:fs'
import path from 'node:path'

import { registrySchema } from 'shadcn/schema'
import { describe, expect, it } from 'vitest'

import { CORE_FILES, CORE_ITEM, DEFAULT_REGISTRY_URL, generatedFiles, ROOT } from '../scripts/generate.ts'
import { ICON_CATALOG } from '../src/catalog'

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'registry.json'), 'utf8')) as {
  items: {
    name: string
    dependencies?: string[]
    registryDependencies?: string[]
    files: { path: string; target?: string }[]
  }[]
}

describe('generated files', () => {
  it('are up to date with the catalog (run `npm run generate`)', () => {
    for (const [file, content] of Object.entries(generatedFiles())) {
      expect(fs.readFileSync(path.join(ROOT, file), 'utf8'), file).toBe(content)
    }
  })
})

describe('shadcn registry', () => {
  it('follows the official registry.json schema', () => {
    const result = registrySchema.safeParse(registry)
    expect(result.success, JSON.stringify(result.error?.issues.slice(0, 3))).toBe(true)
  })

  it('has one core item and one item per icon, in catalog order', () => {
    expect(registry.items[0].name).toBe(CORE_ITEM)
    expect(registry.items.slice(1).map((item) => item.name)).toEqual(ICON_CATALOG.map((entry) => entry.slug))
  })

  it('ships every core file, and only files that exist', () => {
    expect(registry.items[0].files.map((file) => path.basename(file.path))).toEqual(CORE_FILES)
    const sources = fs.readdirSync(path.join(ROOT, 'src')).filter((file) => /\.tsx?$/.test(file))
    const core = sources.filter((file) => !['index.ts', 'catalog.ts'].includes(file)).sort()
    expect([...CORE_FILES].sort()).toEqual(core)
    for (const item of registry.items) {
      for (const file of item.files) expect(fs.existsSync(path.join(ROOT, file.path)), file.path).toBe(true)
    }
  })

  it('makes every icon depend on motion and on the core item by URL', () => {
    for (const item of registry.items.slice(1)) {
      expect(item.dependencies, item.name).toEqual(['motion'])
      // A bare name would resolve to a built-in shadcn item, not ours.
      expect(item.registryDependencies, item.name).toEqual([`${DEFAULT_REGISTRY_URL}/${CORE_ITEM}.json`])
    }
  })

  it('installs the icons next to the core, so that their relative imports resolve', () => {
    const coreTargets = registry.items[0].files.map((file) => file.target!)
    for (const target of coreTargets) expect(target).toMatch(/^@components\/fynex-icons\/[\w-]+\.tsx?$/)
    for (const item of registry.items.slice(1)) {
      expect(item.files).toHaveLength(1)
      expect(item.files[0].target).toBe(`@components/fynex-icons/icons/${item.name}.tsx`)
    }
  })
})
