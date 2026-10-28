'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The text cursor blinks. */
export const TextCursorInput = /* @__PURE__ */ makeIcon(
  'TextCursorInput',
  [
    { tag: 'path', d: 'M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6', part: 'cursor' },
    { tag: 'path', d: 'M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7' },
    { tag: 'path', d: 'M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1' },
    { tag: 'path', d: 'M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1', part: 'cursor' },
    { tag: 'path', d: 'M9 6v12', part: 'cursor' },
  ],
  { default: { cursor: blink(0, 0.5) } },
)
