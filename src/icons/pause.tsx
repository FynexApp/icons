'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The two bars squeeze in turn. */
export const Pause = /* @__PURE__ */ makeIcon(
  'Pause',
  [
    { tag: 'rect', x: 14, y: 4, width: 4, height: 16, rx: 1, part: 'b2' },
    { tag: 'rect', x: 6, y: 4, width: 4, height: 16, rx: 1, part: 'b1' },
  ],
  { default: { b1: kf({ scaleY: [1, 0.7, 1] }), b2: kf({ scaleY: [1, 0.7, 1] }, 0.4, 0.08) } },
)
