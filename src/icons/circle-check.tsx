'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The check draws itself. */
export const CircleCheck = /* @__PURE__ */ makeIcon(
  'CircleCheck',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'm9 12 2 2 4-4', part: 'check' },
  ],
  { default: { check: draw(0, 0.35) } },
)
