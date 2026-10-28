'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow dips and settles back. */
export const ArrowDown = /* @__PURE__ */ makeIcon(
  'ArrowDown',
  [
    { tag: 'path', d: 'M12 5v14' },
    { tag: 'path', d: 'm19 12-7 7-7-7' },
  ],
  { default: { group: move(0, 2) } },
)
export { ArrowDown as ArrowDownIcon }
