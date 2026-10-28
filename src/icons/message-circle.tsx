'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The bubble pops up. */
export const MessageCircle = /* @__PURE__ */ makeIcon(
  'MessageCircle',
  [
    { tag: 'path', d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z' },
  ],
  { default: { group: pulse(1.1) } },
  { groupOrigin: '10% 90%' },
)
