'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The plus turns a quarter turn. */
export const Plus = /* @__PURE__ */ makeIcon(
  'Plus',
  [
    { tag: 'path', d: 'M5 12h14' },
    { tag: 'path', d: 'M12 5v14' },
  ],
  { default: { group: turn(90) } },
)
