'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The two checks draw one after the other. */
export const CheckCheck = /* @__PURE__ */ makeIcon(
  'CheckCheck',
  [
    { tag: 'path', d: 'M18 6 7 17l-5-5', part: 'a' },
    { tag: 'path', d: 'm22 10-7.5 7.5L13 16', part: 'b' },
  ],
  { default: { a: draw(0, 0.35), b: draw(0.15, 0.35) } },
)
