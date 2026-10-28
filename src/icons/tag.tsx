'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The tag swings from its eyelet. */
export const Tag = /* @__PURE__ */ makeIcon(
  'Tag',
  [
    { tag: 'path', d: 'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z' },
    { tag: 'circle', cx: 7.5, cy: 7.5, r: 0.5, fill: 'currentColor' },
  ],
  { default: { group: rock([-6, 4]) } },
  { groupOrigin: '27% 27%' },
)
export { Tag as TagIcon }
