'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The plus turns inside the bubble. */
export const MessageSquarePlus = /* @__PURE__ */ makeIcon(
  'MessageSquarePlus',
  [
    { tag: 'path', d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
    { tag: 'path', d: 'M12 7v6', part: 'plus' },
    { tag: 'path', d: 'M9 10h6', part: 'plus' },
  ],
  { default: { plus: turn(90) } },
  { origins: { plus: [12, 10] } },
)
