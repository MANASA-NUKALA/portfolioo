import { AnimatePresence, motion } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6"
          style={{ background: 'var(--bg)' }}
        >
          <div
            className="h-16 w-16 rounded-full"
            style={{
              border: '3px solid var(--border)',
              borderTopColor: 'var(--accentA)',
              animation: 'spin .8s linear infinite',
            }}
          />
          <div className="gradient-text font-display text-lg font-bold tracking-[0.1em]">
            NUKALA MANASA
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
