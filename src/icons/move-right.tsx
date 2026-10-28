'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow steps forward and returns. */
export const MoveRight = /* @__PURE__ */ makeIcon(
  'MoveRight',
  [
    { tag: 'path', d: 'M18 8L22 12L18 16' },
    { tag: 'path', d: 'M2 12H22' },
  ],
  { default: { group: move(2, 0) } },
)
