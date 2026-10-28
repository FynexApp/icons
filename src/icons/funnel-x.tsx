'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The cross turns. */
export const FunnelX = /* @__PURE__ */ makeIcon(
  'FunnelX',
  [
    { tag: 'path', d: 'M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473' },
    { tag: 'path', d: 'm16.5 3.5 5 5', part: 'cross' },
    { tag: 'path', d: 'm21.5 3.5-5 5', part: 'cross' },
  ],
  { default: { cross: turn(90) } },
  { origins: { cross: [19, 6] } },
)
export { FunnelX as FilterX }
