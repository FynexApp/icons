'use client'

import { makeIcon } from '../make-icon'
import { kf, spin } from '../motions'

/** The button is pressed, the hand goes round. */
export const Timer = /* @__PURE__ */ makeIcon(
  'Timer',
  [
    { tag: 'line', x1: 10, x2: 14, y1: 2, y2: 2, part: 'button' },
    { tag: 'line', x1: 12, x2: 15, y1: 14, y2: 11, part: 'hand' },
    { tag: 'circle', cx: 12, cy: 14, r: 8 },
  ],
  { default: { button: kf({ y: [0, 1, 0] }, 0.3), hand: spin(360) } },
  { origins: { hand: [12, 14] } },
)
