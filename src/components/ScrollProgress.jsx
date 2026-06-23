import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, var(--accentA), var(--accentB))',
        boxShadow: '0 0 12px var(--glowA)',
      }}
      className="fixed left-0 top-0 z-[120] h-[3px] w-full"
    />
  )
}
