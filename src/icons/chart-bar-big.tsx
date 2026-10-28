'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The bars stretch one after another. */
export const ChartBarBig = /* @__PURE__ */ makeIcon(
  'ChartBarBig',
  [
    { tag: 'path', d: 'M3 3v16a2 2 0 0 0 2 2h16' },
    { tag: 'rect', x: 7, y: 13, width: 9, height: 4, rx: 1, part: 'b2' },
    { tag: 'rect', x: 7, y: 5, width: 12, height: 4, rx: 1, part: 'b1' },
  ],
  { default: { b1: kf({ scaleX: [1, 0.4, 1] }, 0.45), b2: kf({ scaleX: [1, 0.4, 1] }, 0.45, 0.08) } },
  { origins: { b1: [7, 7], b2: [7, 15] } },
)
export { ChartBarBig as BarChartHorizontalBig }
