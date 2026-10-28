'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

/** The hands go round once. */
export const Clock = /* @__PURE__ */ makeIcon(
  'Clock',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'polyline', points: '12 6 12 12 16 14', part: 'hands' },
  ],
  { default: { hands: spin(360) } },
  { origins: { hands: [12, 12] } },
)
