'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

const STAR_RING: readonly (readonly [number, number])[] = [
  [12, 4.5], [15.75, 5.5], [18.5, 8.25], [19.5, 12], [18.5, 15.75], [15.75, 18.5],
  [12, 19.5], [8.25, 18.5], [5.5, 15.75], [4.5, 12], [5.5, 8.25], [8.25, 5.5],
]

/**
 * The ring of stars turns one notch.
 *
 * The ring of twelve stars of the European flag, for the euro area. Dots
 * rather than stars: a five-pointed star is 1.5 px wide at this size. The
 * ring turns one notch and lands back on the same drawing. An original
 * drawing, not a lucide shape.
 */
export const EuroArea = /* @__PURE__ */ makeIcon(
  'EuroArea',
  STAR_RING.map(([cx, cy]) => ({ tag: 'circle' as const, cx, cy, r: 1.6, fill: 'currentColor', stroke: 'none' })),
  { default: { group: spin(30, 0.5) } },
)
