'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The ridges trace themselves from the center out. */
export const Fingerprint = /* @__PURE__ */ makeIcon(
  'Fingerprint',
  [
    { tag: 'path', d: 'M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4', part: 'r1' },
    { tag: 'path', d: 'M14 13.12c0 2.38 0 6.38-1 8.88', part: 'r1' },
    { tag: 'path', d: 'M17.29 21.02c.12-.6.43-2.3.5-3.02', part: 'r2' },
    { tag: 'path', d: 'M2 12a10 10 0 0 1 18-6', part: 'r3' },
    { tag: 'path', d: 'M2 16h.01' },
    { tag: 'path', d: 'M21.8 16c.2-2 .131-5.354 0-6', part: 'r3' },
    { tag: 'path', d: 'M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2', part: 'r2' },
    { tag: 'path', d: 'M8.65 22c.21-.66.45-1.32.57-2', part: 'r2' },
    { tag: 'path', d: 'M9 6.8a6 6 0 0 1 9 5.2v2', part: 'r2' },
  ],
  { default: { r1: draw(0, 0.3), r2: draw(0.1, 0.35), r3: draw(0.2, 0.35) } },
)
