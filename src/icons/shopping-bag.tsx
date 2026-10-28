'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The bag lifts. */
export const ShoppingBag = /* @__PURE__ */ makeIcon(
  'ShoppingBag',
  [
    { tag: 'path', d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' },
    { tag: 'path', d: 'M3 6h18' },
    { tag: 'path', d: 'M16 10a4 4 0 0 1-8 0' },
  ],
  { default: { group: move(0, -1) } },
)
