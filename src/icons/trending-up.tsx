'use client'

import { makeIcon } from '../make-icon'
import { appear, draw } from '../motions'

/** The trend draws itself, the arrowhead arrives. */
export const TrendingUp = /* @__PURE__ */ makeIcon(
  'TrendingUp',
  [
    { tag: 'polyline', points: '2 17 8.5 10.5 13.5 15.5 22 7', part: 'line' },
    { tag: 'polyline', points: '16 7 22 7 22 13', part: 'head' },
  ],
  { default: { line: draw(0, 0.45), head: appear(0.3, 0.2) } },
)
