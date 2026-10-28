'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The shackle lifts and snaps shut. */
export const Lock = /* @__PURE__ */ makeIcon(
  'Lock',
  [
    { tag: 'rect', width: 18, height: 11, x: 3, y: 11, rx: 2, ry: 2 },
    { tag: 'path', d: 'M7 11V7a5 5 0 0 1 10 0v4', part: 'shackle' },
  ],
  { default: { shackle: kf({ y: [0, -1, 0.8, 0] }, 0.45) } },
)
export { Lock as LockIcon }
