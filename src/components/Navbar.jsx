import { useState } from 'react'

const links = [
  ['About', '#about'],
  ['Certifications', '#certifications'],
  ['Resume', '#resume'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[90] border-b" style={{ borderColor: 'var(--border)', backdropFilter: 'blur(16px)', background: 'color-mix(in srgb, var(--bg) 72%, transparent)' }}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-[clamp(18px,5vw,72px)] py-3.5">
        <a href="#home" className="flex items-center gap-3 no-underline" style={{ color: 'var(--text)' }}>
          <span
            className="grid h-[38px] w-[38px] place-items-center rounded-[11px] font-display text-[15px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, var(--accentA), var(--accentB))', boxShadow: '0 6px 18px var(--glowA)' }}
          >
            NM
          </span>
          <span className="font-display text-base font-semibold tracking-tight">Nukala Manasa</span>
        </a>

        <div className="hidden items-center gap-1.5 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-[9px] px-3.5 py-2 text-sm font-medium no-underline transition-colors"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--card)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent' }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="relative h-7 w-[54px] cursor-pointer rounded-full p-0"
            style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
          >
            <span
              className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full"
              style={{
                left: theme === 'light' ? '30px' : '4px',
                background: 'linear-gradient(120deg, var(--accentA), var(--accentB))',
                transition: 'left .3s cubic-bezier(.4,1.4,.5,1)',
                boxShadow: '0 2px 8px var(--glowA)',
              }}
            />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center rounded-[10px] px-[18px] py-[9px] text-sm font-semibold text-white no-underline transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(120deg, var(--accentA), var(--accentB))', boxShadow: '0 8px 22px var(--glowA)' }}
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  )
}
