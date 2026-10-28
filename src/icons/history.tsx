'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

/** The dial winds time back one turn. */
export const History = /* @__PURE__ */ makeIcon(
  'History',
  [
    { tag: 'path', d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', part: 'ring' },
    { tag: 'path', d: 'M3 3v5h5', part: 'ring' },
    { tag: 'path', d: 'M12 7v5l4 2' },
  ],
  { default: { ring: spin(-360) } },
  { origins: { ring: [12, 12] } },
)
