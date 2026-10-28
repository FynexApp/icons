'use client'

import { makeIcon } from '../make-icon'
import { pulse } from '../motions'

/** The sparkles twinkle. */
export const Sparkles = /* @__PURE__ */ makeIcon(
  'Sparkles',
  [
    { tag: 'path', d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z', part: 'big' },
    { tag: 'path', d: 'M20 3v4', part: 'tr' },
    { tag: 'path', d: 'M22 5h-4', part: 'tr' },
    { tag: 'path', d: 'M4 17v2', part: 'bl' },
    { tag: 'path', d: 'M5 18H3', part: 'bl' },
  ],
  { default: { big: pulse(0.88), tr: pulse(0.5, 0.4, 0.05), bl: pulse(0.5, 0.4, 0.15) } },
  { origins: { tr: [20, 5], bl: [4, 18] } },
)
