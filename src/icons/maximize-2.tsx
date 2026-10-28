'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two corners move apart. */
export const Maximize2 = /* @__PURE__ */ makeIcon(
  'Maximize2',
  [
    { tag: 'path', d: 'M15 3h6v6', part: 'out' },
    { tag: 'path', d: 'm21 3-7 7', part: 'out' },
    { tag: 'path', d: 'm3 21 7-7', part: 'in' },
    { tag: 'path', d: 'M9 21H3v-6', part: 'in' },
  ],
  { default: { out: move(1, -1), in: move(-1, 1) } },
)
