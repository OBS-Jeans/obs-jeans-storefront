"use client"

import { motion, useInView } from "motion/react"
import { useRef, useEffect, useState } from "react"

type AnimatedCounterProps = {
  target: string
  className?: string
}

export default function AnimatedCounter({ target, className = "" }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [display, setDisplay] = useState("0")

  // Extract the numeric part and suffix
  const numericMatch = target.match(/^(\d+)(.*)$/)
  const numericTarget = numericMatch ? parseInt(numericMatch[1]) : 0
  const suffix = numericMatch ? numericMatch[2] : target

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * numericTarget)
      setDisplay(`${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, numericTarget, suffix])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {isInView ? display : "0"}
    </motion.span>
  )
}
