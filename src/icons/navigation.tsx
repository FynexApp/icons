'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow heads forward. */
export const Navigation = /* @__PURE__ */ makeIcon(
  'Navigation',
  [
    { tag: 'polygon', points: '3 11 22 2 13 21 11 13 3 11' },
  ],
  { default: { group: move(1, -1) } },
)
