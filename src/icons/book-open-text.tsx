'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The book lines write themselves, page after page. */
export const BookOpenText = /* @__PURE__ */ makeIcon(
  'BookOpenText',
  [
    { tag: 'path', d: 'M12 7v14' },
    { tag: 'path', d: 'M16 12h2', part: 'l4' },
    { tag: 'path', d: 'M16 8h2', part: 'l3' },
    { tag: 'path', d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z' },
    { tag: 'path', d: 'M6 12h2', part: 'l2' },
    { tag: 'path', d: 'M6 8h2', part: 'l1' },
  ],
  { default: { l1: draw(0, 0.2), l2: draw(0.06, 0.2), l3: draw(0.12, 0.2), l4: draw(0.18, 0.2) } },
)
