'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The crescent sways. */
export const Moon = /* @__PURE__ */ makeIcon(
  'Moon',
  [
    { tag: 'path', d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' },
  ],
  { default: { group: rock([-15, 8]) } },
)
