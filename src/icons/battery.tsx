'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The terminal blinks. */
export const Battery = /* @__PURE__ */ makeIcon(
  'Battery',
  [
    { tag: 'rect', width: 16, height: 10, x: 2, y: 7, rx: 2, ry: 2 },
    { tag: 'line', x1: 22, x2: 22, y1: 11, y2: 13, part: 'terminal' },
  ],
  { default: { terminal: blink(0) } },
)
