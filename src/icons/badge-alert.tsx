'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The badge turns one notch. */
export const BadgeAlert = /* @__PURE__ */ makeIcon(
  'BadgeAlert',
  [
    { tag: 'path', d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z', part: 'badge' },
    { tag: 'line', x1: 12, x2: 12, y1: 8, y2: 12 },
    { tag: 'line', x1: 12, x2: 12.01, y1: 16, y2: 16 },
  ],
  { default: { badge: turn(45) } },
)
