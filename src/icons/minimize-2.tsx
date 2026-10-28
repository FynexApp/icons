'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two corners move closer. */
export const Minimize2 = /* @__PURE__ */ makeIcon(
  'Minimize2',
  [
    { tag: 'polyline', points: '4 14 10 14 10 20', part: 'bl' },
    { tag: 'polyline', points: '20 10 14 10 14 4', part: 'tr' },
    { tag: 'line', x1: 14, x2: 21, y1: 10, y2: 3, part: 'tr' },
    { tag: 'line', x1: 3, x2: 10, y1: 21, y2: 14, part: 'bl' },
  ],
  { default: { tr: move(-1, 1), bl: move(1, -1) } },
)
