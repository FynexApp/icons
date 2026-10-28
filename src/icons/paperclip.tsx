'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The paperclip swings. */
export const Paperclip = /* @__PURE__ */ makeIcon(
  'Paperclip',
  [
    { tag: 'path', d: 'M13.234 20.252 21 12.3' },
    { tag: 'path', d: 'm16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486' },
  ],
  { default: { group: rock([-10, 6, -3]) } },
)
