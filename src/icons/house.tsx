'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The door draws itself. */
export const House = /* @__PURE__ */ makeIcon(
  'House',
  [
    { tag: 'path', d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', part: 'door' },
    { tag: 'path', d: 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  ],
  { default: { door: draw(0, 0.45) } },
)
export { House as HomeIcon }
