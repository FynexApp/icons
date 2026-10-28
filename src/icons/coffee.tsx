'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The steam rises. */
export const Coffee = /* @__PURE__ */ makeIcon(
  'Coffee',
  [
    { tag: 'path', d: 'M10 2v2', part: 's2' },
    { tag: 'path', d: 'M14 2v2', part: 's3' },
    { tag: 'path', d: 'M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1' },
    { tag: 'path', d: 'M6 2v2', part: 's1' },
  ],
  { default: { s1: kf({ y: [0, -1, 0], opacity: [1, 0.3, 1] }), s2: kf({ y: [0, -1, 0], opacity: [1, 0.3, 1] }, 0.4, 0.08), s3: kf({ y: [0, -1, 0], opacity: [1, 0.3, 1] }, 0.4, 0.16) } },
)
