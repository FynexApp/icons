'use client'

import * as React from 'react'

import { IconContext, type IconContextValue } from './icon-context'
import { useIconTrigger } from './icon-trigger'

/** Gives the trigger state to the icons of an element; transparent when `scope` is null. */
export function IconTriggerScope({ scope, children }: { scope: IconContextValue | null; children: React.ReactNode }) {
  if (!scope) return <>{children}</>
  return <IconContext.Provider value={scope}>{children}</IconContext.Provider>
}

/**
 * A block whose hover animates the icons inside it: a table cell, a list row.
 * Prefer it over `<AnimateIcon animateOnHover>` in anything repeated per row,
 * it holds no motion controls.
 */
export function IconTrigger({ onMouseEnter, onMouseLeave, ...props }: React.ComponentProps<'div'>) {
  const trigger = useIconTrigger<HTMLDivElement>({ onMouseEnter, onMouseLeave })
  return (
    <IconTriggerScope scope={trigger.scope}>
      <div {...props} {...trigger.handlers} />
    </IconTriggerScope>
  )
}
