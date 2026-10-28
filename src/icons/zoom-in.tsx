'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The magnifier zooms in. */
export const ZoomIn = /* @__PURE__ */ makeIcon(
  'ZoomIn',
  [
    { tag: 'circle', cx: 11, cy: 11, r: 8 },
    { tag: 'line', x1: 21, x2: 16.65, y1: 21, y2: 16.65 },
    { tag: 'line', x1: 11, x2: 11, y1: 8, y2: 14 },
    { tag: 'line', x1: 8, x2: 14, y1: 11, y2: 11 },
  ],
  { default: { group: pulse(1.1) } },
)
