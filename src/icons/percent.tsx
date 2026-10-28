'use client'

import { makeIcon } from '../make-icon'
import { blink, draw } from '../motions'

/** The slash draws itself, the two circles blink. For a yield or a rate. */
export const Percent = /* @__PURE__ */ makeIcon(
  'Percent',
  [
    { tag: 'line', x1: 19, x2: 5, y1: 5, y2: 19, part: 'bar' },
    { tag: 'circle', cx: 6.5, cy: 6.5, r: 2.5, part: 'dots' },
    { tag: 'circle', cx: 17.5, cy: 17.5, r: 2.5, part: 'dots' },
  ],
  { default: { bar: draw(0, 0.4), dots: blink(0.1) } },
)
