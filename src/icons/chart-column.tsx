'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The bars grow one after another. */
export const ChartColumn = /* @__PURE__ */ makeIcon(
  'ChartColumn',
  [
    { tag: 'path', d: 'M3 3v16a2 2 0 0 0 2 2h16' },
    { tag: 'path', d: 'M18 17V9', part: 'b3' },
    { tag: 'path', d: 'M13 17V5', part: 'b2' },
    { tag: 'path', d: 'M8 17v-3', part: 'b1' },
  ],
  { default: { b1: draw(0, 0.3), b2: draw(0.08, 0.3), b3: draw(0.16, 0.3) } },
)
export { ChartColumn as BarChart3 }
