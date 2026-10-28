'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow steps out through the door. */
export const LogOut = /* @__PURE__ */ makeIcon(
  'LogOut',
  [
    { tag: 'path', d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' },
    { tag: 'polyline', points: '16 17 21 12 16 7', part: 'arrow' },
    { tag: 'line', x1: 21, x2: 9, y1: 12, y2: 12, part: 'arrow' },
  ],
  { default: { arrow: move(1.5, 0) } },
)
