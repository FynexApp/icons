'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The briefcase lifts. */
export const Briefcase = /* @__PURE__ */ makeIcon(
  'Briefcase',
  [
    { tag: 'path', d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' },
    { tag: 'rect', width: 20, height: 14, x: 2, y: 6, rx: 2 },
  ],
  { default: { group: move(0, -1) } },
)
