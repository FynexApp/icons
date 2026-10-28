'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The bar contracts. */
export const BookmarkMinus = /* @__PURE__ */ makeIcon(
  'BookmarkMinus',
  [
    { tag: 'path', d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' },
    { tag: 'line', x1: 15, x2: 9, y1: 10, y2: 10, part: 'minus' },
  ],
  { default: { minus: kf({ scaleX: [1, 0.5, 1] }) } },
)
