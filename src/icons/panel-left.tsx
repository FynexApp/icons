'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The left panel folds in and comes back. */
export const PanelLeft = /* @__PURE__ */ makeIcon(
  'PanelLeft',
  [
    { tag: 'rect', width: 18, height: 18, x: 3, y: 3, rx: 2 },
    { tag: 'path', d: 'M9 3v18', part: 'divider' },
  ],
  { default: { divider: kf({ x: [0, -2.5, 0] }, 0.45) } },
)
