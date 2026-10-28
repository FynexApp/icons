'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow steps back and returns. */
export const ArrowLeft = /* @__PURE__ */ makeIcon(
  'ArrowLeft',
  [
    { tag: 'path', d: 'm12 19-7-7 7-7' },
    { tag: 'path', d: 'M19 12H5' },
  ],
  { default: { group: move(-2, 0) } },
)
export { ArrowLeft as ArrowLeftIcon }
