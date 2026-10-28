'use client'

import * as React from 'react'
import { useAnimation, useInView, useReducedMotion, type UseInViewOptions } from 'motion/react'

import { IconContext, type IconContextValue } from './icon-context'
import { pointerCanHover } from './icon-trigger'

/** `true` plays the `default` animation; a string plays that named animation. */
export type IconTriggerValue = boolean | string

/** The explicit triggers, accepted by every icon and by `AnimateIcon`. */
export type IconTriggerProps = {
  /** Plays the gesture while truthy, without any user interaction. */
  animate?: IconTriggerValue
  /** Plays the gesture while the element is hovered (ignored on touch screens). */
  animateOnHover?: IconTriggerValue
  /** Plays the gesture while the element is pressed. */
  animateOnTap?: IconTriggerValue
  /** Plays the gesture when the element scrolls into view. */
  animateOnView?: IconTriggerValue
  /** Margin around the viewport for `animateOnView`, as in CSS (`'0px 0px -20% 0px'`). */
  animateOnViewMargin?: UseInViewOptions['margin']
  /** Plays the in-view gesture only the first time. Defaults to `true`. */
  animateOnViewOnce?: boolean
  /** The named animation to play when a trigger is `true`. Defaults to `default`. */
  animation?: string
  /** Repeats the gesture for as long as the trigger is on (a loader). */
  loop?: boolean
  /** Pause between two loops, in milliseconds. */
  loopDelay?: number
  /** Wait before the gesture starts, in milliseconds. */
  delay?: number
}

/** The keys of `IconTriggerProps`, to split them from the rest of the props. */
export const TRIGGER_KEYS = [
  'animate',
  'animateOnHover',
  'animateOnTap',
  'animateOnView',
  'animateOnViewMargin',
  'animateOnViewOnce',
  'animation',
  'loop',
  'loopDelay',
  'delay',
] as const satisfies readonly (keyof IconTriggerProps)[]

export function splitTriggerProps<P extends IconTriggerProps>(props: P) {
  const trigger: IconTriggerProps = {}
  const rest: Record<string, unknown> = {}
  for (const key in props) {
    if ((TRIGGER_KEYS as readonly string[]).includes(key)) (trigger as Record<string, unknown>)[key] = props[key]
    else rest[key] = props[key]
  }
  return { trigger, rest: rest as Omit<P, keyof IconTriggerProps> }
}

type Handlers<E> = {
  onMouseEnter: React.MouseEventHandler<E>
  onMouseLeave: React.MouseEventHandler<E>
  onPointerDown: React.PointerEventHandler<E>
  onPointerUp: React.PointerEventHandler<E>
}

/**
 * The engine behind `AnimateIcon` and the explicit props of an icon: it turns
 * triggers into an `active` flag, and drives a set of motion controls from it
 * (start, loop, return to rest). Under `prefers-reduced-motion`, it never
 * becomes active.
 */
