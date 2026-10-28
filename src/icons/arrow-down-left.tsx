'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow shoots off diagonally and returns. */
export const ArrowDownLeft = /* @__PURE__ */ makeIcon(
  'ArrowDownLeft',
  [
    { tag: 'path', d: 'M17 7 7 17' },
    { tag: 'path', d: 'M17 17H7V7' },
  ],
  { default: { group: move(-1.5, 1.5) } },
)
