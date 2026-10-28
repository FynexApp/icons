'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The perforation blinks down the ticket. */
export const Ticket = /* @__PURE__ */ makeIcon(
  'Ticket',
  [
    { tag: 'path', d: 'M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z' },
    { tag: 'path', d: 'M13 5v2', part: 'd1' },
    { tag: 'path', d: 'M13 17v2', part: 'd3' },
    { tag: 'path', d: 'M13 11v2', part: 'd2' },
  ],
  { default: { d1: blink(0, 0.3), d2: blink(0.08, 0.3), d3: blink(0.16, 0.3) } },
)
