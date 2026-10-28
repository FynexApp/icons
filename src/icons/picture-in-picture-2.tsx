'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The thumbnail shrinks. */
export const PictureInPicture2 = /* @__PURE__ */ makeIcon(
  'PictureInPicture2',
  [
    { tag: 'path', d: 'M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4' },
    { tag: 'rect', width: 10, height: 7, x: 12, y: 13, rx: 2, part: 'small' },
  ],
  { default: { small: pulse(0.82) } },
  { origins: { small: [22, 20] } },
)
