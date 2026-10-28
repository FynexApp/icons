'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The frown draws itself. */
export const Frown = /* @__PURE__ */ makeIcon(
  'Frown',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'M16 16s-1.5-2-4-2-4 2-4 2', part: 'mouth' },
    { tag: 'line', x1: 9, x2: 9.01, y1: 9, y2: 9 },
    { tag: 'line', x1: 15, x2: 15.01, y1: 9, y2: 9 },
  ],
  { default: { mouth: draw(0, 0.35) } },
)
