'use client'

import { makeIcon } from '../make-icon'
import { appear, draw } from '../motions'

/** The stem grows, the leaves unfold. */
export const Sprout = /* @__PURE__ */ makeIcon(
  'Sprout',
  [
    { tag: 'path', d: 'M7 20h10' },
    { tag: 'path', d: 'M10 20c5.5-2.5.8-6.4 3-10', part: 'stem' },
    { tag: 'path', d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z', part: 'leafL' },
    { tag: 'path', d: 'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z', part: 'leafR' },
  ],
  { default: { stem: draw(0, 0.35), leafL: appear(0.2, 0.25, 0.6), leafR: appear(0.3, 0.25, 0.6) } },
  { origins: { leafL: [11.8, 13.1], leafR: [13, 10] } },
)
