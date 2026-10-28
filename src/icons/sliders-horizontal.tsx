'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The three knobs slide. */
export const SlidersHorizontal = /* @__PURE__ */ makeIcon(
  'SlidersHorizontal',
  [
    { tag: 'line', x1: 21, x2: 14, y1: 4, y2: 4 },
    { tag: 'line', x1: 10, x2: 3, y1: 4, y2: 4 },
    { tag: 'line', x1: 21, x2: 12, y1: 12, y2: 12 },
    { tag: 'line', x1: 8, x2: 3, y1: 12, y2: 12 },
    { tag: 'line', x1: 21, x2: 16, y1: 20, y2: 20 },
    { tag: 'line', x1: 12, x2: 3, y1: 20, y2: 20 },
    { tag: 'line', x1: 14, x2: 14, y1: 2, y2: 6, part: 'k1' },
    { tag: 'line', x1: 8, x2: 8, y1: 10, y2: 14, part: 'k2' },
    { tag: 'line', x1: 16, x2: 16, y1: 18, y2: 22, part: 'k3' },
  ],
  { default: { k1: kf({ x: [0, -2, 0] }), k2: kf({ x: [0, 2, 0] }, 0.4, 0.06), k3: kf({ x: [0, -2, 0] }, 0.4, 0.12) } },
)
