'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow steps forward and returns. */
export const ArrowRight = /* @__PURE__ */ makeIcon(
  'ArrowRight',
  [
    { tag: 'path', d: 'M5 12h14' },
    { tag: 'path', d: 'm12 5 7 7-7 7' },
  ],
  { default: { group: move(2, 0) } },
)
