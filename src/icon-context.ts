'use client'

import * as React from 'react'
import type { useAnimation } from 'motion/react'

/** The animation controls of `motion`, as returned by `useAnimation()`. */
export type IconControls = ReturnType<typeof useAnimation>

/** What an element tells the icons it contains. */
export type IconContextValue = {
  /** True while the gesture should play (hover, press, in view, or `animate`). */
  active: boolean
  /**
   * Set by `AnimateIcon`: the icons follow these controls, which is what makes
   * loops and delays possible. Absent under a light trigger (`useIconTrigger`),
   * where a boolean is all the icons need.
   */
  controls?: IconControls
  /** The named animation to play. Falls back to `default`. */
  animation?: string
}

export const IconContext = React.createContext<IconContextValue | null>(null)
IconContext.displayName = 'IconContext'
