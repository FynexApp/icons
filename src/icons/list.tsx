'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The rows arrive one after another. */
export const List = /* @__PURE__ */ makeIcon(
  'List',
  [
    { tag: 'path', d: 'M3 12h.01' },
    { tag: 'path', d: 'M3 18h.01' },
    { tag: 'path', d: 'M3 6h.01' },
    { tag: 'path', d: 'M8 12h13', part: 'l2' },
    { tag: 'path', d: 'M8 18h13', part: 'l3' },
    { tag: 'path', d: 'M8 6h13', part: 'l1' },
  ],
  { default: { l1: draw(0, 0.3), l2: draw(0.07, 0.3), l3: draw(0.14, 0.3) } },
)
