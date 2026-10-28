'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The cross turns. */
export const CalendarX = /* @__PURE__ */ makeIcon(
  'CalendarX',
  [
    { tag: 'path', d: 'M8 2v4' },
    { tag: 'path', d: 'M16 2v4' },
    { tag: 'rect', width: 18, height: 18, x: 3, y: 4, rx: 2 },
    { tag: 'path', d: 'M3 10h18' },
    { tag: 'path', d: 'm14 14-4 4', part: 'cross' },
    { tag: 'path', d: 'm10 14 4 4', part: 'cross' },
  ],
  { default: { cross: turn(90) } },
  { origins: { cross: [12, 16] } },
)
