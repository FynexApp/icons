'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The slice pops out. */
export const ChartPie = /* @__PURE__ */ makeIcon(
  'ChartPie',
  [
    { tag: 'path', d: 'M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z', part: 'slice' },
    { tag: 'path', d: 'M21.21 15.89A10 10 0 1 1 8 2.83' },
  ],
  { default: { slice: move(1, -1) } },
)
