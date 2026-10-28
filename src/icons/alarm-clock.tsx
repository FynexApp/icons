'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The alarm clock rings. */
export const AlarmClock = /* @__PURE__ */ makeIcon(
  'AlarmClock',
  [
    { tag: 'circle', cx: 12, cy: 13, r: 8 },
    { tag: 'path', d: 'M12 9v4l2 2' },
    { tag: 'path', d: 'M5 3 2 6' },
    { tag: 'path', d: 'm22 6-3-3' },
    { tag: 'path', d: 'M6.38 18.7 4 21' },
    { tag: 'path', d: 'M17.64 18.67 20 21' },
  ],
  { default: { group: rock([-8, 8, -6, 6, -3]) } },
)
