'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The layers spread apart. */
export const SquareStack = /* @__PURE__ */ makeIcon(
  'SquareStack',
  [
    { tag: 'path', d: 'M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2', part: 'back' },
    { tag: 'path', d: 'M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2' },
    { tag: 'rect', width: 8, height: 8, x: 14, y: 14, rx: 2, part: 'front' },
  ],
  { default: { back: move(-1, -1), front: move(1, 1) } },
)
