'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The bar contracts. */
export const Minus = /* @__PURE__ */ makeIcon(
  'Minus',
  [
    { tag: 'path', d: 'M5 12h14' },
  ],
  { default: { group: kf({ scaleX: [1, 0.6, 1] }) } },
)
