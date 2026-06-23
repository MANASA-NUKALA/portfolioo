import { FiMail, FiGithub, FiArrowUp } from 'react-icons/fi'
import { PROFILE } from '../data'

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-[18px] px-[clamp(20px,6vw,80px)] py-[34px]" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="flex items-center gap-[11px]">
        <span className="grid h-8 w-8 place-items-center rounded-[9px] font-display text-[13px] font-bold text-white" style={{ background: 'linear-gradient(135deg, var(--accentA), var(--accentB))' }}>
          NM
        </span>
        <span className="text-[14px]" style={{ color: 'var(--muted)' }}>© 2026 Nukala Manasa — Built with care.</span>
      </div>
      <div className="flex items-center gap-[18px]">
        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1.5 text-[13.5px] no-underline" style={{ color: 'var(--muted)' }}>
          <FiMail /> Email
        </a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13.5px] no-underline" style={{ color: 'var(--muted)' }}>
          <FiGithub /> GitHub
        </a>
        <a href="#home" className="flex items-center gap-1.5 text-[13.5px] no-underline" style={{ color: 'var(--muted)' }}>
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  )
}
