'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The rays turn one notch. */
export const Sun = /* @__PURE__ */ makeIcon(
  'Sun',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 4 },
    { tag: 'path', d: 'M12 2v2', part: 'rays' },
    { tag: 'path', d: 'M12 20v2', part: 'rays' },
    { tag: 'path', d: 'm4.93 4.93 1.41 1.41', part: 'rays' },
    { tag: 'path', d: 'm17.66 17.66 1.41 1.41', part: 'rays' },
    { tag: 'path', d: 'M2 12h2', part: 'rays' },
    { tag: 'path', d: 'M20 12h2', part: 'rays' },
    { tag: 'path', d: 'm6.34 17.66-1.41 1.41', part: 'rays' },
    { tag: 'path', d: 'm19.07 4.93-1.41 1.41', part: 'rays' },
  ],
  { default: { rays: turn(45, 0.5) } },
  { origins: { rays: [12, 12] } },
)
