'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The microphone sways. */
export const Mic = /* @__PURE__ */ makeIcon(
  'Mic',
  [
    { tag: 'path', d: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z' },
    { tag: 'path', d: 'M19 10v2a7 7 0 0 1-14 0v-2' },
    { tag: 'line', x1: 12, x2: 12, y1: 19, y2: 22 },
  ],
  { default: { group: rock([-8, 5, -2]) } },
  { groupOrigin: '50% 100%' },
)
