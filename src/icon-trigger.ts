'use client'

import * as React from 'react'

import { IconContext, type IconContextValue } from './icon-context'

/**
 * The light trigger: a clickable element tells its icons "I am hovered", and
 * they play their gesture.
 *
 * Why not `AnimateIcon`: it holds motion controls, a few refs and effects.
 * Placed on EVERY button and menu row of an app, that adds up (about 2.5 times
 * the cost of a static SVG, measured on 200 icons). Here it is one boolean
 * state and one context, and the element keeps its own rendering.
 *
 * Under an `AnimateIcon` already placed by the caller, the trigger steps
 * aside: the icons follow that `AnimateIcon` and its controls instead.
 */

type Hover<E> = {
  onMouseEnter?: React.MouseEventHandler<E>
  onMouseLeave?: React.MouseEventHandler<E>
}

/** No hover on a touch screen: a tap there fires a fake `mouseenter`. */
export function pointerCanHover() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return true
  return !window.matchMedia('(hover: none)').matches
}

/**
 * Returns the hover handlers to spread on the element, and the `scope` to
 * give to `IconTriggerScope` around it. The caller's own handlers are called
 * first and never swallowed.
 */
export function useIconTrigger<E extends Element = Element>({ onMouseEnter, onMouseLeave }: Hover<E> = {}) {
  const parent = React.useContext(IconContext)
  const yields = parent?.controls !== undefined
  const [active, setActive] = React.useState(false)
  const value = React.useMemo<IconContextValue>(() => ({ active, animation: 'default' }), [active])
  const handlers = {
    onMouseEnter: (event: React.MouseEvent<E>) => {
      onMouseEnter?.(event)
      if (!yields && pointerCanHover()) setActive(true)
    },
    onMouseLeave: (event: React.MouseEvent<E>) => {
      onMouseLeave?.(event)
      if (!yields) setActive(false)
    },
  }
  return { handlers, scope: yields ? null : value }
}
