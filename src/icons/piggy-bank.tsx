'use client'

import { makeIcon } from '../make-icon'
import { blink, kf } from '../motions'

/** The piggy bank hops, the eye winks. */
export const PiggyBank = /* @__PURE__ */ makeIcon(
  'PiggyBank',
  [
    { tag: 'path', d: 'M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z' },
    { tag: 'path', d: 'M16 10h.01', part: 'eye' },
    { tag: 'path', d: 'M2 8v1a2 2 0 0 0 2 2h1' },
  ],
  { default: { group: kf({ y: [0, -1, 0], rotate: [0, -3, 0] }), eye: blink(0.1, 0.3) } },
)
