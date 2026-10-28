'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The dots blink from top to bottom. */
export const EllipsisVertical = /* @__PURE__ */ makeIcon(
  'EllipsisVertical',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 1, part: 'd2' },
    { tag: 'circle', cx: 12, cy: 5, r: 1, part: 'd1' },
    { tag: 'circle', cx: 12, cy: 19, r: 1, part: 'd3' },
  ],
  { default: { d1: blink(0, 0.3), d2: blink(0.08, 0.3), d3: blink(0.16, 0.3) } },
)
export { EllipsisVertical as MoreVertical }
