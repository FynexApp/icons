'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The screen lights up. */
export const Monitor = /* @__PURE__ */ makeIcon(
  'Monitor',
  [
    { tag: 'rect', width: 20, height: 14, x: 2, y: 3, rx: 2, part: 'screen' },
    { tag: 'line', x1: 8, x2: 16, y1: 21, y2: 21 },
    { tag: 'line', x1: 12, x2: 12, y1: 17, y2: 21 },
  ],
  { default: { screen: kf({ opacity: [1, 0.35, 1] }, 0.45) } },
)
