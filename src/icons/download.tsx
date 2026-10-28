'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow drops. */
export const Download = /* @__PURE__ */ makeIcon(
  'Download',
  [
    { tag: 'path', d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' },
    { tag: 'polyline', points: '7 10 12 15 17 10', part: 'arrow' },
    { tag: 'line', x1: 12, x2: 12, y1: 15, y2: 3, part: 'arrow' },
  ],
  { default: { arrow: move(0, 1.5) } },
)
export { Download as DownloadIcon }
