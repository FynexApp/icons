'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The bar contracts. */
export const UserMinus = /* @__PURE__ */ makeIcon(
  'UserMinus',
  [
    { tag: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { tag: 'circle', cx: 9, cy: 7, r: 4 },
    { tag: 'line', x1: 22, x2: 16, y1: 11, y2: 11, part: 'minus' },
  ],
  { default: { minus: kf({ scaleX: [1, 0.5, 1] }) } },
)
