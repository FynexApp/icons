'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two arrows move apart. */
export const ArrowLeftRight = /* @__PURE__ */ makeIcon(
  'ArrowLeftRight',
  [
    { tag: 'path', d: 'M8 3 4 7l4 4', part: 'left' },
    { tag: 'path', d: 'M4 7h16', part: 'left' },
    { tag: 'path', d: 'm16 21 4-4-4-4', part: 'right' },
    { tag: 'path', d: 'M20 17H4', part: 'right' },
  ],
  { default: { left: move(-1.5, 0), right: move(1.5, 0) } },
)
