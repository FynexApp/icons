'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The line draws itself. */
export const ChartLine = /* @__PURE__ */ makeIcon(
  'ChartLine',
  [
    { tag: 'path', d: 'M3 3v16a2 2 0 0 0 2 2h16' },
    { tag: 'path', d: 'm7 13 3-3 4 4 5-5', part: 'line' },
  ],
  { default: { line: draw(0, 0.5) } },
)
export { ChartLine as LineChart, ChartLine as ChartLineIcon }
