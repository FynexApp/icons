'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The chevron rises and settles back. */
export const ChevronUp = /* @__PURE__ */ makeIcon(
  'ChevronUp',
  [
    { tag: 'path', d: 'm18 15-6-6-6 6' },
  ],
  { default: { group: move(0, -2) } },
)
