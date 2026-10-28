'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The bottom panel folds in and comes back. */
export const PanelBottom = /* @__PURE__ */ makeIcon(
  'PanelBottom',
  [
    { tag: 'rect', width: 18, height: 18, x: 3, y: 3, rx: 2 },
    { tag: 'path', d: 'M3 15h18', part: 'divider' },
  ],
  { default: { divider: kf({ y: [0, 2.5, 0] }, 0.45) } },
)
