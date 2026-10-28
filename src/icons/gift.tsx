'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The lid and the bow lift. */
export const Gift = /* @__PURE__ */ makeIcon(
  'Gift',
  [
    { tag: 'rect', x: 3, y: 8, width: 18, height: 4, rx: 1, part: 'lid' },
    { tag: 'path', d: 'M12 8v13' },
    { tag: 'path', d: 'M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7' },
    { tag: 'path', d: 'M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5', part: 'lid' },
  ],
  { default: { lid: move(0, -1.5) } },
)
