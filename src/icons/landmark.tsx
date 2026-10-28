'use client'

import { makeIcon } from '../make-icon'
import { draw, move } from '../motions'

/** The pediment lifts, the columns rise. */
export const Landmark = /* @__PURE__ */ makeIcon(
  'Landmark',
  [
    { tag: 'line', x1: 3, x2: 21, y1: 22, y2: 22 },
    { tag: 'line', x1: 6, x2: 6, y1: 18, y2: 11, part: 'c1' },
    { tag: 'line', x1: 10, x2: 10, y1: 18, y2: 11, part: 'c2' },
    { tag: 'line', x1: 14, x2: 14, y1: 18, y2: 11, part: 'c3' },
    { tag: 'line', x1: 18, x2: 18, y1: 18, y2: 11, part: 'c4' },
    { tag: 'polygon', points: '12 2 20 7 4 7', part: 'roof' },
  ],
  { default: { roof: move(0, -1), c1: draw(0.05, 0.3), c2: draw(0.1, 0.3), c3: draw(0.15, 0.3), c4: draw(0.2, 0.3) } },
)
