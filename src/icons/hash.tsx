'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The four strokes draw one after another. */
export const Hash = /* @__PURE__ */ makeIcon(
  'Hash',
  [
    { tag: 'line', x1: 4, x2: 20, y1: 9, y2: 9, part: 'h1' },
    { tag: 'line', x1: 4, x2: 20, y1: 15, y2: 15, part: 'h2' },
    { tag: 'line', x1: 10, x2: 8, y1: 3, y2: 21, part: 'v1' },
    { tag: 'line', x1: 16, x2: 14, y1: 3, y2: 21, part: 'v2' },
  ],
  { default: { h1: draw(0, 0.25), h2: draw(0.08, 0.25), v1: draw(0.16, 0.25), v2: draw(0.24, 0.25) } },
)
