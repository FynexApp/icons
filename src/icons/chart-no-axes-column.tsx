'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The bars grow one after another. */
export const ChartNoAxesColumn = /* @__PURE__ */ makeIcon(
  'ChartNoAxesColumn',
  [
    { tag: 'line', x1: 18, x2: 18, y1: 20, y2: 10, part: 'b3' },
    { tag: 'line', x1: 12, x2: 12, y1: 20, y2: 4, part: 'b2' },
    { tag: 'line', x1: 6, x2: 6, y1: 20, y2: 14, part: 'b1' },
  ],
  { default: { b1: draw(0, 0.3), b2: draw(0.08, 0.3), b3: draw(0.16, 0.3) } },
)
export { ChartNoAxesColumn as BarChart2 }
