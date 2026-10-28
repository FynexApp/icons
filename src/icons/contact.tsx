'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The head lifts. */
export const Contact = /* @__PURE__ */ makeIcon(
  'Contact',
  [
    { tag: 'path', d: 'M16 2v2' },
    { tag: 'path', d: 'M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2' },
    { tag: 'path', d: 'M8 2v2' },
    { tag: 'circle', cx: 12, cy: 11, r: 3, part: 'head' },
    { tag: 'rect', x: 3, y: 4, width: 18, height: 18, rx: 2 },
  ],
  { default: { head: move(0, -1, 0.35) } },
)
