import Reveal from './Reveal'

const eyebrow = { fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accentA)' }

const expBullets = [
  'Developed warehouse automation solutions',
  'Worked with YOLOv8 and OpenCV for object detection',
  'Built object detection & counting workflows',
  'Collaborated using Git and GitHub',
]

const ossBullets = [
  'Contributed to open-source projects',
  'Multiple pull requests merged',
  'Collaborated with maintainers via GitHub',
  'Improved project features & code quality',
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1100px] px-[clamp(20px,6vw,80px)] py-[clamp(56px,8vw,110px)]" style={{ scrollMarginTop: 90 }}>
      <div className="flex flex-wrap gap-12">
        {/* Experience */}
        <div className="min-w-[300px] flex-1 basis-[380px]">
          <Reveal className="mb-[34px]">
            <div className="mb-3.5 font-mono" style={eyebrow}>04 — Experience</div>
            <h2 className="m-0 font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(26px,3.5vw,38px)' }}>Where I've worked</h2>
          </Reveal>
          <Reveal className="relative pl-7">
            <div className="absolute left-[5px] top-1.5 bottom-1.5 w-0.5" style={{ background: 'linear-gradient(var(--accentA), transparent)' }} />
            <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full" style={{ background: 'var(--accentA)', boxShadow: '0 0 0 4px var(--accent-soft)' }} />
            <div className="mb-1.5 font-mono text-[12.5px]" style={{ color: 'var(--faint)' }}>May 2025 – June 2025</div>
            <h3 className="m-0 mb-1 font-display text-xl font-semibold">AI Intern</h3>
            <div className="mb-3.5 text-[14.5px]" style={{ color: 'var(--accentB)' }}>Purview Services</div>
            <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
              {expBullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-[14px] leading-[1.55]" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--accentA)' }}>▹</span>{b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Open Source */}
        <div id="opensource" className="min-w-[300px] flex-1 basis-[380px]" style={{ scrollMarginTop: 90 }}>
          <Reveal className="mb-[34px]">
            <div className="mb-3.5 font-mono" style={eyebrow}>05 — Open Source</div>
            <h2 className="m-0 font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(26px,3.5vw,38px)' }}>Giving back</h2>
          </Reveal>
          <Reveal>
            <div className="rounded-[18px] p-[26px]" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="m-0 font-display text-[19px] font-semibold">Social Summer of Code</h3>
                <span className="rounded-[7px] px-[11px] py-[5px] font-mono text-[11px]" style={{ background: 'var(--accent-soft)', color: 'var(--accentA)' }}>SSoC</span>
              </div>
              <div className="mb-4 text-[14px]" style={{ color: 'var(--accentB)' }}>Contribution · AutoEDA</div>
              <div className="flex flex-col gap-2.5">
                {ossBullets.map((b) => (
                  <div key={b} className="flex gap-2.5 text-[14px]" style={{ color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--accentA)' }}>✓</span>{b}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
