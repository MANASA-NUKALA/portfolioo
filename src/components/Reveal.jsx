import { motion } from 'framer-motion'

// Reusable scroll-reveal wrapper powered by Framer Motion.
export default function Reveal({ children, delay = 0, y = 32, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 0.8, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}
