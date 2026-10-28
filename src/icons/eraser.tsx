'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The eraser rubs along the line. */
export const Eraser = /* @__PURE__ */ makeIcon(
  'Eraser',
  [
    { tag: 'path', d: 'm7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21', part: 'body' },
    { tag: 'path', d: 'M22 21H7' },
    { tag: 'path', d: 'm5 11 9 9', part: 'body' },
  ],
  { default: { body: kf({ x: [0, -1, 1, 0] }, 0.5) } },
)
