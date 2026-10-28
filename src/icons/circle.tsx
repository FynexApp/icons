'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The circle beats. */
export const Circle = /* @__PURE__ */ makeIcon(
  'Circle',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
  ],
  { default: { group: pulse(0.85) } },
)
