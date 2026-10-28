'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The two checks draw themselves. */
export const ListChecks = /* @__PURE__ */ makeIcon(
  'ListChecks',
  [
    { tag: 'path', d: 'm3 17 2 2 4-4', part: 'c2' },
    { tag: 'path', d: 'm3 7 2 2 4-4', part: 'c1' },
    { tag: 'path', d: 'M13 6h8' },
    { tag: 'path', d: 'M13 12h8' },
    { tag: 'path', d: 'M13 18h8' },
  ],
  { default: { c1: draw(0, 0.3), c2: draw(0.15, 0.3) } },
)
