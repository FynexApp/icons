'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two chevrons move apart. */
export const ChevronsUpDown = /* @__PURE__ */ makeIcon(
  'ChevronsUpDown',
  [
    { tag: 'path', d: 'm7 15 5 5 5-5', part: 'down' },
    { tag: 'path', d: 'm7 9 5-5 5 5', part: 'up' },
  ],
  { default: { down: move(0, 1.5), up: move(0, -1.5) } },
)
