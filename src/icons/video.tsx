'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The lens zooms. */
export const Video = /* @__PURE__ */ makeIcon(
  'Video',
  [
    { tag: 'path', d: 'm16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5', part: 'lens' },
    { tag: 'rect', x: 2, y: 6, width: 14, height: 12, rx: 2 },
  ],
  { default: { lens: kf({ scale: [1, 1.2, 1] }, 0.45) } },
  { origins: { lens: [16, 12] } },
)
