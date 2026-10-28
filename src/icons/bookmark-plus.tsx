'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The plus turns. */
export const BookmarkPlus = /* @__PURE__ */ makeIcon(
  'BookmarkPlus',
  [
    { tag: 'path', d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' },
    { tag: 'line', x1: 12, x2: 12, y1: 7, y2: 13, part: 'plus' },
    { tag: 'line', x1: 15, x2: 9, y1: 10, y2: 10, part: 'plus' },
  ],
  { default: { plus: turn(90) } },
  { origins: { plus: [12, 10] } },
)
