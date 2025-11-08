"use client"

import { useEffect, useRef } from "react"

export function FractalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Branch data structure
    const branches: Array<{
      x: number
      y: number
      angle: number
      length: number
      width: number
      generation: number
      growing: boolean
      currentLength: number
    }> = []

    const MAX_BRANCHES = 200
    const GROWTH_SPEED = 2

    // Mouse tracking
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Spawn new branch near cursor
      if (branches.length < MAX_BRANCHES && Math.random() < 0.1) {
        const angle = Math.random() * Math.PI * 2
        branches.push({
          x: mouseX + (Math.random() - 0.5) * 100,
          y: mouseY + (Math.random() - 0.5) * 100,
          angle,
          length: 30 + Math.random() * 50,
          width: 2 + Math.random() * 2,
          generation: 0,
          growing: true,
          currentLength: 0,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Drawing function
    const drawBranch = (branch: (typeof branches)[0]) => {
      const endX = branch.x + Math.cos(branch.angle) * branch.currentLength
      const endY = branch.y + Math.sin(branch.angle) * branch.currentLength

      // Gradient from wine to green
      const gradient = ctx.createLinearGradient(branch.x, branch.y, endX, endY)
      const opacity = Math.max(0.1, 1 - branch.generation * 0.15)

      if (branch.generation % 2 === 0) {
        gradient.addColorStop(0, `rgba(107, 31, 50, ${opacity})`)
        gradient.addColorStop(1, `rgba(163, 177, 138, ${opacity})`)
      } else {
        gradient.addColorStop(0, `rgba(163, 177, 138, ${opacity})`)
        gradient.addColorStop(1, `rgba(212, 175, 55, ${opacity})`)
      }

      ctx.strokeStyle = gradient
      ctx.lineWidth = branch.width
      ctx.lineCap = "round"

      ctx.beginPath()
      ctx.moveTo(branch.x, branch.y)
      ctx.lineTo(endX, endY)
      ctx.stroke()

      // Draw leaves at the end of mature branches
      if (branch.currentLength >= branch.length && branch.generation > 0) {
        ctx.fillStyle = `rgba(163, 177, 138, ${opacity * 0.6})`
        ctx.beginPath()
        ctx.ellipse(endX, endY, branch.width * 2, branch.width * 3, branch.angle, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Animation loop
    const animate = () => {
      // Fade effect instead of clear
      ctx.fillStyle = "rgba(245, 235, 220, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw branches
      for (let i = branches.length - 1; i >= 0; i--) {
        const branch = branches[i]

        // Grow branch
        if (branch.growing && branch.currentLength < branch.length) {
          branch.currentLength += GROWTH_SPEED
        } else {
          branch.growing = false

          // Spawn child branches
          if (branch.generation < 4 && Math.random() < 0.05) {
            const endX = branch.x + Math.cos(branch.angle) * branch.length
            const endY = branch.y + Math.sin(branch.angle) * branch.length

            const childCount = Math.random() < 0.7 ? 2 : 1
            for (let j = 0; j < childCount; j++) {
              if (branches.length < MAX_BRANCHES) {
                const angleOffset = ((Math.random() - 0.5) * Math.PI) / 2
                branches.push({
                  x: endX,
                  y: endY,
                  angle: branch.angle + angleOffset,
                  length: branch.length * (0.6 + Math.random() * 0.2),
                  width: branch.width * 0.7,
                  generation: branch.generation + 1,
                  growing: true,
                  currentLength: 0,
                })
              }
            }
          }
        }

        drawBranch(branch)

        // Remove old branches that are far from cursor
        const distToMouse = Math.hypot(branch.x - mouseX, branch.y - mouseY)
        if (distToMouse > 500 && !branch.growing) {
          branches.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "#F5EBDC" }} />
}
