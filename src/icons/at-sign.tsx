'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The tail wraps around. */
export const AtSign = /* @__PURE__ */ makeIcon(
  'AtSign',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 4 },
    { tag: 'path', d: 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8', part: 'tail' },
  ],
  { default: { tail: draw(0, 0.5) } },
)
