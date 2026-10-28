'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The days blink, week after week. */
export const CalendarDays = /* @__PURE__ */ makeIcon(
  'CalendarDays',
  [
    { tag: 'path', d: 'M8 2v4' },
    { tag: 'path', d: 'M16 2v4' },
    { tag: 'rect', width: 18, height: 18, x: 3, y: 4, rx: 2 },
    { tag: 'path', d: 'M3 10h18' },
    { tag: 'path', d: 'M8 14h.01', part: 'w1' },
    { tag: 'path', d: 'M12 14h.01', part: 'w1' },
    { tag: 'path', d: 'M16 14h.01', part: 'w1' },
    { tag: 'path', d: 'M8 18h.01', part: 'w2' },
    { tag: 'path', d: 'M12 18h.01', part: 'w2' },
    { tag: 'path', d: 'M16 18h.01', part: 'w2' },
  ],
  { default: { w1: blink(0, 0.4), w2: blink(0.12, 0.4) } },
)
