'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The lid lifts. */
export const Archive = /* @__PURE__ */ makeIcon(
  'Archive',
  [
    { tag: 'rect', width: 20, height: 5, x: 2, y: 3, rx: 1, part: 'lid' },
    { tag: 'path', d: 'M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8' },
    { tag: 'path', d: 'M10 12h4' },
  ],
  { default: { lid: move(0, -1) } },
)
