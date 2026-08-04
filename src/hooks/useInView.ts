import { useEffect, useRef, useState, type RefObject } from 'react'

interface UseInViewOptions {
  threshold?: number
  once?: boolean
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  once = true,
}: UseInViewOptions = {}): { ref: RefObject<T | null>; inView: boolean } {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, inView }
}
