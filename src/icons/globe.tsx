'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The globe spins on its axis. */
export const Globe = /* @__PURE__ */ makeIcon(
  'Globe',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', part: 'meridian' },
    { tag: 'path', d: 'M2 12h20' },
  ],
  { default: { meridian: kf({ scaleX: [1, 0.3, 1] }, 0.5) } },
)
