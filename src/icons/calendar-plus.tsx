'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The plus turns. */
export const CalendarPlus = /* @__PURE__ */ makeIcon(
  'CalendarPlus',
  [
    { tag: 'path', d: 'M16 19h6', part: 'plus' },
    { tag: 'path', d: 'M16 2v4' },
    { tag: 'path', d: 'M19 16v6', part: 'plus' },
    { tag: 'path', d: 'M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5' },
    { tag: 'path', d: 'M3 10h18' },
    { tag: 'path', d: 'M8 2v4' },
  ],
  { default: { plus: turn(90) } },
  { origins: { plus: [19, 19] } },
)
