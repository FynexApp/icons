import * as React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { AnimateIcon, draw, IconContext, kf, makeIcon, move, spin, turn } from '../src'

// `useReducedMotion` reads the preference once per page: replace it with a
// switch to test both cases in the same file.
const motionPreference = vi.hoisted(() => ({ reduce: false, starts: [] as string[] }))
vi.mock('motion/react', async (importOriginal) => {
  const original = await importOriginal<typeof import('motion/react')>()
  return {
    ...original,
    useReducedMotion: () => motionPreference.reduce,
    // Records every variant the controllers start, to observe the loop.
    useAnimation: () => {
      const controls = original.useAnimation() as ReturnType<typeof original.useAnimation> & { recorded?: true }
      if (!controls.recorded) {
        const start = controls.start.bind(controls)
        controls.start = (definition, transitionOverride) => {
          if (typeof definition === 'string') motionPreference.starts.push(definition)
          return start(definition, transitionOverride)
        }
        controls.recorded = true
      }
      return controls
    },
  }
})

const Sample = makeIcon(
  'Sample',
  [
    { tag: 'path', d: 'M4 12h16', part: 'line' },
    { tag: 'circle', cx: 12, cy: 12, r: 3 },
    { tag: 'rect', x: 2, y: 2, width: 4, height: 4, rx: 1, part: 'box' },
  ],
  { default: { line: draw(0, 0.4), box: move(0, -1) } },
  { origins: { box: [4, 4] } },
)

/** A part is "mounted as motion" when its path length is driven. */
const isMoving = (container: HTMLElement) => container.querySelector('path')!.hasAttribute('pathLength')

/**
 * Only the timers are faked: a faked `requestAnimationFrame` would strand the
 * motion frame loop for the rest of the file once the real one is restored.
 */
const fakeTimers = () => vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })

const touchScreen = () =>
  vi.fn().mockImplementation((query: string) => ({
    matches: query === '(hover: none)',
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }))

