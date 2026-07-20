import { useEffect, useRef } from 'react'
import { useSeason } from '../context/SeasonContext'
import { SEASONS } from '../utils/seasons'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)
  const { season } = useSeason()
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let width, height

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resize()
    window.addEventListener('resize', resize)

    // === SUMMER: DRIFTING SUN ORBS ===
    class SunRay {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 80 + 40
        this.baseOpacity = Math.random() * 0.3 + 0.15
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.03 + 0.01
        // MOVEMENT
        this.speedX = Math.random() * 0.4 - 0.2
        this.speedY = Math.random() * 0.3 - 0.15
        this.wobble = Math.random() * 0.02 + 0.01
        this.wobbleOffset = Math.random() * Math.PI * 2
      }
      update() {
        this.pulse += this.pulseSpeed
        this.currentOpacity = this.baseOpacity + Math.sin(this.pulse) * 0.12
        
        // ACTUAL MOVEMENT
        this.x += this.speedX + Math.sin(Date.now() * 0.001 + this.wobbleOffset) * 0.3
        this.y += this.speedY + Math.cos(Date.now() * 0.001 + this.wobbleOffset) * 0.2
        
        // Wrap around screen
        if (this.x < -this.size) this.x = width + this.size
        if (this.x > width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = height + this.size
        if (this.y > height + this.size) this.y = -this.size
      }
      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        )
        gradient.addColorStop(0, `rgba(255, 220, 80, ${this.currentOpacity})`)
        gradient.addColorStop(0.4, `rgba(255, 180, 40, ${this.currentOpacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(255, 150, 0, 0)')
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Bright center
        ctx.beginPath()
        ctx.arc(this.x, this.y, 6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 220, ${this.currentOpacity + 0.4})`
        ctx.fill()
      }
    }

    // === WINTER: FALLING SNOW ===
    class Snowflake {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height - height
        this.size = Math.random() * 4 + 2
        this.speedY = Math.random() * 1.5 + 0.5
        this.speedX = Math.random() * 0.6 - 0.3
        this.opacity = Math.random() * 0.5 + 0.3
        this.sway = Math.random() * 0.01 + 0.005
        this.swayOffset = Math.random() * Math.PI * 2
      }
      update() {
        this.y += this.speedY
        this.x += this.speedX + Math.sin(this.y * this.sway + this.swayOffset) * 0.5
        if (this.y > height + 10) {
          this.y = -10
          this.x = Math.random() * width
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    // === SPRING: FALLING RAIN ===
    class Raindrop {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height - height
        this.length = Math.random() * 20 + 10
        this.speedY = Math.random() * 10 + 8
        this.opacity = Math.random() * 0.4 + 0.2
      }
      update() {
        this.y += this.speedY
        if (this.y > height) {
          this.y = -this.length
          this.x = Math.random() * width
        }
      }
      draw() {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y + this.length)
        ctx.strokeStyle = `rgba(120, 230, 180, ${this.opacity})`
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.stroke()
      }
    }

    // === AUTUMN: FALLING LEAVES ===
    class Leaf {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height - height
        this.size = Math.random() * 10 + 5
        this.speedY = Math.random() * 1.5 + 0.8
        this.speedX = Math.random() * 1 - 0.5
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = Math.random() * 0.04 - 0.02
        this.opacity = Math.random() * 0.5 + 0.3
        this.swayFreq = Math.random() * 0.008 + 0.004
        this.swayPhase = Math.random() * Math.PI * 2
      }
      update() {
        this.y += this.speedY
        this.x += this.speedX + Math.sin(this.y * this.swayFreq + this.swayPhase) * 1
        this.rotation += this.rotationSpeed
        if (this.y > height + 20) {
          this.y = -20
          this.x = Math.random() * width
        }
      }
      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.beginPath()
        ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 140, 50, ${this.opacity})`
        ctx.fill()
        ctx.restore()
      }
    }

    function initParticles() {
      particles = []
      const count = season === SEASONS.SUMMER ? 30 : 100
      for (let i = 0; i < count; i++) {
        switch (season) {
          case SEASONS.WINTER: particles.push(new Snowflake()); break
          case SEASONS.SPRING: particles.push(new Raindrop()); break
          case SEASONS.SUMMER: particles.push(new SunRay()); break
          case SEASONS.AUTUMN: particles.push(new Leaf()); break
        }
      }
    }

    initParticles()

    function animate() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [season])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  )
}