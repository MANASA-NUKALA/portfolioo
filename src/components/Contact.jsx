import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiCheck, FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { PROFILE } from '../data'

const eyebrow = { fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accentA)' }

const fieldStyle = {
  width: '100%',
  padding: '13px 15px',
  borderRadius: 11,
  border: '1px solid var(--border)',
  background: 'var(--field)',
  color: 'var(--text)',
  fontSize: 14.5,
  outline: 'none',
}

function ContactRow({ href, icon, label, value }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-3.5 rounded-[13px] p-4 no-underline transition-all"
      style={{ border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--text)' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accentA)'; e.currentTarget.style.background = 'var(--card-hover)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)' }}
    >
      <span style={{ color: 'var(--accentA)' }}>{icon}</span>
      <div>
        <div className="text-xs" style={{ color: 'var(--faint)' }}>{label}</div>
        <div className="text-[14.5px] font-medium">{value}</div>
      </div>
    </a>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    const name = f.name.value || ''
    const email = f.email.value || ''
    const msg = (f.message.value || '') + '\n\n— ' + name + ' (' + email + ')'
    window.location.href =
      'mailto:' + PROFILE.email +
      '?subject=' + encodeURIComponent('Opportunity for Manasa — from ' + (name || 'a recruiter')) +
      '&body=' + encodeURIComponent(msg)
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-[clamp(20px,6vw,80px)] py-[clamp(56px,8vw,110px)]" style={{ scrollMarginTop: 90 }}>
      <div className="flex flex-wrap gap-12">
        <div className="min-w-[300px] flex-1 basis-[340px]">
          <Reveal className="mb-[30px]">
            <div className="mb-3.5 font-mono" style={eyebrow}>06 — Contact</div>
            <h2 className="m-0 mb-4 font-display font-bold leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'clamp(30px,4.5vw,50px)' }}>
              Let's build something<br />great together.
            </h2>
            <p className="m-0 max-w-[42ch] text-base leading-[1.7]" style={{ color: 'var(--muted)' }}>
              I'm actively looking for Frontend, React, MERN, and Software Developer roles. If you're hiring, I'd love to hear from you.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-3">
            <ContactRow href={`mailto:${PROFILE.email}`} icon={<FiMail />} label="Email" value={PROFILE.email} />
            <ContactRow href={`tel:${PROFILE.phone}`} icon={<FiPhone />} label="Phone" value={PROFILE.phoneDisplay} />
            <ContactRow href={PROFILE.github} icon={<FiGithub />} label="GitHub" value={PROFILE.githubHandle} />
          </Reveal>
        </div>

        <Reveal delay={0.12} className="min-w-[300px] flex-1 basis-[380px]">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[380px] flex-col items-center justify-center gap-3.5 rounded-[20px] p-[48px_30px] text-center"
                style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
              >
                <div className="grid h-16 w-16 place-items-center rounded-full text-3xl text-white" style={{ background: 'linear-gradient(135deg, var(--accentA), var(--accentB))' }}>
                  <FiCheck />
                </div>
                <h3 className="m-0 font-display text-2xl font-semibold">Thanks — message ready!</h3>
                <p className="m-0 max-w-[32ch] text-[15px]" style={{ color: 'var(--muted)' }}>
                  Your email client just opened with the message. I'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={onSubmit}
                className="flex flex-col gap-4 rounded-[20px] p-[30px]"
                style={{ border: '1px solid var(--border)', background: 'var(--card)', backdropFilter: 'blur(12px)', boxShadow: 'var(--shadow)' }}
              >
                <div>
                  <label className="mb-[7px] block text-[13px]" style={{ color: 'var(--muted)' }}>Your name</label>
                  <input name="name" required placeholder="Jane Recruiter" style={fieldStyle} onFocus={(e) => (e.target.style.borderColor = 'var(--accentA)')} onBlur={(e) => (e.target.style.borderColor = 'var(--border)')} />
                </div>
                <div>
                  <label className="mb-[7px] block text-[13px]" style={{ color: 'var(--muted)' }}>Your email</label>
                  <input name="email" type="email" required placeholder="you@company.com" style={fieldStyle} onFocus={(e) => (e.target.style.borderColor = 'var(--accentA)')} onBlur={(e) => (e.target.style.borderColor = 'var(--border)')} />
                </div>
                <div>
                  <label className="mb-[7px] block text-[13px]" style={{ color: 'var(--muted)' }}>Message</label>
                  <textarea name="message" required rows={4} placeholder="We'd love to talk to you about a role..." style={{ ...fieldStyle, resize: 'vertical', fontFamily: 'inherit' }} onFocus={(e) => (e.target.style.borderColor = 'var(--accentA)')} onBlur={(e) => (e.target.style.borderColor = 'var(--border)')} />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl border-none p-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ background: 'linear-gradient(120deg, var(--accentA), var(--accentB))', boxShadow: '0 12px 30px var(--glowA)', cursor: 'pointer' }}>
                  Send message <FiArrowRight />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
