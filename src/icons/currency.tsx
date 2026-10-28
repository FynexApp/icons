'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/**
 * The ring of the currency sign tightens and returns.
 *
 * The generic currency sign, for a currency that has no sign of its own.
 */
export const Currency = /* @__PURE__ */ makeIcon(
  'Currency',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 8, part: 'ring' },
    { tag: 'line', x1: 3, x2: 6, y1: 3, y2: 6 },
    { tag: 'line', x1: 21, x2: 18, y1: 3, y2: 6 },
    { tag: 'line', x1: 3, x2: 6, y1: 21, y2: 18 },
    { tag: 'line', x1: 21, x2: 18, y1: 21, y2: 18 },
  ],
  { default: { ring: pulse(0.85) } },
)
