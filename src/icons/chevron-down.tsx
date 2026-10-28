'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The chevron dips and settles back. */
export const ChevronDown = /* @__PURE__ */ makeIcon(
  'ChevronDown',
  [
    { tag: 'path', d: 'm6 9 6 6 6-6' },
  ],
  { default: { group: move(0, 2) } },
)
export { ChevronDown as ChevronDownIcon }
