'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The question mark hesitates. */
export const FileQuestion = /* @__PURE__ */ makeIcon(
  'FileQuestion',
  [
    { tag: 'path', d: 'M12 17h.01', part: 'mark' },
    { tag: 'path', d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z' },
    { tag: 'path', d: 'M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3', part: 'mark' },
  ],
  { default: { mark: rock([-12, 8, -4]) } },
  { origins: { mark: [12, 13] } },
)
