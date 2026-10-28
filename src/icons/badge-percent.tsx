'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The badge turns one notch. */
export const BadgePercent = /* @__PURE__ */ makeIcon(
  'BadgePercent',
  [
    { tag: 'path', d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z', part: 'badge' },
    { tag: 'path', d: 'm15 9-6 6' },
    { tag: 'path', d: 'M9 9h.01' },
    { tag: 'path', d: 'M15 15h.01' },
  ],
  { default: { badge: turn(45) } },
)
