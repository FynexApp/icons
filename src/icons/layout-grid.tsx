'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The four tiles beat in turn. */
export const LayoutGrid = /* @__PURE__ */ makeIcon(
  'LayoutGrid',
  [
    { tag: 'rect', width: 7, height: 7, x: 3, y: 3, rx: 1, part: 'a' },
    { tag: 'rect', width: 7, height: 7, x: 14, y: 3, rx: 1, part: 'b' },
    { tag: 'rect', width: 7, height: 7, x: 14, y: 14, rx: 1, part: 'c' },
    { tag: 'rect', width: 7, height: 7, x: 3, y: 14, rx: 1, part: 'd' },
  ],
  { default: { a: pulse(0.8, 0.35), b: pulse(0.8, 0.35, 0.06), c: pulse(0.8, 0.35, 0.12), d: pulse(0.8, 0.35, 0.18) } },
)
