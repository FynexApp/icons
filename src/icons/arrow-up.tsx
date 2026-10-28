'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow rises and settles back. */
export const ArrowUp = /* @__PURE__ */ makeIcon(
  'ArrowUp',
  [
    { tag: 'path', d: 'm5 12 7-7 7 7' },
    { tag: 'path', d: 'M12 19V5' },
  ],
  { default: { group: move(0, -2) } },
)
