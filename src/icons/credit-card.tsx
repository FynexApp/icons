'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The magnetic strip draws itself. */
export const CreditCard = /* @__PURE__ */ makeIcon(
  'CreditCard',
  [
    { tag: 'rect', width: 20, height: 14, x: 2, y: 5, rx: 2 },
    { tag: 'line', x1: 2, x2: 22, y1: 10, y2: 10, part: 'stripe' },
  ],
  { default: { stripe: draw(0, 0.4) } },
)
