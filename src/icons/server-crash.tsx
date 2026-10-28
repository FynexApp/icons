'use client'

import { makeIcon } from '../make-icon'
import { blink, draw } from '../motions'

/** The bolt strikes, the status lights blink. */
export const ServerCrash = /* @__PURE__ */ makeIcon(
  'ServerCrash',
  [
    { tag: 'path', d: 'M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2' },
    { tag: 'path', d: 'M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2' },
    { tag: 'path', d: 'M6 6h.01', part: 'leds' },
    { tag: 'path', d: 'M6 18h.01', part: 'leds' },
    { tag: 'path', d: 'm13 6-4 6h6l-4 6', part: 'bolt' },
  ],
  { default: { bolt: draw(0, 0.4), leds: blink(0.1) } },
)
