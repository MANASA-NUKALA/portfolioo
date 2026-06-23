import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { PROFILE } from '../data'

function useTypewriter(words, typeSpeed = 95, deleteSpeed = 45, pause = 1500) {
  const [text, setText] = useState('')
  useEffect(() => {
    let r = 0, c = 0, deleting = false, timer
    const tick = () => {
      const full = words[r]
      if (!deleting) {
        c++
        if (c > full.length) {
          deleting = true
          timer = setTimeout(tick, pause)
          return
        }
      } else {
        c--
        if (c < 0) {
          deleting = false
          r = (r + 1) % words.length
          c = 0
        }
      }
      setText(full.slice(0, Math.max(0, c)))
      timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
    }
    tick()
    return () => clearTimeout(timer)
  }, [])
  return text
}

const Stat = ({ value, label }) => (
  <div>
    <div className="gradient-text font-display text-3xl font-bold">{value}</div>
    <div className="mt-0.5 text-[13px]" style={{ color: 'var(--faint)' }}>{label}</div>
  </div>
)

export default function Hero() {
  const role = useTypewriter(PROFILE.roles)

  return (
    <header id="home" className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-12 px-[clamp(20px,6vw,80px)] py-[clamp(56px,9vw,120px)]" style={{ scrollMarginTop: 90 }}>
      <motion.div
        className="min-w-[300px] flex-1 basis-[420px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 0.8, 0.3, 1] }}
      >
        <div className="mb-[26px] inline-flex items-center gap-2.5 rounded-full px-[15px] py-[7px] font-mono text-[12.5px]" style={{ border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--muted)' }}>
          <span className="h-2 w-2 rounded-full" style={{ background: '#3ddc84', boxShadow: '0 0 10px #3ddc84' }} />
          Open to Frontend &amp; MERN roles · 2026
        </div>

        <h1 className="m-0 mb-2.5 font-display font-bold leading-[1.02] tracking-[-0.03em]" style={{ fontSize: 'clamp(40px,6.8vw,76px)' }}>
          Nukala<br />
          <span className="gradient-text">Manasa</span>
        </h1>

        <div className="my-1.5 mb-[22px] flex min-h-[38px] items-center gap-1 font-mono font-medium" style={{ fontSize: 'clamp(16px,2.4vw,24px)', color: 'var(--text)' }}>
          <span style={{ color: 'var(--accentA)' }}>&gt;</span>
          <span>{role}</span>
          <span className="ml-0.5 inline-block w-2.5 rounded-[1px]" style={{ height: '1.1em', background: 'var(--accentB)', animation: 'blink 1s step-end infinite' }} />
        </div>

        <p className="m-0 mb-[34px] max-w-[540px] leading-[1.7]" style={{ fontSize: 'clamp(15px,1.6vw,18px)', color: 'var(--muted)' }}>
          Computer Science graduate building modern web applications with{' '}
          <strong style={{ color: 'var(--text)' }}>React</strong>,{' '}
          <strong style={{ color: 'var(--text)' }}>JavaScript</strong>,{' '}
          <strong style={{ color: 'var(--text)' }}>Java</strong>,{' '}
          <strong style={{ color: 'var(--text)' }}>SQL</strong> and the{' '}
          <strong style={{ color: 'var(--text)' }}>MERN stack</strong> — responsive, scalable, and user-focused.
        </p>

        <div className="flex flex-wrap gap-3.5">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-xl px-[26px] py-[13px] text-[15px] font-semibold text-white no-underline transition-transform hover:-translate-y-0.5" style={{ background: 'linear-gradient(120deg, var(--accentA), var(--accentB))', boxShadow: '0 12px 30px var(--glowA)' }}>
            View Projects <FiArrowRight />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-[26px] py-[13px] text-[15px] font-semibold no-underline" style={{ color: 'var(--text)', background: 'var(--card)', border: '1px solid var(--border-strong)' }}>
            Contact Me
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl px-[26px] py-[13px] text-[15px] font-semibold no-underline" style={{ color: 'var(--muted)', background: 'transparent', border: '1px solid var(--border)' }}>
            <FiDownload /> Download Resume
          </a>
        </div>

        <div className="mt-11 flex flex-wrap gap-[30px]">
          <Stat value="8.98" label="CGPA" />
          <div className="w-px" style={{ background: 'var(--border)' }} />
          <Stat value="4+" label="Projects" />
          <div className="w-px" style={{ background: 'var(--border)' }} />
          <Stat value="2026" label="B.E. CSE Grad" />
        </div>
      </motion.div>

      <motion.div
        className="flex min-w-[300px] flex-1 basis-[380px] justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 0.8, 0.3, 1] }}
      >
        <div className="w-full max-w-[460px] overflow-hidden rounded-[18px]" style={{ border: '1px solid var(--border)', background: 'var(--card)', backdropFilter: 'blur(14px)', boxShadow: 'var(--shadow)', animation: 'float 6s ease-in-out infinite' }}>
          <div className="flex items-center gap-2 px-4 py-[13px]" style={{ borderBottom: '1px solid var(--border)', background: 'var(--field)' }}>
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: '#ff5f57' }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: '#febc2e' }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-2.5 font-mono text-xs" style={{ color: 'var(--faint)' }}>developer.js</span>
          </div>
          <pre className="m-0 whitespace-pre-wrap p-[22px] font-mono text-[13.5px] leading-[1.85]" style={{ color: 'var(--muted)' }}>
<span style={{ color: '#c792ea' }}>const</span> <span style={{ color: 'var(--text)' }}>developer</span> {'= {'}
{'\n  '}<span style={{ color: '#82aaff' }}>name</span>: <span style={{ color: '#c3e88d' }}>'Nukala Manasa'</span>,
{'\n  '}<span style={{ color: '#82aaff' }}>role</span>: <span style={{ color: '#c3e88d' }}>'MERN Stack Dev'</span>,
{'\n  '}<span style={{ color: '#82aaff' }}>stack</span>: [<span style={{ color: '#c3e88d' }}>'React'</span>, <span style={{ color: '#c3e88d' }}>'Node'</span>, <span style={{ color: '#c3e88d' }}>'Mongo'</span>],
{'\n  '}<span style={{ color: '#82aaff' }}>languages</span>: [<span style={{ color: '#c3e88d' }}>'JS'</span>, <span style={{ color: '#c3e88d' }}>'Java'</span>, <span style={{ color: '#c3e88d' }}>'SQL'</span>],
{'\n  '}<span style={{ color: '#82aaff' }}>cgpa</span>: <span style={{ color: '#f78c6c' }}>8.98</span>,
{'\n  '}<span style={{ color: '#82aaff' }}>openToWork</span>: <span style={{ color: '#f78c6c' }}>true</span>,
{'\n  '}<span style={{ color: '#82aaff' }}>ship</span>: () {'=>'} <span style={{ color: '#c3e88d' }}>'great UIs ✦'</span>,
{'\n}'};
          </pre>
        </div>
      </motion.div>
    </header>
  )
}
