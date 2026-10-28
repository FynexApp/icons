import fs from 'node:fs'
import path from 'node:path'

import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import * as Icons from '../src'
import { ICON_CATALOG, ICON_FAMILIES } from '../src/catalog'
import type { AnimatedIcon } from '../src/make-icon'

const ROOT = path.resolve(__dirname, '..')
const ICON_DIR = path.join(ROOT, 'src/icons')

const exported = Object.entries(Icons).filter(
  (entry): entry is [string, AnimatedIcon] => typeof entry[1] === 'function' && 'parts' in entry[1],
)

/** What the grammar allows: transforms, opacity, path length. */
const ALLOWED = new Set(['x', 'y', 'scale', 'scaleX', 'scaleY', 'rotate', 'opacity', 'pathLength', 'transition'])

type Transition = { duration?: number; delay?: number } & Record<string, { duration?: number } | number | undefined>

/** Total length of a gesture, delay included, whatever the shape of the transition. */
function totalDuration(transition: Transition | undefined) {
  if (!transition) return 0
  const own = (transition.duration ?? 0) + (transition.delay ?? 0)
  const nested = Object.values(transition).map((value) => (typeof value === 'object' && value ? (value.duration ?? 0) : 0))
  return Math.max(own, ...nested)
}

describe('icon set', () => {
  it('exports a component for every catalog entry, and nothing outside the catalog', () => {
    const canonical = new Set(exported.map(([, icon]) => icon.displayName))
    expect([...canonical].sort()).toEqual(ICON_CATALOG.map((item) => item.name).sort())
    for (const item of ICON_CATALOG) {
      const icon = (Icons as Record<string, unknown>)[item.name]
      expect(icon, item.name).toBeDefined()
      expect(ICON_FAMILIES[item.family], item.name).toBeDefined()
      expect(item.motion.length, `${item.name} describes its motion`).toBeGreaterThan(8)
      for (const alias of item.aliases) expect((Icons as Record<string, unknown>)[alias], alias).toBe(icon)
    }
  })

  it('has unique names, slugs and aliases', () => {
    const names = ICON_CATALOG.flatMap((item) => [item.name, ...item.aliases])
    expect(new Set(names).size).toBe(names.length)
    const slugs = ICON_CATALOG.map((item) => item.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('has one file per catalog entry, named after its slug', () => {
    const files = fs
      .readdirSync(ICON_DIR)
      .filter((file) => file !== 'index.ts')
      .map((file) => file.replace(/\.tsx$/, ''))
      .sort()
    expect(files).toEqual(ICON_CATALOG.map((item) => item.slug).sort())
    for (const item of ICON_CATALOG) {
      const source = fs.readFileSync(path.join(ICON_DIR, `${item.slug}.tsx`), 'utf8')
      expect(source, item.slug).toContain(`export const ${item.name} = /* @__PURE__ */ makeIcon(`)
    }
  })

  it('keeps every icon file self-contained, client-side and free of lucide', () => {
    for (const file of fs.readdirSync(ICON_DIR).filter((name) => name.endsWith('.tsx'))) {
      const source = fs.readFileSync(path.join(ICON_DIR, file), 'utf8')
      expect(source.startsWith("'use client'\n"), file).toBe(true)
      const imports = [...source.matchAll(/from '([^']+)'/g)].map((match) => match[1])
      for (const specifier of imports) expect(['../make-icon', '../motions'], `${file}: ${specifier}`).toContain(specifier)
    }
  })

  it.each(exported)('%s renders on the 24 grid with at least one animated part', (name, Icon) => {
    const { container } = render(<Icon />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('viewBox')).toBe('0 0 24 24')
    expect(svg.getAttribute('width')).toBe('24')
    expect(svg.children.length).toBe(Icon.parts.length)
    expect(Icon.parts.length).toBeGreaterThan(0)
    expect(Icon.displayName, name).toBeTruthy()

    const animations = Icon.animations.default
    const partNames = new Set(Icon.parts.map((part) => part.part).filter(Boolean))
    const animated = Object.keys(animations)
    expect(animated.length, `${name} has at least one animated part`).toBeGreaterThan(0)
    // No orphan variant, no part without a variant.
    for (const key of animated) expect(key === 'group' || partNames.has(key), `${name}.${key}`).toBe(true)
    for (const part of partNames) expect(animations[part as string], `${name}.${part}`).toBeDefined()

    for (const [key, variants] of Object.entries(animations)) {
      const animate = variants.animate as Record<string, unknown>
      const initial = variants.initial as Record<string, unknown>
      expect(animate, `${name}.${key}`).toBeDefined()
      for (const property of Object.keys(animate)) expect(ALLOWED.has(property), `${name}.${key}.${property}`).toBe(true)
      // Every animated property has its resting value, otherwise the icon never comes back.
      for (const property of Object.keys(animate)) {
        if (property !== 'transition') expect(initial[property], `${name}.${key}.${property} at rest`).toBeDefined()
      }
      const duration = totalDuration(animate.transition as Transition)
      expect(duration, `${name}.${key} lasts ${duration}s`).toBeGreaterThanOrEqual(0.2)
      expect(duration, `${name}.${key} lasts ${duration}s`).toBeLessThanOrEqual(0.8)
    }
  })
})
