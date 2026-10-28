'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The exclamation mark beats. */
export const TriangleAlert = /* @__PURE__ */ makeIcon(
  'TriangleAlert',
  [
    { tag: 'path', d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3' },
    { tag: 'path', d: 'M12 9v4', part: 'mark' },
    { tag: 'path', d: 'M12 17h.01', part: 'mark' },
  ],
  { default: { mark: pulse(1.25) } },
  { origins: { mark: [12, 13] } },
)
export { TriangleAlert as AlertTriangle }
