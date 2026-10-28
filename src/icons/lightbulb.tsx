'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The bulb flickers on. */
export const Lightbulb = /* @__PURE__ */ makeIcon(
  'Lightbulb',
  [
    { tag: 'path', d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5', part: 'bulb' },
    { tag: 'path', d: 'M9 18h6' },
    { tag: 'path', d: 'M10 22h4' },
  ],
  { default: { bulb: kf({ opacity: [1, 0.3, 1, 0.6, 1] }, 0.5) } },
)
