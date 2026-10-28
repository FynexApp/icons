'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The blades snip twice. */
export const Scissors = /* @__PURE__ */ makeIcon(
  'Scissors',
  [
    { tag: 'circle', cx: 6, cy: 6, r: 3, part: 'a' },
    { tag: 'path', d: 'M8.12 8.12 12 12', part: 'a' },
    { tag: 'path', d: 'M20 4 8.12 15.88', part: 'b' },
    { tag: 'circle', cx: 6, cy: 18, r: 3, part: 'b' },
    { tag: 'path', d: 'M14.8 14.8 20 20', part: 'a' },
  ],
  { default: { a: kf({ rotate: [0, -12, 0, -12, 0] }, 0.5), b: kf({ rotate: [0, 12, 0, 12, 0] }, 0.5) } },
  { origins: { a: [12, 12], b: [12, 12] } },
)
