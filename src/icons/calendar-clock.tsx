'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

/** The hands go round once. */
export const CalendarClock = /* @__PURE__ */ makeIcon(
  'CalendarClock',
  [
    { tag: 'path', d: 'M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5' },
    { tag: 'path', d: 'M16 2v4' },
    { tag: 'path', d: 'M8 2v4' },
    { tag: 'path', d: 'M3 10h5' },
    { tag: 'path', d: 'M17.5 17.5 16 16.3V14', part: 'hands' },
    { tag: 'circle', cx: 16, cy: 16, r: 6 },
  ],
  { default: { hands: spin(360) } },
  { origins: { hands: [16, 16] } },
)
export { CalendarClock as CalendarClockIcon }
