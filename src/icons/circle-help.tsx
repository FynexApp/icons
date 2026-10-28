'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The question mark hesitates. */
export const CircleHelp = /* @__PURE__ */ makeIcon(
  'CircleHelp',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', part: 'mark' },
    { tag: 'path', d: 'M12 17h.01', part: 'mark' },
  ],
  { default: { mark: rock([-12, 8, -4]) } },
  { origins: { mark: [12, 12] } },
)
export { CircleHelp as HelpCircle }
