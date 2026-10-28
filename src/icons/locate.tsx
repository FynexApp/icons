'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The sight tightens on its target. */
export const Locate = /* @__PURE__ */ makeIcon(
  'Locate',
  [
    { tag: 'line', x1: 2, x2: 5, y1: 12, y2: 12 },
    { tag: 'line', x1: 19, x2: 22, y1: 12, y2: 12 },
    { tag: 'line', x1: 12, x2: 12, y1: 2, y2: 5 },
    { tag: 'line', x1: 12, x2: 12, y1: 19, y2: 22 },
    { tag: 'circle', cx: 12, cy: 12, r: 7, part: 'ring' },
  ],
  { default: { ring: pulse(0.85) } },
)
