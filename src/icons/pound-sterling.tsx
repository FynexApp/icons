'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The hook of the pound draws itself, then its bar. */
export const PoundSterling = /* @__PURE__ */ makeIcon(
  'PoundSterling',
  [
    { tag: 'path', d: 'M18 7c0-5.333-8-5.333-8 0', part: 'hook' },
    { tag: 'path', d: 'M10 7v14' },
    { tag: 'path', d: 'M6 21h12' },
    { tag: 'path', d: 'M6 13h10', part: 'bar' },
  ],
  { default: { hook: draw(0, 0.4), bar: draw(0.12, 0.3) } },
)
