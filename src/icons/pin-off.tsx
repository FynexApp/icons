'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** A slash strikes through the pin. */
export const PinOff = /* @__PURE__ */ makeIcon(
  'PinOff',
  [
    { tag: 'path', d: 'M12 17v5' },
    { tag: 'path', d: 'M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89' },
    { tag: 'path', d: 'm2 2 20 20', part: 'slash' },
    { tag: 'path', d: 'M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11' },
  ],
  { default: { slash: draw(0, 0.4) } },
)
