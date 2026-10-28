'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

/** The loop makes a full turn backwards. */
export const RotateCcw = /* @__PURE__ */ makeIcon(
  'RotateCcw',
  [
    { tag: 'path', d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' },
    { tag: 'path', d: 'M3 3v5h5' },
  ],
  { default: { group: spin(-360) } },
)
