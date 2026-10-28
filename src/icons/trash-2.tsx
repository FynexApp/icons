'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The lid lifts. */
export const Trash2 = /* @__PURE__ */ makeIcon(
  'Trash2',
  [
    { tag: 'path', d: 'M3 6h18', part: 'lid' },
    { tag: 'path', d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', part: 'bin' },
    { tag: 'path', d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', part: 'lid' },
    { tag: 'line', x1: 10, x2: 10, y1: 11, y2: 17, part: 'bin' },
    { tag: 'line', x1: 14, x2: 14, y1: 11, y2: 17, part: 'bin' },
  ],
  { default: { lid: move(0, -1), bin: move(0, 1) } },
)
