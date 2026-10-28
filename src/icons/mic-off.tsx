'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** A slash strikes through the microphone. */
export const MicOff = /* @__PURE__ */ makeIcon(
  'MicOff',
  [
    { tag: 'line', x1: 2, x2: 22, y1: 2, y2: 22, part: 'slash' },
    { tag: 'path', d: 'M18.89 13.23A7.12 7.12 0 0 0 19 12v-2' },
    { tag: 'path', d: 'M5 10v2a7 7 0 0 0 12 5' },
    { tag: 'path', d: 'M15 9.34V5a3 3 0 0 0-5.68-1.33' },
    { tag: 'path', d: 'M9 9v3a3 3 0 0 0 5.12 2.12' },
    { tag: 'line', x1: 12, x2: 12, y1: 19, y2: 22 },
  ],
  { default: { slash: draw(0, 0.4) } },
)
