'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The pin hops. */
export const MapPin = /* @__PURE__ */ makeIcon(
  'MapPin',
  [
    { tag: 'path', d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' },
    { tag: 'circle', cx: 12, cy: 10, r: 3 },
  ],
  { default: { group: kf({ y: [0, -2, 0, -0.5, 0] }, 0.5) } },
)
