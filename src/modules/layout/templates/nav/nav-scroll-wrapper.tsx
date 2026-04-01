"use client"

import { useEffect, useState } from "react"

export default function NavScrollWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="sticky top-0 inset-x-0 z-50 transition-shadow duration-300"
      style={
        scrolled
          ? { boxShadow: "0 8px 32px rgba(128,80,98,0.08)" }
          : undefined
      }
    >
      {children}
    </div>
  )
}
