'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The shackle swings on its hinge. */
export const LockOpen = /* @__PURE__ */ makeIcon(
  'LockOpen',
  [
    { tag: 'rect', width: 18, height: 11, x: 3, y: 11, rx: 2, ry: 2 },
    { tag: 'path', d: 'M7 11V7a5 5 0 0 1 9.9-1', part: 'shackle' },
  ],
  { default: { shackle: rock([-10, 4]) } },
  { origins: { shackle: [7, 11] } },
)
export { LockOpen as Unlock }
