'use client'

import { makeIcon } from '../make-icon'
import { appear, draw } from '../motions'

/** The trend draws itself, the arrowhead arrives. */
export const TrendingDown = /* @__PURE__ */ makeIcon(
  'TrendingDown',
  [
    { tag: 'polyline', points: '2 7 8.5 13.5 13.5 8.5 22 17', part: 'line' },
    { tag: 'polyline', points: '16 17 22 17 22 11', part: 'head' },
  ],
  { default: { line: draw(0, 0.45), head: appear(0.3, 0.2) } },
)
