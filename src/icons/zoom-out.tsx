'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The magnifier zooms out. */
export const ZoomOut = /* @__PURE__ */ makeIcon(
  'ZoomOut',
  [
    { tag: 'circle', cx: 11, cy: 11, r: 8 },
    { tag: 'line', x1: 21, x2: 16.65, y1: 21, y2: 16.65 },
    { tag: 'line', x1: 8, x2: 14, y1: 11, y2: 11 },
  ],
  { default: { group: pulse(0.9) } },
)
