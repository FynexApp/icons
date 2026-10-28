'use client'

import { makeIcon } from '../make-icon'
import { appear } from '../motions'

/** The waves light up from the inside out. */
export const Wifi = /* @__PURE__ */ makeIcon(
  'Wifi',
  [
    { tag: 'path', d: 'M12 20h.01' },
    { tag: 'path', d: 'M2 8.82a15 15 0 0 1 20 0', part: 'w3' },
    { tag: 'path', d: 'M5 12.859a10 10 0 0 1 14 0', part: 'w2' },
    { tag: 'path', d: 'M8.5 16.429a5 5 0 0 1 7 0', part: 'w1' },
  ],
  { default: { w1: appear(0, 0.25), w2: appear(0.1, 0.25), w3: appear(0.2, 0.25) } },
)
