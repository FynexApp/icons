'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The rosette beats. */
export const Award = /* @__PURE__ */ makeIcon(
  'Award',
  [
    { tag: 'path', d: 'm15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526' },
    { tag: 'circle', cx: 12, cy: 8, r: 6, part: 'rosette' },
  ],
  { default: { rosette: pulse(1.1) } },
)
