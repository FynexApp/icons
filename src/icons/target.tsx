'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The bullseye beats, the rings answer. */
export const Target = /* @__PURE__ */ makeIcon(
  'Target',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'circle', cx: 12, cy: 12, r: 6, part: 'mid' },
    { tag: 'circle', cx: 12, cy: 12, r: 2, part: 'bull' },
  ],
  { default: { bull: pulse(1.4), mid: pulse(0.9, 0.4, 0.08) } },
)
