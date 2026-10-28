'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two links move closer. */
export const Link2 = /* @__PURE__ */ makeIcon(
  'Link2',
  [
    { tag: 'path', d: 'M9 17H7A5 5 0 0 1 7 7h2', part: 'left' },
    { tag: 'path', d: 'M15 7h2a5 5 0 1 1 0 10h-2', part: 'right' },
    { tag: 'line', x1: 8, x2: 16, y1: 12, y2: 12 },
  ],
  { default: { left: move(1, 0), right: move(-1, 0) } },
)
