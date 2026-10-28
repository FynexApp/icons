'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The range draws itself across the weeks. */
export const CalendarRange = /* @__PURE__ */ makeIcon(
  'CalendarRange',
  [
    { tag: 'rect', width: 18, height: 18, x: 3, y: 4, rx: 2 },
    { tag: 'path', d: 'M16 2v4' },
    { tag: 'path', d: 'M3 10h18' },
    { tag: 'path', d: 'M8 2v4' },
    { tag: 'path', d: 'M11 14h6', part: 'r1' },
    { tag: 'path', d: 'M7 18h6', part: 'r2' },
    { tag: 'path', d: 'M7 14h.01' },
    { tag: 'path', d: 'M17 18h.01' },
  ],
  { default: { r1: draw(0, 0.3), r2: draw(0.1, 0.3) } },
)
