'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The check draws itself. */
export const ListTodo = /* @__PURE__ */ makeIcon(
  'ListTodo',
  [
    { tag: 'rect', x: 3, y: 5, width: 6, height: 6, rx: 1 },
    { tag: 'path', d: 'm3 17 2 2 4-4', part: 'check' },
    { tag: 'path', d: 'M13 6h8' },
    { tag: 'path', d: 'M13 12h8' },
    { tag: 'path', d: 'M13 18h8' },
  ],
  { default: { check: draw(0, 0.35) } },
)
