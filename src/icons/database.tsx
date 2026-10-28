'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The top disk lifts. */
export const Database = /* @__PURE__ */ makeIcon(
  'Database',
  [
    { tag: 'ellipse', cx: 12, cy: 5, rx: 9, ry: 3, part: 'top' },
    { tag: 'path', d: 'M3 5V19A9 3 0 0 0 21 19V5' },
    { tag: 'path', d: 'M3 12A9 3 0 0 0 21 12', part: 'mid' },
  ],
  { default: { top: move(0, -1), mid: move(0, 1, 0.4, 0.08) } },
)
