import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { AnimateIcon, draw, IconTrigger, IconTriggerScope, makeIcon, useIconTrigger } from '../src'

const Sample = makeIcon('Sample', [{ tag: 'path', d: 'M4 12h16', part: 'line' }], { default: { line: draw(0, 0.4) } })

/** A part is "mounted as motion" when its path length is driven. */
const isMoving = (root: ParentNode) => root.querySelector('[data-icon="Sample"] path')!.hasAttribute('pathLength')

/** The integration the README recommends for a design system button. */
function Button({ onMouseEnter, onMouseLeave, ...props }: React.ComponentProps<'button'>) {
  const trigger = useIconTrigger<HTMLButtonElement>({ onMouseEnter, onMouseLeave })
  return (
    <IconTriggerScope scope={trigger.scope}>
      <button type="button" {...props} {...trigger.handlers} />
    </IconTriggerScope>
  )
}

/** The same integration on a menu row. */
function MenuItem({ onMouseEnter, onMouseLeave, ...props }: React.ComponentProps<'div'>) {
  const trigger = useIconTrigger<HTMLDivElement>({ onMouseEnter, onMouseLeave })
  return (
    <IconTriggerScope scope={trigger.scope}>
      <div role="menuitem" tabIndex={-1} {...props} {...trigger.handlers} />
    </IconTriggerScope>
  )
}

describe('icon trigger', () => {
  it('animates the icons of a button while the button is hovered', () => {
    const onMouseEnter = vi.fn()
    const { container, getByRole } = render(
      <Button onMouseEnter={onMouseEnter}>
        <Sample />
        Export
      </Button>,
    )
    expect(isMoving(container)).toBe(false)
    fireEvent.mouseEnter(getByRole('button'))
    expect(isMoving(container)).toBe(true)
    // The caller's handler is not swallowed.
    expect(onMouseEnter).toHaveBeenCalledOnce()
  })

  it('keeps a state indicator still inside a hovered button', () => {
    const { container, getByRole } = render(
      <Button>
        <Sample animateOnHover={false} />
      </Button>,
    )
    fireEvent.mouseEnter(getByRole('button'))
    expect(isMoving(container)).toBe(false)
  })

  it('animates the icon of a hovered menu row', () => {
    const { container, getByRole } = render(
      <div role="menu">
        <MenuItem>
          <Sample />
          Edit
        </MenuItem>
      </div>,
    )
    expect(isMoving(container)).toBe(false)
    fireEvent.mouseEnter(getByRole('menuitem'))
    expect(isMoving(container)).toBe(true)
  })

  it('animates the icons of a hovered block', () => {
    const { container, getByTestId } = render(
      <IconTrigger data-testid="cell">
        <Sample />
      </IconTrigger>,
    )
    fireEvent.mouseEnter(getByTestId('cell'))
    expect(isMoving(container)).toBe(true)
    fireEvent.mouseLeave(getByTestId('cell'))
  })

  it('steps aside under an AnimateIcon placed by the caller', () => {
    // The caller's AnimateIcon owns the controls: the button must not hide
    // them behind its light context.
    const { container, getByRole } = render(
      <AnimateIcon animateOnHover asChild>
        <Button>
          <Sample />
        </Button>
      </AnimateIcon>,
    )
    fireEvent.mouseEnter(getByRole('button'))
    expect(isMoving(container)).toBe(true)
  })

  it('does not animate on a touch screen', () => {
    const matchMedia = window.matchMedia
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(hover: none)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }))
    const { container, getByRole } = render(
      <Button>
        <Sample />
      </Button>,
    )
    fireEvent.mouseEnter(getByRole('button'))
    expect(isMoving(container)).toBe(false)
    window.matchMedia = matchMedia
  })
})
