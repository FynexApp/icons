'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow steps forward and returns. */
export const Redo2 = /* @__PURE__ */ makeIcon(
  'Redo2',
  [
    { tag: 'path', d: 'm15 14 5-5-5-5' },
    { tag: 'path', d: 'M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13' },
  ],
  { default: { group: move(1.5, 0) } },
)
