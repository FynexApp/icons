'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The check draws itself. */
export const UserCheck = /* @__PURE__ */ makeIcon(
  'UserCheck',
  [
    { tag: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { tag: 'circle', cx: 9, cy: 7, r: 4 },
    { tag: 'polyline', points: '16 11 18 13 22 9', part: 'check' },
  ],
  { default: { check: draw(0, 0.35) } },
)
