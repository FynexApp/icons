'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The three blocks beat in cascade. */
export const LayoutTemplate = /* @__PURE__ */ makeIcon(
  'LayoutTemplate',
  [
    { tag: 'rect', width: 18, height: 7, x: 3, y: 3, rx: 1, part: 'a' },
    { tag: 'rect', width: 9, height: 7, x: 3, y: 14, rx: 1, part: 'b' },
    { tag: 'rect', width: 5, height: 7, x: 16, y: 14, rx: 1, part: 'c' },
  ],
  { default: { a: pulse(0.9, 0.35), b: pulse(0.85, 0.35, 0.07), c: pulse(0.85, 0.35, 0.14) } },
)
