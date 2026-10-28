'use client'

import { makeIcon } from '../make-icon'
import { appear, draw } from '../motions'

/** The branches draw out to both nodes. */
export const Share2 = /* @__PURE__ */ makeIcon(
  'Share2',
  [
    { tag: 'circle', cx: 18, cy: 5, r: 3, part: 'ends' },
    { tag: 'circle', cx: 6, cy: 12, r: 3 },
    { tag: 'circle', cx: 18, cy: 19, r: 3, part: 'ends' },
    { tag: 'line', x1: 8.59, x2: 15.42, y1: 13.51, y2: 17.49, part: 'l1' },
    { tag: 'line', x1: 8.59, x2: 15.41, y1: 10.49, y2: 6.51, part: 'l2' },
  ],
  { default: { l1: draw(0, 0.3), l2: draw(0, 0.3), ends: appear(0.15, 0.25) } },
)
