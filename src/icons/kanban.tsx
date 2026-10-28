'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The columns fill one after another. */
export const Kanban = /* @__PURE__ */ makeIcon(
  'Kanban',
  [
    { tag: 'path', d: 'M6 5v11', part: 'c1' },
    { tag: 'path', d: 'M12 5v6', part: 'c2' },
    { tag: 'path', d: 'M18 5v14', part: 'c3' },
  ],
  { default: { c1: draw(0, 0.3), c2: draw(0.08, 0.3), c3: draw(0.16, 0.3) } },
)
