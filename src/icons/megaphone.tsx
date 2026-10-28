'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The megaphone makes an announcement. */
export const Megaphone = /* @__PURE__ */ makeIcon(
  'Megaphone',
  [
    { tag: 'path', d: 'm3 11 18-5v12L3 14v-3z' },
    { tag: 'path', d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6' },
  ],
  { default: { group: rock([-8, 5, -2]) } },
  { groupOrigin: '15% 55%' },
)
