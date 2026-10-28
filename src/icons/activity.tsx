'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The pulse line draws itself. */
export const Activity = /* @__PURE__ */ makeIcon(
  'Activity',
  [
    { tag: 'path', d: 'M2 12h2.49a2 2 0 0 0 1.92-1.46l2.35-8.36a.25.25 0 0 1 .48 0l5.52 19.64a.25.25 0 0 0 .48 0l2.35-8.36A2 2 0 0 1 19.52 12H22', part: 'pulse' },
  ],
  { default: { pulse: draw(0, 0.55) } },
)
