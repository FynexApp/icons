'use client'

import { makeIcon } from '../make-icon'
import { kf, pulse } from '../motions'

/** The frame tightens, the magnifier searches. */
export const ScanSearch = /* @__PURE__ */ makeIcon(
  'ScanSearch',
  [
    { tag: 'path', d: 'M3 7V5a2 2 0 0 1 2-2h2', part: 'frame' },
    { tag: 'path', d: 'M17 3h2a2 2 0 0 1 2 2v2', part: 'frame' },
    { tag: 'path', d: 'M21 17v2a2 2 0 0 1-2 2h-2', part: 'frame' },
    { tag: 'path', d: 'M7 21H5a2 2 0 0 1-2-2v-2', part: 'frame' },
    { tag: 'circle', cx: 12, cy: 12, r: 3, part: 'lens' },
    { tag: 'path', d: 'm16 16-1.9-1.9', part: 'lens' },
  ],
  { default: { frame: pulse(0.9), lens: kf({ x: [0, -1, 1, 0], y: [0, 1, -1, 0] }, 0.5) } },
  { origins: { frame: [12, 12] } },
)
