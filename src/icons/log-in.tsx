'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow steps in through the door. */
export const LogIn = /* @__PURE__ */ makeIcon(
  'LogIn',
  [
    { tag: 'path', d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' },
    { tag: 'polyline', points: '10 17 15 12 10 7', part: 'arrow' },
    { tag: 'line', x1: 15, x2: 3, y1: 12, y2: 12, part: 'arrow' },
  ],
  { default: { arrow: move(1.5, 0) } },
)
