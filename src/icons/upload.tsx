'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow rises. */
export const Upload = /* @__PURE__ */ makeIcon(
  'Upload',
  [
    { tag: 'path', d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' },
    { tag: 'polyline', points: '17 8 12 3 7 8', part: 'arrow' },
    { tag: 'line', x1: 12, x2: 12, y1: 3, y2: 15, part: 'arrow' },
  ],
  { default: { arrow: move(0, -1.5) } },
)
