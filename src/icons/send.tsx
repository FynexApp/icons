'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The paper plane winds up and takes off. */
export const Send = /* @__PURE__ */ makeIcon(
  'Send',
  [
    { tag: 'path', d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' },
    { tag: 'path', d: 'm21.854 2.147-10.94 10.939' },
  ],
  { default: { group: kf({ x: [0, -1, 0.5, 0], y: [0, 1, -0.5, 0] }, 0.5) } },
)
