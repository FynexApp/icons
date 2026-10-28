'use client'

import { makeIcon } from '../make-icon'
import { pulse, rock } from '../motions'

/** The wand waves, the sparkles twinkle. */
export const WandSparkles = /* @__PURE__ */ makeIcon(
  'WandSparkles',
  [
    { tag: 'path', d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72', part: 'wand' },
    { tag: 'path', d: 'm14 7 3 3', part: 'wand' },
    { tag: 'path', d: 'M5 6v4', part: 's1' },
    { tag: 'path', d: 'M19 14v4', part: 's2' },
    { tag: 'path', d: 'M10 2v2', part: 's3' },
    { tag: 'path', d: 'M7 8H3', part: 's1' },
    { tag: 'path', d: 'M21 16h-4', part: 's2' },
    { tag: 'path', d: 'M11 3H9', part: 's3' },
  ],
  { default: { wand: rock([-8, 5, -2]), s1: pulse(0.5, 0.4, 0.05), s2: pulse(0.5, 0.4, 0.12), s3: pulse(0.5, 0.4, 0.19) } },
  { origins: { wand: [3, 21], s1: [5, 8], s2: [19, 16], s3: [10, 3] } },
)
export { WandSparkles as Wand2 }
