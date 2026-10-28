'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The table rows draw themselves. */
export const TableProperties = /* @__PURE__ */ makeIcon(
  'TableProperties',
  [
    { tag: 'path', d: 'M15 3v18', part: 'col' },
    { tag: 'rect', width: 18, height: 18, x: 3, y: 3, rx: 2 },
    { tag: 'path', d: 'M3 9h18', part: 'r1' },
    { tag: 'path', d: 'M3 15h18', part: 'r2' },
  ],
  { default: { r1: draw(0, 0.3), r2: draw(0.08, 0.3), col: draw(0.16, 0.3) } },
)
