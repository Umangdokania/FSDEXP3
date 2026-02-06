import { useEffect, useRef } from 'react'
import './SpaceBackground.css'

function SpaceBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let stars = []
    let shootingStars = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 2500)
      for (let i = 0; i < numberOfStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color: Math.random() > 0.7 ? `rgba(102, 126, 234, ` : 'rgba(255, 255, 255, '
        })
      }
    }

    const createShootingStar = () => {
      if (Math.random() < 0.005 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height / 2,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 5,
          angle: Math.random() * Math.PI / 4 + Math.PI / 4,
          opacity: 1
        })
      }
    }

    const animate = () => {
      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      )
      gradient.addColorStop(0, 'rgba(27, 39, 53, 1)')
      gradient.addColorStop(1, 'rgba(9, 10, 15, 1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars with twinkling effect
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${star.color}${star.opacity})`
        ctx.fill()
        
        // Add glow for larger stars
        if (star.radius > 1.5) {
          ctx.shadowBlur = 5
          ctx.shadowColor = star.color + '0.8)'
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Draw and update shooting stars
      createShootingStar()
      shootingStars = shootingStars.filter(star => {
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.opacity -= 0.02

        if (star.opacity > 0) {
          const gradient = ctx.createLinearGradient(
            star.x, star.y,
            star.x - Math.cos(star.angle) * star.length,
            star.y - Math.sin(star.angle) * star.length
          )
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(
            star.x - Math.cos(star.angle) * star.length,
            star.y - Math.sin(star.angle) * star.length
          )
          ctx.stroke()
          return true
        }
        return false
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="space-background" />
}

export default SpaceBackground
