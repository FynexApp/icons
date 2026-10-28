'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The magnifier sweeps around. */
export const Search = /* @__PURE__ */ makeIcon(
  'Search',
  [
    { tag: 'path', d: 'm21 21-4.34-4.34' },
    { tag: 'circle', cx: 11, cy: 11, r: 8 },
  ],
  { default: { group: kf({ x: [0, -1.5, 1.5, 0], y: [0, -1, -1, 0] }, 0.6) } },
)
