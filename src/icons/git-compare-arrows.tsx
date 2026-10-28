'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The two links draw toward each other. */
export const GitCompareArrows = /* @__PURE__ */ makeIcon(
  'GitCompareArrows',
  [
    { tag: 'circle', cx: 5, cy: 6, r: 3 },
    { tag: 'path', d: 'M12 6h5a2 2 0 0 1 2 2v7', part: 'a' },
    { tag: 'path', d: 'm15 9-3-3 3-3', part: 'a' },
    { tag: 'circle', cx: 19, cy: 18, r: 3 },
    { tag: 'path', d: 'M12 18H7a2 2 0 0 1-2-2V9', part: 'b' },
    { tag: 'path', d: 'm9 15 3 3-3 3', part: 'b' },
  ],
  { default: { a: draw(0, 0.4), b: draw(0.1, 0.4) } },
)
