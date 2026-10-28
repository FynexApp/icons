'use client'

import { makeIcon } from '../make-icon'
import { kf, rock } from '../motions'

/** The robot blinks, the antenna quivers. */
export const Bot = /* @__PURE__ */ makeIcon(
  'Bot',
  [
    { tag: 'path', d: 'M12 8V4H8', part: 'antenna' },
    { tag: 'rect', width: 16, height: 12, x: 4, y: 8, rx: 2 },
    { tag: 'path', d: 'M2 14h2' },
    { tag: 'path', d: 'M20 14h2' },
    { tag: 'path', d: 'M15 13v2', part: 'eyes' },
    { tag: 'path', d: 'M9 13v2', part: 'eyes' },
  ],
  { default: { eyes: kf({ scaleY: [1, 0.2, 1] }, 0.3), antenna: rock([-10, 8]) } },
  { origins: { antenna: [12, 8] } },
)
