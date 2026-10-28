'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The area draws itself. */
export const ChartArea = /* @__PURE__ */ makeIcon(
  'ChartArea',
  [
    { tag: 'path', d: 'M3 3v16a2 2 0 0 0 2 2h16' },
    { tag: 'path', d: 'M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z', part: 'area' },
  ],
  { default: { area: draw(0, 0.6) } },
)
export { ChartArea as AreaChart }
