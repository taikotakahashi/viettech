import { useState, useRef, useCallback, useEffect } from 'react'

interface UseDragCarouselOptions {
  itemCount: number
  visibleCount?: number
  autoPlayInterval?: number
}

export function useDragCarousel({
  itemCount,
  visibleCount = 1,
  autoPlayInterval = 0,
}: UseDragCarouselOptions) {
  const [active, setActiveRaw] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const draggingRef = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  const maxSlide = Math.max(0, itemCount - visibleCount)

  const setActive = useCallback(
    (index: number) => {
      setActiveRaw(Math.max(0, Math.min(index, maxSlide)))
    },
    [maxSlide],
  )

  useEffect(() => {
    setActiveRaw((prev) => Math.min(prev, maxSlide))
  }, [maxSlide])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return
    pausedRef.current = true
    draggingRef.current = true
    setIsDragging(true)
    startX.current = e.clientX
    setDragOffset(0)
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return
    setDragOffset(e.clientX - startX.current)
  }, [])

  const finishDrag = useCallback(
    (clientX: number) => {
      if (!draggingRef.current) return

      const delta = clientX - startX.current
      const width = containerRef.current?.offsetWidth ?? 1
      const threshold = Math.min(width * 0.12, 80)

      setActiveRaw((prev) => {
        if (delta < -threshold) return Math.min(prev + 1, maxSlide)
        if (delta > threshold) return Math.max(prev - 1, 0)
        return prev
      })

      draggingRef.current = false
      setIsDragging(false)
      setDragOffset(0)
      window.setTimeout(() => {
        pausedRef.current = false
      }, autoPlayInterval)
    },
    [maxSlide, autoPlayInterval],
  )

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId)
      }
      finishDrag(e.clientX)
    },
    [finishDrag],
  )

  useEffect(() => {
    if (!autoPlayInterval) return

    const timer = window.setInterval(() => {
      if (pausedRef.current || draggingRef.current) return
      setActiveRaw((prev) => (prev >= maxSlide ? 0 : prev + 1))
    }, autoPlayInterval)

    return () => window.clearInterval(timer)
  }, [autoPlayInterval, maxSlide])

  const slideShareOfTrack = 100 / itemCount
  const trackWidthPercent = (itemCount / visibleCount) * 100

  return {
    active,
    setActive,
    maxSlide,
    containerRef,
    isDragging,
    slideStyle: {
      flex: `0 0 ${slideShareOfTrack}%`,
    } as React.CSSProperties,
    trackStyle: {
      width: `${trackWidthPercent}%`,
      transform: `translateX(calc(-${active * slideShareOfTrack}% + ${dragOffset}px))`,
      transition: isDragging ? 'none' : 'transform 0.45s ease-out',
      cursor: isDragging ? 'grabbing' : 'grab',
      touchAction: 'pan-y',
    } as React.CSSProperties,
    dragHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
    },
  }
}
