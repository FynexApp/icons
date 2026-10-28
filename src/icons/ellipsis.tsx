'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The dots hop one after another. */
export const Ellipsis = /* @__PURE__ */ makeIcon(
  'Ellipsis',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 1, part: 'd2' },
    { tag: 'circle', cx: 19, cy: 12, r: 1, part: 'd3' },
    { tag: 'circle', cx: 5, cy: 12, r: 1, part: 'd1' },
  ],
  { default: { d1: move(0, -1.5, 0.35), d2: move(0, -1.5, 0.35, 0.08), d3: move(0, -1.5, 0.35, 0.16) } },
)
export { Ellipsis as MoreHorizontal }
