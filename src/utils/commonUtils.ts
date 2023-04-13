type ThrottleFn = (...args: any[]) => void

export const throttle = (fn: ThrottleFn, delay = 10): ThrottleFn => {
  let lastExecTime = 0

  return (...args: any[]) => {
    const now = Date.now()

    if (now - lastExecTime >= delay) {
      fn(...args)
      lastExecTime = now
    }
  }
}

type DebounceFn = (...args: any[]) => void

function debounce(fn: DebounceFn, delay: number): DebounceFn {
  let timerId: number | undefined

  return function (...args: any[]) {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      fn(...args)
    }, delay) as any
  }
}