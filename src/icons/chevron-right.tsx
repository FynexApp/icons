'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The chevron steps forward and returns. */
export const ChevronRight = /* @__PURE__ */ makeIcon(
  'ChevronRight',
  [
    { tag: 'path', d: 'm9 18 6-6-6-6' },
  ],
  { default: { group: move(2, 0) } },
)
export { ChevronRight as ChevronRightIcon }
