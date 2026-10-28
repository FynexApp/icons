'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow shoots off diagonally and returns. */
export const ArrowUpLeft = /* @__PURE__ */ makeIcon(
  'ArrowUpLeft',
  [
    { tag: 'path', d: 'M7 17V7h10' },
    { tag: 'path', d: 'M17 17 7 7' },
  ],
  { default: { group: move(-1.5, -1.5) } },
)
