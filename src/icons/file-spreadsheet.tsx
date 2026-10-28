'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The cells fill in one after another. */
export const FileSpreadsheet = /* @__PURE__ */ makeIcon(
  'FileSpreadsheet',
  [
    { tag: 'path', d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' },
    { tag: 'path', d: 'M14 2v4a2 2 0 0 0 2 2h4' },
    { tag: 'path', d: 'M8 13h2', part: 'c1' },
    { tag: 'path', d: 'M14 13h2', part: 'c2' },
    { tag: 'path', d: 'M8 17h2', part: 'c3' },
    { tag: 'path', d: 'M14 17h2', part: 'c4' },
  ],
  { default: { c1: draw(0, 0.2), c2: draw(0.07, 0.2), c3: draw(0.14, 0.2), c4: draw(0.21, 0.2) } },
)
