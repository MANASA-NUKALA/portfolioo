import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { PROJECTS, CATEGORIES } from '../data'

const eyebrow = { fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accentA)' }

function ProjectCard({ p }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="relative flex flex-col gap-[15px] overflow-hidden rounded-[20px] p-[28px]"
      style={{ border: '1px solid var(--border)', background: 'var(--card)', backdropFilter: 'blur(10px)' }}
    >
      <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: 'linear-gradient(90deg, var(--accentA), var(--accentB))' }} />
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-[7px] px-[11px] py-[5px] font-mono text-[11px] tracking-[0.03em]" style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)', color: 'var(--accentA)' }}>
          {p.tag}
        </span>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-[12.5px] no-underline" style={{ color: 'var(--muted)' }}>
          GitHub <FiArrowUpRight />
        </a>
      </div>
      <h3 className="m-0 mt-0.5 font-display text-[23px] font-semibold tracking-[-0.01em]">{p.name}</h3>
      <p className="m-0 text-[14.5px] leading-[1.65]" style={{ color: 'var(--muted)' }}>{p.desc}</p>
      <div className="mt-0.5 flex flex-col gap-[7px]">
        {p.features.map((f) => (
          <div key={f} className="flex items-center gap-2.5 text-[13.5px]" style={{ color: 'var(--muted)' }}>
            <span className="h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'linear-gradient(120deg, var(--accentA), var(--accentB))' }} />
            {f}
          </div>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-[7px] pt-3.5" style={{ borderTop: '1px solid var(--border)' }}>
        {p.tech.map((t) => (
          <span key={t} className="rounded-[7px] px-2.5 py-[5px] font-mono text-[11.5px]" style={{ background: 'var(--field)', border: '1px solid var(--border)', color: 'var(--faint)' }}>
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cats.includes(filter))),
    [filter],
  )

  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-[clamp(20px,6vw,80px)] py-[clamp(56px,8vw,110px)]" style={{ scrollMarginTop: 90 }}>
      <Reveal className="mb-8">
        <div className="mb-3.5 font-mono" style={eyebrow}>03 — Projects</div>
        <h2 className="m-0 font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>Selected work</h2>
      </Reveal>

      <Reveal className="mb-8 flex flex-wrap gap-2.5">
        {CATEGORIES.map((c) => {
          const active = c === filter
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="cursor-pointer rounded-full px-[18px] py-[9px] text-[13px] font-semibold transition-all"
              style={
                active
                  ? { border: '1px solid transparent', background: 'linear-gradient(120deg, var(--accentA), var(--accentB))', color: '#fff', boxShadow: '0 8px 20px var(--glowA)' }
                  : { border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--muted)' }
              }
            >
              {c}
            </button>
          )
        })}
      </Reveal>

      <motion.div layout className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
