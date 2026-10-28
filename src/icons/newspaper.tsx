'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The article lines write themselves. */
export const Newspaper = /* @__PURE__ */ makeIcon(
  'Newspaper',
  [
    { tag: 'path', d: 'M10 18h5', part: 'l2' },
    { tag: 'path', d: 'M10 14h8', part: 'l1' },
    { tag: 'path', d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2' },
    { tag: 'rect', width: 8, height: 4, x: 10, y: 6, rx: 1 },
  ],
  { default: { l1: draw(0, 0.3), l2: draw(0.08, 0.3) } },
)
