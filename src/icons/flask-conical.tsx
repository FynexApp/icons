'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The flask gets a shake. */
export const FlaskConical = /* @__PURE__ */ makeIcon(
  'FlaskConical',
  [
    { tag: 'path', d: 'M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2' },
    { tag: 'path', d: 'M6.453 15h11.094' },
    { tag: 'path', d: 'M8.5 2h7' },
  ],
  { default: { group: rock([-6, 4, -2]) } },
  { groupOrigin: '50% 100%' },
)
