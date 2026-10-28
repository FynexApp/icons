'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The check draws itself. */
export const ClipboardCheck = /* @__PURE__ */ makeIcon(
  'ClipboardCheck',
  [
    { tag: 'rect', width: 8, height: 4, x: 8, y: 2, rx: 1, ry: 1 },
    { tag: 'path', d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' },
    { tag: 'path', d: 'm9 14 2 2 4-4', part: 'check' },
  ],
  { default: { check: draw(0, 0.35) } },
)