describe('makeIcon', () => {
  beforeEach(() => {
    motionPreference.reduce = false
  })

  it('renders a 24 grid svg with the lucide defaults', () => {
    const { container } = render(<Sample />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('viewBox')).toBe('0 0 24 24')
    expect(svg.getAttribute('width')).toBe('24')
    expect(svg.getAttribute('height')).toBe('24')
    expect(svg.getAttribute('fill')).toBe('none')
    expect(svg.getAttribute('stroke')).toBe('currentColor')
    expect(svg.getAttribute('stroke-width')).toBe('2')
    expect(svg.getAttribute('stroke-linecap')).toBe('round')
    expect(svg.getAttribute('stroke-linejoin')).toBe('round')
    expect(svg.getAttribute('data-icon')).toBe('Sample')
    expect(svg.children).toHaveLength(3)
  })

  it('forwards size, className, strokeWidth and DOM props', () => {
    const onClick = vi.fn()
    const { container } = render(
      <Sample size={16} className="size-4 text-muted" strokeWidth={1.5} onClick={onClick} data-testid="icon" />,
    )
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('width')).toBe('16')
    expect(svg.getAttribute('class')).toBe('size-4 text-muted')
    expect(svg.getAttribute('stroke-width')).toBe('1.5')
    expect(svg.getAttribute('data-testid')).toBe('icon')
    fireEvent.click(svg)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('is decorative by default and speaks only when labelled', () => {
    const { container, rerender } = render(<Sample />)
    expect(container.querySelector('svg')!.getAttribute('aria-hidden')).toBe('true')
    rerender(<Sample aria-label="Sample" />)
    const svg = container.querySelector('svg')!
    expect(svg.hasAttribute('aria-hidden')).toBe(false)
    expect(svg.getAttribute('aria-label')).toBe('Sample')
  })

  it('is a plain svg at rest and mounts motion parts only while hovered', () => {
    fakeTimers()
    const { container } = render(<Sample />)
    expect(isMoving(container)).toBe(false)
    fireEvent.mouseEnter(container.querySelector('svg')!)
    expect(isMoving(container)).toBe(true)
    // A shape without a part stays a plain element.
    expect(container.querySelector('circle')!.hasAttribute('style')).toBe(false)
    fireEvent.mouseLeave(container.querySelector('svg')!)
    // Time to return to rest, then back to the plain svg.
    expect(isMoving(container)).toBe(true)
    act(() => {
      vi.advanceTimersByTime(800)
    })
    expect(isMoving(container)).toBe(false)
    vi.useRealTimers()
  })

  it('stays still under prefers-reduced-motion', () => {
    motionPreference.reduce = true
    const { container } = render(<Sample />)
    fireEvent.mouseEnter(container.querySelector('svg')!)
    expect(isMoving(container)).toBe(false)
    expect(container.querySelector('svg')!.children).toHaveLength(3)
  })

  it('never starts an explicit loop under prefers-reduced-motion', () => {
    motionPreference.reduce = true
    const { container } = render(<Sample animate loop />)
    expect(isMoving(container)).toBe(false)
    // The controller itself stays idle: no loop runs behind a still drawing.
    function Probe() {
      return <i data-active={String(React.useContext(IconContext)?.active)} />
    }
    const probe = render(
      <AnimateIcon animate loop>
        <Probe />
      </AnimateIcon>,
    )
    expect(probe.container.querySelector('i')!.getAttribute('data-active')).toBe('false')
  })

  it('does not react to a touch screen fake hover', () => {
    const matchMedia = window.matchMedia
    window.matchMedia = touchScreen()
    const { container } = render(<Sample />)
    fireEvent.mouseEnter(container.querySelector('svg')!)
    expect(isMoving(container)).toBe(false)
    window.matchMedia = matchMedia
  })

  it('renders the bare drawing with animateOnHover={false}', () => {
    const { container } = render(<Sample animateOnHover={false} />)
    fireEvent.mouseEnter(container.querySelector('svg')!)
    expect(isMoving(container)).toBe(false)
  })

  it('animates when a parent AnimateIcon is hovered', () => {
    const { container, getByRole } = render(
      <AnimateIcon animateOnHover asChild>
        <button type="button">
          <Sample />
          Delete
        </button>
      </AnimateIcon>,
    )
    expect(isMoving(container)).toBe(false)
    fireEvent.mouseEnter(getByRole('button'))
    expect(isMoving(container)).toBe(true)
  })

  it('keeps the child handlers and classes under AnimateIcon asChild', () => {
    const onMouseEnter = vi.fn()
    const { getByRole } = render(
      <AnimateIcon animateOnHover asChild className="outer">
        <button type="button" className="inner" onMouseEnter={onMouseEnter}>
          <Sample />
        </button>
      </AnimateIcon>,
    )
    fireEvent.mouseEnter(getByRole('button'))
    expect(onMouseEnter).toHaveBeenCalledOnce()
    expect(getByRole('button').className).toBe('inner outer')
  })

  it('animates with the explicit animate prop, for loaders', () => {
    const { container } = render(<Sample animate loop />)
    expect(isMoving(container)).toBe(true)
  })

  it('replays the gesture while looping, and returns to rest when stopped', async () => {
    motionPreference.starts = []
    const { rerender } = render(<Sample animate loop loopDelay={20} />)
    await act(() => new Promise((resolve) => setTimeout(resolve, 1200)))
    const played = motionPreference.starts.filter((name) => name === 'animate').length
    expect(played).toBeGreaterThanOrEqual(2)
    rerender(<Sample animate={false} loop loopDelay={20} />)
    expect(motionPreference.starts.at(-1)).toBe('initial')
    await act(() => new Promise((resolve) => setTimeout(resolve, 600)))
    expect(motionPreference.starts.filter((name) => name === 'animate').length).toBeLessThanOrEqual(played + 1)
  })

  it('plays while pressed with animateOnTap', () => {
    const { container } = render(<Sample animateOnTap />)
    const svg = container.querySelector('svg')!
    fireEvent.mouseEnter(svg)
    expect(isMoving(container)).toBe(false)
    fireEvent.pointerDown(svg)
    expect(isMoving(container)).toBe(true)
  })

  it('waits for the delay before playing', () => {
    fakeTimers()
    const { container } = render(<Sample animate delay={200} />)
    expect(isMoving(container)).toBe(false)
    act(() => {
      vi.advanceTimersByTime(250)
    })
    expect(isMoving(container)).toBe(true)
    vi.useRealTimers()
  })

  it('still plays on its own hover when given an explicit animation name', () => {
    const { container } = render(<Sample animation="default" />)
    expect(isMoving(container)).toBe(false)
    fireEvent.mouseEnter(container.querySelector('svg')!)
    expect(isMoving(container)).toBe(true)
  })

  it('exposes its parts, animations and display name', () => {
    expect(Sample.displayName).toBe('Sample')
    expect(Sample.parts).toHaveLength(3)
    expect(Object.keys(Sample.animations.default)).toEqual(['line', 'box'])
  })
})

describe('motion grammar', () => {
  it('returns to rest: every keyframe gesture ends where it starts', () => {
    const gesture = kf({ x: [0, 2, 0], rotate: [0, -8, 4, 0] }, 0.5)
    expect(gesture.initial).toMatchObject({ x: 0, rotate: 0 })
    const animate = gesture.animate as Record<string, number[]>
    expect(animate.x.at(-1)).toBe(0)
    expect(animate.rotate.at(-1)).toBe(0)
  })

  it('draws from nothing to the full path, without a flash before a delayed start', () => {
    const delayed = draw(0.2, 0.3).animate as { pathLength: number[]; opacity: number[] }
    expect(delayed.pathLength).toEqual([0, 0, 1])
    expect(delayed.opacity[0]).toBe(0)
    expect((draw().initial as { pathLength: number }).pathLength).toBe(1)
  })

  it('holds a symmetric turn and snaps a full spin back', () => {
    expect((turn(90).animate as { rotate: number }).rotate).toBe(90)
    const full = spin(360)
    expect((full.animate as { rotate: number[] }).rotate).toEqual([0, 360])
    expect((full.initial as { transition: { duration: number } }).transition.duration).toBe(0)
  })
})
