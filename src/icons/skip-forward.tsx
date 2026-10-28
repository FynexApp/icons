'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The triangle jumps toward the bar. */
export const SkipForward = /* @__PURE__ */ makeIcon(
  'SkipForward',
  [
    { tag: 'polygon', points: '5 4 15 12 5 20 5 4', part: 'play' },
    { tag: 'line', x1: 19, x2: 19, y1: 5, y2: 19 },
  ],
  { default: { play: move(2, 0) } },
)
