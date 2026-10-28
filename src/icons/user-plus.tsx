'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The plus turns. */
export const UserPlus = /* @__PURE__ */ makeIcon(
  'UserPlus',
  [
    { tag: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { tag: 'circle', cx: 9, cy: 7, r: 4 },
    { tag: 'line', x1: 19, x2: 19, y1: 8, y2: 14, part: 'plus' },
    { tag: 'line', x1: 22, x2: 16, y1: 11, y2: 11, part: 'plus' },
  ],
  { default: { plus: turn(90) } },
  { origins: { plus: [19, 11] } },
)
