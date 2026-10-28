'use client'

import { makeIcon } from '../make-icon'
import { draw, move } from '../motions'

/** The arrow rises, the rows draw themselves. */
export const ArrowUpNarrowWide = /* @__PURE__ */ makeIcon(
  'ArrowUpNarrowWide',
  [
    { tag: 'path', d: 'm3 8 4-4 4 4', part: 'arrow' },
    { tag: 'path', d: 'M7 4v16', part: 'arrow' },
    { tag: 'path', d: 'M11 12h4', part: 'r1' },
    { tag: 'path', d: 'M11 16h7', part: 'r2' },
    { tag: 'path', d: 'M11 20h10', part: 'r3' },
  ],
  { default: { arrow: move(0, -1.5), r1: draw(0, 0.25), r2: draw(0.07, 0.25), r3: draw(0.14, 0.3) } },
)
export { ArrowUpNarrowWide as SortAsc }
