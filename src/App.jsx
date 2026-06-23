import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Particles from './components/Particles'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="relative min-h-screen overflow-hidden font-body text-[color:var(--text)]">
      <Loader show={loading} />
      <ScrollProgress />
      <Background />
      <Particles />

      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Certifications />
          <Resume />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
