'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The cross turns. */
export const UserX = /* @__PURE__ */ makeIcon(
  'UserX',
  [
    { tag: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { tag: 'circle', cx: 9, cy: 7, r: 4 },
    { tag: 'line', x1: 17, x2: 22, y1: 8, y2: 13, part: 'cross' },
    { tag: 'line', x1: 22, x2: 17, y1: 8, y2: 13, part: 'cross' },
  ],
  { default: { cross: turn(90) } },
  { origins: { cross: [19.5, 10.5] } },
)
