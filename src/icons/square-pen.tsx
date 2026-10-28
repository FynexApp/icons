'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The pen writes inside the frame. */
export const SquarePen = /* @__PURE__ */ makeIcon(
  'SquarePen',
  [
    { tag: 'path', d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' },
    { tag: 'path', d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z', part: 'pen' },
  ],
  { default: { pen: rock([-4, 3]) } },
  { origins: { pen: [8.5, 15.5] } },
)
