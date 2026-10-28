'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The check draws itself. */
export const CalendarCheck = /* @__PURE__ */ makeIcon(
  'CalendarCheck',
  [
    { tag: 'path', d: 'M8 2v4' },
    { tag: 'path', d: 'M16 2v4' },
    { tag: 'rect', width: 18, height: 18, x: 3, y: 4, rx: 2 },
    { tag: 'path', d: 'M3 10h18' },
    { tag: 'path', d: 'm9 16 2 2 4-4', part: 'check' },
  ],
  { default: { check: draw(0, 0.35) } },
)
