'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two arrows pass each other. */
export const ArrowDownUp = /* @__PURE__ */ makeIcon(
  'ArrowDownUp',
  [
    { tag: 'path', d: 'm3 16 4 4 4-4', part: 'down' },
    { tag: 'path', d: 'M7 20V4', part: 'down' },
    { tag: 'path', d: 'm21 8-4-4-4 4', part: 'up' },
    { tag: 'path', d: 'M17 4v16', part: 'up' },
  ],
  { default: { down: move(0, 1.5), up: move(0, -1.5) } },
)
