'use client'

import { makeIcon } from '../make-icon'
import { draw, move } from '../motions'

/** The bend draws itself, the tip rises. */
export const CornerLeftUp = /* @__PURE__ */ makeIcon(
  'CornerLeftUp',
  [
    { tag: 'polyline', points: '14 9 9 4 4 9', part: 'head' },
    { tag: 'path', d: 'M20 20h-7a4 4 0 0 1-4-4V4', part: 'tail' },
  ],
  { default: { tail: draw(0, 0.4), head: move(0, -1.5, 0.4, 0.1) } },
)
