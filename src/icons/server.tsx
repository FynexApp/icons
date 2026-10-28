'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The status lights blink. */
export const Server = /* @__PURE__ */ makeIcon(
  'Server',
  [
    { tag: 'rect', width: 20, height: 8, x: 2, y: 2, rx: 2, ry: 2 },
    { tag: 'rect', width: 20, height: 8, x: 2, y: 14, rx: 2, ry: 2 },
    { tag: 'line', x1: 6, x2: 6.01, y1: 6, y2: 6, part: 'led1' },
    { tag: 'line', x1: 6, x2: 6.01, y1: 18, y2: 18, part: 'led2' },
  ],
  { default: { led1: blink(0), led2: blink(0.15) } },
)
