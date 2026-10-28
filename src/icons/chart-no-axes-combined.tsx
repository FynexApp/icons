'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The bars grow, the trend draws itself. */
export const ChartNoAxesCombined = /* @__PURE__ */ makeIcon(
  'ChartNoAxesCombined',
  [
    { tag: 'path', d: 'M12 21v-5', part: 'b3' },
    { tag: 'path', d: 'M16 21v-7', part: 'b4' },
    { tag: 'path', d: 'M20 21V10', part: 'b5' },
    { tag: 'path', d: 'M2 15 8.647 8.354a.5.5 0 0 1 .707 0l3.292 3.292a.5.5 0 0 0 .708 0L22 3', part: 'line' },
    { tag: 'path', d: 'M4 21v-3', part: 'b1' },
    { tag: 'path', d: 'M8 21v-7', part: 'b2' },
  ],
  { default: { b1: draw(0, 0.25), b2: draw(0.06, 0.25), b3: draw(0.12, 0.25), b4: draw(0.18, 0.25), b5: draw(0.24, 0.25), line: draw(0.1, 0.5) } },
)
