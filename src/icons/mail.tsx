'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The envelope flap lifts. */
export const Mail = /* @__PURE__ */ makeIcon(
  'Mail',
  [
    { tag: 'path', d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', part: 'flap' },
    { tag: 'rect', x: 2, y: 4, width: 20, height: 16, rx: 2 },
  ],
  { default: { flap: kf({ scaleY: [1, 0.4, 1] }, 0.45) } },
  { origins: { flap: [12, 7] } },
)
export { Mail as MailIcon }
