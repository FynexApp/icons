'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The brackets move apart. */
export const CodeXml = /* @__PURE__ */ makeIcon(
  'CodeXml',
  [
    { tag: 'path', d: 'm18 16 4-4-4-4', part: 'right' },
    { tag: 'path', d: 'm6 8-4 4 4 4', part: 'left' },
    { tag: 'path', d: 'm14.5 4-5 16' },
  ],
  { default: { right: move(1, 0), left: move(-1, 0) } },
)
export { CodeXml as Code2 }
