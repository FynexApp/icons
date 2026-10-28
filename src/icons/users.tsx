'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The heads lift one after the other. */
export const Users = /* @__PURE__ */ makeIcon(
  'Users',
  [
    { tag: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { tag: 'path', d: 'M16 3.128a4 4 0 0 1 0 7.744', part: 'back' },
    { tag: 'path', d: 'M22 21v-2a4 4 0 0 0-3-3.87' },
    { tag: 'circle', cx: 9, cy: 7, r: 4, part: 'front' },
  ],
  { default: { front: move(0, -1, 0.35), back: move(0, -1, 0.35, 0.08) } },
)
