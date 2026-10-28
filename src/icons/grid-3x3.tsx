'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The grid lines draw themselves. */
export const Grid3x3 = /* @__PURE__ */ makeIcon(
  'Grid3x3',
  [
    { tag: 'rect', width: 18, height: 18, x: 3, y: 3, rx: 2 },
    { tag: 'path', d: 'M3 9h18', part: 'h1' },
    { tag: 'path', d: 'M3 15h18', part: 'h2' },
    { tag: 'path', d: 'M9 3v18', part: 'v1' },
    { tag: 'path', d: 'M15 3v18', part: 'v2' },
  ],
  { default: { h1: draw(0, 0.25), h2: draw(0.08, 0.25), v1: draw(0.16, 0.25), v2: draw(0.24, 0.25) } },
)
export { Grid3x3 as Grid, Grid3x3 as Grid3X3 }
