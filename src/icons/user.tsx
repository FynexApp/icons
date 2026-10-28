'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The head lifts. */
export const User = /* @__PURE__ */ makeIcon(
  'User',
  [
    { tag: 'path', d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' },
    { tag: 'circle', cx: 12, cy: 7, r: 4, part: 'head' },
  ],
  { default: { head: move(0, -1, 0.35) } },
)
