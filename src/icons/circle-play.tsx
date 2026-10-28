'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The triangle nudges forward inside the circle. */
export const CirclePlay = /* @__PURE__ */ makeIcon(
  'CirclePlay',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'polygon', points: '10 8 16 12 10 16 10 8', part: 'play' },
  ],
  { default: { play: move(1, 0) } },
)
export { CirclePlay as PlayCircle }
