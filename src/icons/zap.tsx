'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The bolt crackles. */
export const Zap = /* @__PURE__ */ makeIcon(
  'Zap',
  [
    { tag: 'path', d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z' },
  ],
  { default: { group: kf({ opacity: [1, 0.3, 1, 0.6, 1] }, 0.45) } },
)
