import type { Variants } from 'motion/react'

/**
 * The motion grammar shared by every icon.
 *
 * Every icon picks its gestures from this file, so the whole set moves the
 * same way: the same durations (0.3 to 0.6 s), the same curves, amplitudes of
 * one or two pixels on the 24 grid. Only transforms, opacity and path length
 * are animated: nothing that triggers a layout recalculation.
 *
 * There are two kinds of gesture:
 * - the round trip (`kf`, `move`, `rock`, `pulse`, `blink`, `shake`): keyframes
 *   that end on the resting value, so the icon is back in place before the
 *   pointer even leaves;
 * - the held state (`turn`): the part stays rotated while hovered. It is only
 *   used for symmetric shapes (a plus, a cross, a gear) where the rotated
 *   state looks the same as the resting one.
 *
 * Each factory is annotated `@__NO_SIDE_EFFECTS__`: without it, the bundler
 * would keep the `move(0, -2)` call of an icon that nobody imports.
 */

/** A strong ease-out curve, the default curve of the set. */
export const EASE = [0.23, 1, 0.32, 1] as const

/** The way back to rest when the hover ends mid-gesture: short, no bounce. */
const BACK = { duration: 0.25, ease: EASE }

type Frames = Record<string, number[]>

/** Keyframes that start from rest and come back to it. */
/* @__NO_SIDE_EFFECTS__ */
export function kf(frames: Frames, duration = 0.4, delay = 0): Variants {
  const initial: Record<string, number> = {}
  for (const key in frames) initial[key] = frames[key][0]
  return {
    initial: { ...initial, transition: BACK },
    animate: { ...frames, transition: { duration, delay, ease: 'easeInOut' } },
  }
}

/** Moves forward, then back: arrows, chevrons, anything that points. */
/* @__NO_SIDE_EFFECTS__ */
export function move(x: number, y: number, duration = 0.4, delay = 0): Variants {
  const frames: Frames = {}
  if (x) frames.x = [0, x, 0]
  if (y) frames.y = [0, y, 0]
  return kf(frames, duration, delay)
}

/** A damped swing around a pivot: a bell, a tag, a brush. */
/* @__NO_SIDE_EFFECTS__ */
export function rock(angles: number[], duration = 0.5, delay = 0): Variants {
  return kf({ rotate: [0, ...angles, 0] }, duration, delay)
}

/** A beat of scale. */
/* @__NO_SIDE_EFFECTS__ */
export function pulse(scale = 1.12, duration = 0.4, delay = 0): Variants {
  return kf({ scale: [1, scale, 1] }, duration, delay)
}

/** A blink: status lights, dots, keys. */
/* @__NO_SIDE_EFFECTS__ */
export function blink(delay = 0, duration = 0.45): Variants {
  return kf({ opacity: [1, 0.15, 1] }, duration, delay)
}

/** Refusal or warning: a shake of the head. */
/* @__NO_SIDE_EFFECTS__ */
export function shake(amplitude = 1.5, duration = 0.45): Variants {
  return kf({ x: [0, -amplitude, amplitude, -amplitude / 2, 0] }, duration)
}

/** A rotation held while hovered, for symmetric shapes. */
/* @__NO_SIDE_EFFECTS__ */
export function turn(degrees: number, duration = 0.45): Variants {
  return {
    initial: { rotate: 0, transition: BACK },
    animate: { rotate: degrees, transition: { duration, ease: EASE } },
  }
}

/**
 * A turn that lands back on the original drawing (360 degrees, or 180 for a
 * two-armed shape). The return to zero is instant: the picture is the same,
 * and rotating back would spin the icon the wrong way. In a loop
 * (`animate` + `loop`), this is the continuous rotation of a loader.
 */
/* @__NO_SIDE_EFFECTS__ */
export function spin(degrees = 360, duration = 0.6, ease: 'linear' | typeof EASE = EASE): Variants {
  return {
    initial: { rotate: 0, transition: { duration: 0 } },
    animate: { rotate: [0, degrees], transition: { duration, ease } },
  }
}

/**
 * The path draws itself. The delay goes through the keyframe times rather
 * than `delay`: with `delay`, the part would stay visible, then vanish all at
 * once when its drawing starts.
 */
/* @__NO_SIDE_EFFECTS__ */
export function draw(delay = 0, duration = 0.4): Variants {
  const initial = { pathLength: 1, opacity: 1, transition: BACK }
  if (delay <= 0) {
    return {
      initial,
      animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
        transition: {
          pathLength: { duration, ease: EASE },
          opacity: { duration: Math.min(duration, 0.12), ease: 'linear' },
        },
      },
    }
  }
  const total = delay + duration
  const start = delay / total
  return {
    initial,
    animate: {
      pathLength: [0, 0, 1],
      opacity: [0, 0, 1, 1],
      transition: {
        pathLength: { duration: total, times: [0, start, 1], ease: EASE },
        opacity: { duration: total, times: [0, start, Math.min(1, start + 0.12 / total), 1], ease: 'linear' },
      },
    },
  }
}

/** The part appears while growing slightly: waves, leaves, tips. */
/* @__NO_SIDE_EFFECTS__ */
export function appear(delay = 0, duration = 0.3, from = 0.7): Variants {
  const total = delay + duration
  const start = delay / total
  return {
    initial: { opacity: 1, scale: 1, transition: BACK },
    animate:
      delay <= 0
        ? { opacity: [0, 1], scale: [from, 1], transition: { duration, ease: EASE } }
        : {
            opacity: [0, 0, 1],
            scale: [from, from, 1],
            transition: { duration: total, times: [0, start, 1], ease: EASE },
          },
  }
}