export function useIconController<E extends Element>(
  options: IconTriggerProps,
  ref: React.RefObject<E | null>,
): { value: IconContextValue; handlers: Handlers<E> } {
  const {
    animate,
    animateOnHover,
    animateOnTap,
    animateOnView,
    animateOnViewMargin,
    animateOnViewOnce = true,
    animation,
    loop = false,
    loopDelay = 0,
    delay = 0,
  } = options
  const controls = useAnimation()
  const reduce = useReducedMotion()
  const [hovered, setHovered] = React.useState(false)
  const [pressed, setPressed] = React.useState(false)
  const unobserved = React.useRef<E>(null)
  const inView = useInView(animateOnView ? ref : unobserved, { once: animateOnViewOnce, margin: animateOnViewMargin })

  const sources: [boolean, IconTriggerValue | undefined][] = [
    [Boolean(animate), animate],
    [hovered, animateOnHover],
    [pressed, animateOnTap],
    [inView, animateOnView],
  ]
  const winner = sources.find(([on, trigger]) => on && Boolean(trigger))
  const wanted = winner !== undefined && !reduce
  const name = typeof winner?.[1] === 'string' ? winner[1] : (animation ?? 'default')

  const [waited, setWaited] = React.useState(false)
  React.useEffect(() => {
    if (!wanted || delay <= 0) {
      setWaited(false)
      return
    }
    const timer = setTimeout(() => setWaited(true), delay)
    return () => clearTimeout(timer)
  }, [wanted, delay])
  const active = wanted && (delay <= 0 || waited)

  React.useEffect(() => {
    if (!active) {
      void controls.start('initial')
      return
    }
    let cancelled = false
    let timer: ReturnType<typeof setTimeout> | undefined
    // Always a real timer between two loops, even with no delay: a loop whose
    // parts are not mounted resolves at once and would starve the page.
    const pause = (ms: number) => new Promise<void>((resolve) => (timer = setTimeout(resolve, ms)))
    async function play() {
      do {
        await controls.start('animate')
        if (cancelled || !loop) return
        await pause(loopDelay)
        if (cancelled) return
        controls.set('initial')
      } while (!cancelled)
    }
    void play()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [active, loop, loopDelay, name, controls])

  const value = React.useMemo<IconContextValue>(() => ({ active, controls, animation: name }), [active, controls, name])
  const handlers: Handlers<E> = {
    onMouseEnter: () => {
      if (animateOnHover && pointerCanHover()) setHovered(true)
    },
    onMouseLeave: () => {
      setHovered(false)
      setPressed(false)
    },
    onPointerDown: () => {
      if (animateOnTap) setPressed(true)
    },
    onPointerUp: () => setPressed(false),
  }
  return { value, handlers }
}

/** Calls the caller's handler, then ours. */
export function compose<A extends unknown[]>(theirs: ((...args: A) => void) | undefined, ours: (...args: A) => void) {
  return (...args: A) => {
    theirs?.(...args)
    ours(...args)
  }
}

/** One callback ref that feeds several refs. */
export function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T> {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === 'function') ref(node)
      else if (ref) (ref as React.RefObject<T | null>).current = node
    }
  }
}

/** The ref of an element: a prop since React 19, a field before. */
function elementRef(element: React.ReactElement): React.Ref<unknown> | undefined {
  if (Number.parseInt(React.version, 10) >= 19) return (element.props as { ref?: React.Ref<unknown> }).ref
  return (element as unknown as { ref?: React.Ref<unknown> }).ref
}

export type AnimateIconProps = IconTriggerProps &
  Omit<React.HTMLAttributes<HTMLElement>, 'children'> & {
    /** Merges the triggers into the single child element instead of wrapping it in a `<span>`. */
    asChild?: boolean
    children: React.ReactNode
  }

/**
 * Drives the icons it contains with explicit triggers and motion controls.
 * Needed for a loop, a delay, a tap or an in-view trigger on a group of
 * icons; for a simple hover, prefer `IconTrigger` or `useIconTrigger`, which
 * cost less.
 *
 * ```tsx
 * <AnimateIcon animateOnHover asChild>
 *   <a href="/export"><Download /> Export</a>
 * </AnimateIcon>
 * ```
 */
export function AnimateIcon({ asChild = false, children, ...props }: AnimateIconProps) {
  const { trigger, rest } = splitTriggerProps(props)
  const ref = React.useRef<HTMLElement>(null)
  const { value, handlers } = useIconController(trigger, ref)

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>
    const own = child.props
    return (
      <IconContext.Provider value={value}>
        {React.cloneElement(child, {
          ...rest,
          className: [own.className, rest.className].filter(Boolean).join(' ') || undefined,
          style: own.style || rest.style ? { ...own.style, ...rest.style } : undefined,
          ref: mergeRefs(elementRef(child), ref),
          onMouseEnter: compose(own.onMouseEnter, compose(rest.onMouseEnter, handlers.onMouseEnter)),
          onMouseLeave: compose(own.onMouseLeave, compose(rest.onMouseLeave, handlers.onMouseLeave)),
          onPointerDown: compose(own.onPointerDown, compose(rest.onPointerDown, handlers.onPointerDown)),
          onPointerUp: compose(own.onPointerUp, compose(rest.onPointerUp, handlers.onPointerUp)),
        } as React.HTMLAttributes<HTMLElement> & { ref: React.Ref<HTMLElement> })}
      </IconContext.Provider>
    )
  }

  return (
    <IconContext.Provider value={value}>
      <span
        ref={ref}
        {...rest}
        onMouseEnter={compose(rest.onMouseEnter, handlers.onMouseEnter)}
        onMouseLeave={compose(rest.onMouseLeave, handlers.onMouseLeave)}
        onPointerDown={compose(rest.onPointerDown, handlers.onPointerDown)}
        onPointerUp={compose(rest.onPointerUp, handlers.onPointerUp)}
      >
        {children}
      </span>
    </IconContext.Provider>
  )
}
