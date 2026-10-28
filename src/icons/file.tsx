'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The corner fold draws itself. */
export const File = /* @__PURE__ */ makeIcon(
  'File',
  [
    { tag: 'path', d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' },
    { tag: 'path', d: 'M14 2v4a2 2 0 0 0 2 2h4', part: 'corner' },
  ],
  { default: { corner: draw(0, 0.4) } },
)
