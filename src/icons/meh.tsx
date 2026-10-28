'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The eyes blink. */
export const Meh = /* @__PURE__ */ makeIcon(
  'Meh',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'line', x1: 8, x2: 16, y1: 15, y2: 15 },
    { tag: 'line', x1: 9, x2: 9.01, y1: 9, y2: 9, part: 'eyes' },
    { tag: 'line', x1: 15, x2: 15.01, y1: 9, y2: 9, part: 'eyes' },
  ],
  { default: { eyes: blink() } },
)
