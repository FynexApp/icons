'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The anchor swings from its ring. */
export const Anchor = /* @__PURE__ */ makeIcon(
  'Anchor',
  [
    { tag: 'path', d: 'M12 22V8' },
    { tag: 'path', d: 'M5 12H2a10 10 0 0 0 20 0h-3' },
    { tag: 'circle', cx: 12, cy: 5, r: 3 },
  ],
  { default: { group: rock([-4, 3, -1]) } },
  { groupOrigin: '50% 15%' },
)
