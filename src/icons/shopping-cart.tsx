'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The cart rolls forward and brakes. */
export const ShoppingCart = /* @__PURE__ */ makeIcon(
  'ShoppingCart',
  [
    { tag: 'circle', cx: 8, cy: 21, r: 1 },
    { tag: 'circle', cx: 19, cy: 21, r: 1 },
    { tag: 'path', d: 'M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' },
  ],
  { default: { group: kf({ x: [0, -1, 1, 0] }, 0.5) } },
)
