"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [show, setShow] = useState(false)
  const [isGrowing, setIsGrowing] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    setIsGrowing(true)
    localStorage.setItem("cookie-consent", "accepted")
    setTimeout(() => {
      setShow(false)
    }, 600)
  }

  if (!show) return null

  return (
    <>
      <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 glass-card rounded-xl p-6 shadow-2xl">
        <p className="text-sm leading-relaxed mb-4">
          This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to our
          use of cookies.
        </p>
        <Button
          onClick={acceptCookies}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Accept & Bloom 🌿
        </Button>
      </div>

      {isGrowing && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <svg className="w-full h-full">
            <path
              d="M 50% 100% Q 50% 50%, 50% 0%"
              stroke="rgba(212, 175, 55, 0.8)"
              strokeWidth="3"
              fill="none"
              className="animate-grow"
            />
          </svg>
        </div>
      )}
    </>
  )
}
