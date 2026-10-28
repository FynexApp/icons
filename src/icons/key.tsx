'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The key turns in the lock. */
export const Key = /* @__PURE__ */ makeIcon(
  'Key',
  [
    { tag: 'path', d: 'm15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4' },
    { tag: 'path', d: 'm21 2-9.6 9.6' },
    { tag: 'circle', cx: 7.5, cy: 15.5, r: 5.5 },
  ],
  { default: { group: kf({ rotate: [0, -20, 0] }, 0.45) } },
  { groupOrigin: '30% 70%' },
)
