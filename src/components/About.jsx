import { FaGraduationCap } from 'react-icons/fa'
import Reveal from './Reveal'

const eyebrow = { fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accentA)' }

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-[clamp(20px,6vw,80px)] py-[clamp(56px,8vw,110px)]" style={{ scrollMarginTop: 90 }}>
      <Reveal className="mb-[42px]">
        <div className="mb-3.5 font-mono" style={eyebrow}>01 — About</div>
        <h2 className="m-0 max-w-[18ch] font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
          Engineer who cares about the details users feel.
        </h2>
      </Reveal>

      <div className="flex flex-wrap items-start gap-8">
        <Reveal className="min-w-[300px] flex-1 basis-[420px]">
          <p className="m-0 leading-[1.8]" style={{ fontSize: 'clamp(16px,1.7vw,19px)', color: 'var(--muted)' }}>
            I'm a <strong style={{ color: 'var(--text)' }}>B.E. Computer Science &amp; Engineering</strong> graduate
            passionate about creating responsive, user-friendly, and scalable web applications. I've worked across
            full-stack development, AI-powered solutions, and open-source contributions — with a strong pull toward
            frontend engineering, modern web technologies, and clean problem-solving.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-1 basis-[280px] flex-col gap-3.5">
          <div className="flex items-center gap-3.5 rounded-2xl p-[18px]" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
            <FaGraduationCap size={26} style={{ color: 'var(--accentA)', flex: 'none' }} />
            <div>
              <div className="text-[15px] font-semibold">Stanley College of Engineering &amp; Technology for Women</div>
              <div className="mt-[3px] text-[13px]" style={{ color: 'var(--faint)' }}>B.E. CSE · 2022 – 2026 · CGPA 8.98</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {['Frontend', 'React', 'MERN', 'Open Source'].map((t) => (
              <span key={t} className="rounded-full px-3.5 py-2 text-[13px]" style={{ border: '1px solid var(--border)', background: 'var(--accent-soft)', color: 'var(--text)' }}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
