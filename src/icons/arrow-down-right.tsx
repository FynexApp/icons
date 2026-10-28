'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow shoots off diagonally and returns. */
export const ArrowDownRight = /* @__PURE__ */ makeIcon(
  'ArrowDownRight',
  [
    { tag: 'path', d: 'm7 7 10 10' },
    { tag: 'path', d: 'M17 7v10H7' },
  ],
  { default: { group: move(1.5, 1.5) } },
)
