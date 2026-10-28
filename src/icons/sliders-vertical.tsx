'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The three knobs slide. */
export const SlidersVertical = /* @__PURE__ */ makeIcon(
  'SlidersVertical',
  [
    { tag: 'line', x1: 4, x2: 4, y1: 21, y2: 14 },
    { tag: 'line', x1: 4, x2: 4, y1: 10, y2: 3 },
    { tag: 'line', x1: 12, x2: 12, y1: 21, y2: 12 },
    { tag: 'line', x1: 12, x2: 12, y1: 8, y2: 3 },
    { tag: 'line', x1: 20, x2: 20, y1: 21, y2: 16 },
    { tag: 'line', x1: 20, x2: 20, y1: 12, y2: 3 },
    { tag: 'line', x1: 2, x2: 6, y1: 14, y2: 14, part: 'k1' },
    { tag: 'line', x1: 10, x2: 14, y1: 8, y2: 8, part: 'k2' },
    { tag: 'line', x1: 18, x2: 22, y1: 16, y2: 16, part: 'k3' },
  ],
  { default: { k1: kf({ y: [0, -2, 0] }), k2: kf({ y: [0, 2, 0] }, 0.4, 0.06), k3: kf({ y: [0, -2, 0] }, 0.4, 0.12) } },
)
export { SlidersVertical as Sliders }
