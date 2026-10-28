'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The dots light up from left to right. */
export const ChartScatter = /* @__PURE__ */ makeIcon(
  'ChartScatter',
  [
    { tag: 'circle', cx: 7.5, cy: 7.5, r: 0.5, fill: 'currentColor', part: 'd1' },
    { tag: 'circle', cx: 18.5, cy: 5.5, r: 0.5, fill: 'currentColor', part: 'd3' },
    { tag: 'circle', cx: 11.5, cy: 11.5, r: 0.5, fill: 'currentColor', part: 'd2' },
    { tag: 'circle', cx: 7.5, cy: 16.5, r: 0.5, fill: 'currentColor', part: 'd1' },
    { tag: 'circle', cx: 17.5, cy: 14.5, r: 0.5, fill: 'currentColor', part: 'd3' },
    { tag: 'path', d: 'M3 3v16a2 2 0 0 0 2 2h16' },
  ],
  { default: { d1: blink(0, 0.3), d2: blink(0.08, 0.3), d3: blink(0.16, 0.3) } },
)
export { ChartScatter as ScatterChart }
