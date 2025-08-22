"use client"

import { useEffect, useState, useRef } from "react"

interface ProgressBarProps {
  value: number
  className?: string
  barClassName?: string
  label?: string
  showValue?: boolean
}

export function ProgressBar({ value, className = "", barClassName = "", label, showValue = false }: ProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div ref={progressRef} className={className}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">{label}</span>
          {showValue && <span className="text-sm text-muted-foreground">{value}%</span>}
        </div>
      )}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full bg-primary rounded-full transition-all duration-2000 ease-out ${barClassName}`}
          style={{
            width: isVisible ? `${value}%` : "0%",
            transition: isVisible ? "width 2s ease-out" : "none",
          }}
        />
      </div>
    </div>
  )
}
