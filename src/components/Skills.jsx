import Reveal from './Reveal'
import { SKILLS } from '../data'

const eyebrow = { fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accentA)' }

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-[clamp(20px,6vw,80px)] py-[clamp(56px,8vw,110px)]" style={{ scrollMarginTop: 90 }}>
      <Reveal className="mb-[42px]">
        <div className="mb-3.5 font-mono" style={eyebrow}>02 — Skills</div>
        <h2 className="m-0 font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>The toolkit</h2>
      </Reveal>

      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {SKILLS.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 0.08}>
            <div
              className="h-full rounded-[18px] p-[26px] transition-all hover:-translate-y-1"
              style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.background = 'var(--card-hover)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)' }}
            >
              <div className="mb-4 font-mono text-xs tracking-[0.05em]" style={{ color: 'var(--accentB)' }}>{s.group}</div>
              <div className="flex flex-wrap gap-2.5">
                {s.items.map((item) => (
                  <span key={item} className="rounded-[9px] px-[13px] py-2 text-[13.5px]" style={{ background: 'var(--field)', border: '1px solid var(--border)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
