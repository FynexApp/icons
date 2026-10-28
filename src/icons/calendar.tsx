'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The rings lift. */
export const Calendar = /* @__PURE__ */ makeIcon(
  'Calendar',
  [
    { tag: 'path', d: 'M8 2v4', part: 'rings' },
    { tag: 'path', d: 'M16 2v4', part: 'rings' },
    { tag: 'rect', width: 18, height: 18, x: 3, y: 4, rx: 2 },
    { tag: 'path', d: 'M3 10h18' },
  ],
  { default: { rings: move(0, -1) } },
)
export { Calendar as CalendarIcon }
