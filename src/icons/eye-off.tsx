'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** A slash strikes through the eye. */
export const EyeOff = /* @__PURE__ */ makeIcon(
  'EyeOff',
  [
    { tag: 'path', d: 'M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49' },
    { tag: 'path', d: 'M14.084 14.158a3 3 0 0 1-4.242-4.242' },
    { tag: 'path', d: 'M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143' },
    { tag: 'path', d: 'm2 2 20 20', part: 'slash' },
  ],
  { default: { slash: draw(0, 0.4) } },
)
