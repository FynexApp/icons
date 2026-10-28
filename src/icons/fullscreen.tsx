'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The frame opens, the content grows. */
export const Fullscreen = /* @__PURE__ */ makeIcon(
  'Fullscreen',
  [
    { tag: 'path', d: 'M3 7V5a2 2 0 0 1 2-2h2', part: 'frame' },
    { tag: 'path', d: 'M17 3h2a2 2 0 0 1 2 2v2', part: 'frame' },
    { tag: 'path', d: 'M21 17v2a2 2 0 0 1-2 2h-2', part: 'frame' },
    { tag: 'path', d: 'M7 21H5a2 2 0 0 1-2-2v-2', part: 'frame' },
    { tag: 'rect', width: 10, height: 8, x: 7, y: 8, rx: 1, part: 'inner' },
  ],
  { default: { frame: pulse(1.08), inner: pulse(1.12) } },
  { origins: { frame: [12, 12] } },
)
