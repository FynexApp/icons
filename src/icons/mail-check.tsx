'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The check draws itself. */
export const MailCheck = /* @__PURE__ */ makeIcon(
  'MailCheck',
  [
    { tag: 'path', d: 'M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8' },
    { tag: 'path', d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' },
    { tag: 'path', d: 'm16 19 2 2 4-4', part: 'check' },
  ],
  { default: { check: draw(0, 0.35) } },
)
