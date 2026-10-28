'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The clip lifts. */
export const Clipboard = /* @__PURE__ */ makeIcon(
  'Clipboard',
  [
    { tag: 'rect', width: 8, height: 4, x: 8, y: 2, rx: 1, ry: 1, part: 'clip' },
    { tag: 'path', d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' },
  ],
  { default: { clip: move(0, -1) } },
)
