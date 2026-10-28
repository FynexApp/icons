'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The head lifts. */
export const UserRound = /* @__PURE__ */ makeIcon(
  'UserRound',
  [
    { tag: 'circle', cx: 12, cy: 8, r: 5, part: 'head' },
    { tag: 'path', d: 'M20 21a8 8 0 0 0-16 0' },
  ],
  { default: { head: move(0, -1.5, 0.35) } },
)
