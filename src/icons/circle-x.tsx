'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The cross turns. */
export const CircleX = /* @__PURE__ */ makeIcon(
  'CircleX',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'm15 9-6 6', part: 'cross' },
    { tag: 'path', d: 'm9 9 6 6', part: 'cross' },
  ],
  { default: { cross: turn(90) } },
  { origins: { cross: [12, 12] } },
)
export { CircleX as XCircle }
