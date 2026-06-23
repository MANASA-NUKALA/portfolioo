import Reveal from './Reveal'
import { CERTIFICATIONS } from '../data'

const eyebrow = { fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accentA)' }

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-[1200px] px-[clamp(20px,6vw,80px)] py-[clamp(56px,8vw,110px)]" style={{ scrollMarginTop: 90 }}>
      <Reveal className="mb-[42px]">
        <div className="mb-3.5 font-mono" style={eyebrow}>02 — Certifications</div>
        <h2 className="m-0 font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>Verified credentials</h2>
      </Reveal>

      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {CERTIFICATIONS.map((c) => (
          <Reveal key={c.title}>
            <div className="rounded-[18px] p-[18px] h-full" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="mb-3 text-sm font-semibold">{c.title}</div>
              <div className="mb-3 text-xs text-[color:var(--muted)]">{c.issuer}</div>
              <div className="overflow-hidden rounded-[10px] border" style={{ borderColor: 'var(--border)' }}>
                <img src={c.image} alt={c.title} className="w-full h-[160px] object-cover" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
