'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The wallet sways. */
export const Wallet = /* @__PURE__ */ makeIcon(
  'Wallet',
  [
    { tag: 'path', d: 'M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1' },
    { tag: 'path', d: 'M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4' },
  ],
  { default: { group: rock([-5, 3]) } },
)
