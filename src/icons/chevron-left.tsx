'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The chevron steps back and returns. */
export const ChevronLeft = /* @__PURE__ */ makeIcon(
  'ChevronLeft',
  [
    { tag: 'path', d: 'm15 18-6-6 6-6' },
  ],
  { default: { group: move(-2, 0) } },
)
export { ChevronLeft as ChevronLeftIcon }
