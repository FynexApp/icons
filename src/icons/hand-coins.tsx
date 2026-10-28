'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The coins hop above the hand. */
export const HandCoins = /* @__PURE__ */ makeIcon(
  'HandCoins',
  [
    { tag: 'path', d: 'M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17' },
    { tag: 'path', d: 'm7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9' },
    { tag: 'path', d: 'm2 16 6 6' },
    { tag: 'circle', cx: 16, cy: 9, r: 2.9, part: 'c1' },
    { tag: 'circle', cx: 6, cy: 5, r: 3, part: 'c2' },
  ],
  { default: { c1: move(0, -1.5, 0.35), c2: move(0, -1.5, 0.35, 0.08) } },
)
