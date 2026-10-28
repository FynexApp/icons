'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The receipt lines write themselves. */
export const ReceiptText = /* @__PURE__ */ makeIcon(
  'ReceiptText',
  [
    { tag: 'path', d: 'M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z' },
    { tag: 'path', d: 'M8 8h6', part: 'l1' },
    { tag: 'path', d: 'M8 12h8', part: 'l2' },
    { tag: 'path', d: 'M8 16h5', part: 'l3' },
  ],
  { default: { l1: draw(0, 0.3), l2: draw(0.08, 0.3), l3: draw(0.16, 0.3) } },
)
