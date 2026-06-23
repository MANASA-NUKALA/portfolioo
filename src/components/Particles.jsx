import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    if (!c) return
    const ctx = c.getContext('2d')
    let w, h, dpr, raf
    const pts = []

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = c.width = window.innerWidth * dpr
      h = c.height = window.innerHeight * dpr
      c.style.width = window.innerWidth + 'px'
      c.style.height = window.innerHeight + 'px'
    }
    resize()

    const N = Math.max(24, Math.min(64, Math.floor(window.innerWidth / 26)))
    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.26 * dpr,
        vy: (Math.random() - 0.5) * 0.26 * dpr,
        r: (Math.random() * 1.5 + 0.6) * dpr,
      })
    }

    const loop = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, 7)
        ctx.fillStyle = 'rgba(150,140,255,.45)'
        ctx.fill()
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          const max = 130 * dpr
          if (dist < max) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = 'rgba(125,115,255,' + (1 - dist / max) * 0.16 + ')'
            ctx.lineWidth = dpr * 0.6
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(loop)
    }
    loop()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-[1]" />
}
