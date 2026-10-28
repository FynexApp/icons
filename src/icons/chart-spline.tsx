'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The curve draws itself. */
export const ChartSpline = /* @__PURE__ */ makeIcon(
  'ChartSpline',
  [
    { tag: 'path', d: 'M3 3v16a2 2 0 0 0 2 2h16' },
    { tag: 'path', d: 'M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7', part: 'line' },
  ],
  { default: { line: draw(0, 0.5) } },
)
