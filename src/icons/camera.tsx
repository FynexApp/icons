'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The shutter snaps. */
export const Camera = /* @__PURE__ */ makeIcon(
  'Camera',
  [
    { tag: 'path', d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z' },
    { tag: 'circle', cx: 12, cy: 13, r: 3, part: 'lens' },
  ],
  { default: { lens: kf({ scale: [1, 0.6, 1] }, 0.35) } },
)
