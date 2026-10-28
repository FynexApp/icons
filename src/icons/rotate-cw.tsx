'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

/** The loop makes a full turn. */
export const RotateCw = /* @__PURE__ */ makeIcon(
  'RotateCw',
  [
    { tag: 'path', d: 'M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8' },
    { tag: 'path', d: 'M21 3v5h-5' },
  ],
  { default: { group: spin(360) } },
)
