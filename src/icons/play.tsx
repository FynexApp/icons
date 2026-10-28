'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The triangle nudges forward. */
export const Play = /* @__PURE__ */ makeIcon(
  'Play',
  [
    { tag: 'polygon', points: '6 3 20 12 6 21 6 3' },
  ],
  { default: { group: move(1.5, 0) } },
)
