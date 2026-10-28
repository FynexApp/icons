'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The S draws itself. */
export const Receipt = /* @__PURE__ */ makeIcon(
  'Receipt',
  [
    { tag: 'path', d: 'M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z' },
    { tag: 'path', d: 'M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8', part: 's' },
    { tag: 'path', d: 'M12 17.5v-11' },
  ],
  { default: { s: draw(0, 0.5) } },
)
