'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The three bars draw one after another. */
export const Menu = /* @__PURE__ */ makeIcon(
  'Menu',
  [
    { tag: 'path', d: 'M4 12h16', part: 'l2' },
    { tag: 'path', d: 'M4 18h16', part: 'l3' },
    { tag: 'path', d: 'M4 6h16', part: 'l1' },
  ],
  { default: { l1: draw(0, 0.3), l2: draw(0.07, 0.3), l3: draw(0.14, 0.3) } },
)
