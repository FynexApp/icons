'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The page comes out. */
export const Printer = /* @__PURE__ */ makeIcon(
  'Printer',
  [
    { tag: 'path', d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' },
    { tag: 'path', d: 'M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6' },
    { tag: 'rect', x: 6, y: 14, width: 12, height: 8, rx: 1, part: 'paper' },
  ],
  { default: { paper: move(0, 1.5) } },
)
