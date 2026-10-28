'use client'

import { makeIcon } from '../make-icon'
import { appear, draw } from '../motions'

/** The route draws itself to its destination. */
export const Route = /* @__PURE__ */ makeIcon(
  'Route',
  [
    { tag: 'circle', cx: 6, cy: 19, r: 3 },
    { tag: 'path', d: 'M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15', part: 'path' },
    { tag: 'circle', cx: 18, cy: 5, r: 3, part: 'end' },
  ],
  { default: { path: draw(0, 0.5), end: appear(0.35, 0.25) } },
)
