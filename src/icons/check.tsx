'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The check draws itself. */
export const Check = /* @__PURE__ */ makeIcon(
  'Check',
  [
    { tag: 'path', d: 'M20 6 9 17l-5-5', part: 'check' },
  ],
  { default: { check: draw(0, 0.4) } },
)
export { Check as CheckIcon }
