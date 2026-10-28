'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The cross turns a quarter turn. */
export const X = /* @__PURE__ */ makeIcon(
  'X',
  [
    { tag: 'path', d: 'M18 6 6 18' },
    { tag: 'path', d: 'm6 6 12 12' },
  ],
  { default: { group: turn(90) } },
)
export { X as XIcon }
