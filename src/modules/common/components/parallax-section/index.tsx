"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef, ReactNode } from "react"

type ParallaxSectionProps = {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const factor = direction === "up" ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed * factor])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
