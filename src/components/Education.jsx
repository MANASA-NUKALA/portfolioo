import { FaGraduationCap } from 'react-icons/fa'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1100px] px-[clamp(20px,6vw,80px)] pb-[clamp(40px,6vw,80px)]" style={{ scrollMarginTop: 90 }}>
      <Reveal>
        <div className="flex flex-wrap items-center gap-6 rounded-[20px] p-[30px]" style={{ border: '1px solid var(--border)', background: 'linear-gradient(120deg, var(--accent-soft), transparent)' }}>
          <div className="grid h-[60px] w-[60px] flex-none place-items-center rounded-2xl" style={{ background: 'linear-gradient(135deg, var(--accentA), var(--accentB))', boxShadow: '0 8px 22px var(--glowA)' }}>
            <FaGraduationCap size={26} color="#fff" />
          </div>
          <div className="flex-1 basis-[280px]">
            <div className="mb-[5px] font-mono text-xs" style={{ color: 'var(--faint)' }}>2022 – 2026</div>
            <h3 className="m-0 mb-1 font-display text-[21px] font-semibold">B.E. — Computer Science &amp; Engineering</h3>
            <div className="text-[14.5px]" style={{ color: 'var(--muted)' }}>Stanley College of Engineering and Technology for Women</div>
          </div>
          <div className="text-center">
            <div className="gradient-text font-display text-[34px] font-bold">8.98</div>
            <div className="text-xs" style={{ color: 'var(--faint)' }}>CGPA</div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
