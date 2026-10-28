'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow drops inside the page. */
export const FileDown = /* @__PURE__ */ makeIcon(
  'FileDown',
  [
    { tag: 'path', d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' },
    { tag: 'path', d: 'M14 2v4a2 2 0 0 0 2 2h4' },
    { tag: 'path', d: 'M12 18v-6', part: 'arrow' },
    { tag: 'path', d: 'm9 15 3 3 3-3', part: 'arrow' },
  ],
  { default: { arrow: move(0, 1.5) } },
)
