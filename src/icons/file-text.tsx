'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The document lines write themselves. */
export const FileText = /* @__PURE__ */ makeIcon(
  'FileText',
  [
    { tag: 'path', d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' },
    { tag: 'path', d: 'M14 2v4a2 2 0 0 0 2 2h4' },
    { tag: 'path', d: 'M8 9h2', part: 'l1' },
    { tag: 'path', d: 'M8 13h8', part: 'l2' },
    { tag: 'path', d: 'M8 17h8', part: 'l3' },
  ],
  { default: { l1: draw(0, 0.25), l2: draw(0.07, 0.3), l3: draw(0.14, 0.3) } },
)
export { FileText as FileTextIcon }
