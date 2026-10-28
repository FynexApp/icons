'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The floors light up from bottom to top. */
export const Building2 = /* @__PURE__ */ makeIcon(
  'Building2',
  [
    { tag: 'path', d: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' },
    { tag: 'path', d: 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' },
    { tag: 'path', d: 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' },
    { tag: 'path', d: 'M10 6h4', part: 'f4' },
    { tag: 'path', d: 'M10 10h4', part: 'f3' },
    { tag: 'path', d: 'M10 14h4', part: 'f2' },
    { tag: 'path', d: 'M10 18h4', part: 'f1' },
  ],
  { default: { f1: draw(0, 0.25), f2: draw(0.07, 0.25), f3: draw(0.14, 0.25), f4: draw(0.21, 0.25) } },
)
