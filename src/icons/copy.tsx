'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two sheets slide apart. */
export const Copy = /* @__PURE__ */ makeIcon(
  'Copy',
  [
    { tag: 'rect', width: 14, height: 14, x: 8, y: 8, rx: 2, ry: 2, part: 'front' },
    { tag: 'path', d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', part: 'back' },
  ],
  { default: { front: move(1, 1), back: move(-1, -1) } },
)
