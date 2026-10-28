'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The rows arrive one after another. */
export const ListOrdered = /* @__PURE__ */ makeIcon(
  'ListOrdered',
  [
    { tag: 'path', d: 'M10 12h11', part: 'l2' },
    { tag: 'path', d: 'M10 18h11', part: 'l3' },
    { tag: 'path', d: 'M10 6h11', part: 'l1' },
    { tag: 'path', d: 'M4 10h2' },
    { tag: 'path', d: 'M4 6h1v4' },
    { tag: 'path', d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1' },
  ],
  { default: { l1: draw(0, 0.3), l2: draw(0.07, 0.3), l3: draw(0.14, 0.3) } },
)
