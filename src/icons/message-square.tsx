'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The bubble pops up. */
export const MessageSquare = /* @__PURE__ */ makeIcon(
  'MessageSquare',
  [
    { tag: 'path', d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  ],
  { default: { group: pulse(1.1) } },
  { groupOrigin: '10% 90%' },
)
