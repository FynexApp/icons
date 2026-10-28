'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The truck moves forward and brakes. */
export const Truck = /* @__PURE__ */ makeIcon(
  'Truck',
  [
    { tag: 'path', d: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' },
    { tag: 'path', d: 'M15 18H9' },
    { tag: 'path', d: 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' },
    { tag: 'circle', cx: 17, cy: 18, r: 2 },
    { tag: 'circle', cx: 7, cy: 18, r: 2 },
  ],
  { default: { group: kf({ x: [0, -1, 1, 0] }, 0.5) } },
)
