import Reveal from './Reveal'
import { RESUME } from '../data'

const eyebrow = { fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accentA)' }

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-[1200px] px-[clamp(20px,6vw,80px)] py-[clamp(56px,8vw,110px)]" style={{ scrollMarginTop: 90 }}>
      <Reveal className="mb-[42px]">
        <div className="mb-3.5 font-mono" style={eyebrow}>03 — Resume</div>
        <h2 className="m-0 font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>Resume</h2>
      </Reveal>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center gap-3">
          <a
            href={RESUME.path}
            download={RESUME.fileName}
            className="inline-flex items-center rounded-[10px] px-[18px] py-[9px] text-sm font-semibold text-white no-underline transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(120deg, var(--accentA), var(--accentB))', boxShadow: '0 8px 22px var(--glowA)' }}
          >
            Download Resume
          </a>

          <a
            href={RESUME.path}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[10px] px-[14px] py-[8px] text-sm font-medium no-underline"
            style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
          >
            View
          </a>
        </div>

        <div className="text-sm text-[color:var(--muted)]">Resume file: <span style={{ color: 'var(--text)' }}>{RESUME.fileName}</span></div>
      </div>
    </section>
  )
}
