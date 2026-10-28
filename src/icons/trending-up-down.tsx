'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two trends move apart. */
export const TrendingUpDown = /* @__PURE__ */ makeIcon(
  'TrendingUpDown',
  [
    { tag: 'path', d: 'M14.828 14.828 21 21', part: 'down' },
    { tag: 'path', d: 'M21 16v5h-5', part: 'down' },
    { tag: 'path', d: 'm21 3-9 9-4-4-6 6', part: 'up' },
    { tag: 'path', d: 'M21 8V3h-5', part: 'up' },
  ],
  { default: { up: move(1, -1), down: move(1, 1) } },
)
