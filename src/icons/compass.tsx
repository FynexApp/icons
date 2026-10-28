'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The needle swings and settles. */
export const Compass = /* @__PURE__ */ makeIcon(
  'Compass',
  [
    { tag: 'path', d: 'm16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z', part: 'needle' },
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
  ],
  { default: { needle: kf({ rotate: [0, -45, 15, 0] }, 0.6) } },
  { origins: { needle: [12, 12] } },
)
