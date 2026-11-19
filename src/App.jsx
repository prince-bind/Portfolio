import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import { profile, stats, projects, client, experience, skills, about } from './data'

const ease = [0.2, 0.7, 0.2, 1]

function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease }}>
      {children}
    </motion.div>
  )
}

function Count({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    let start = null, raf
    const step = (t) => {
      start ??= t
      const p = Math.min((t - start) / 1400, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [seen, to])
  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

function Typer({ words }) {
  const [i, setI] = useState(0), [t, setT] = useState(''), [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    let id
    if (!del && t === w) id = setTimeout(() => setDel(true), 1400)
    else if (del && t === '') id = setTimeout(() => { setDel(false); setI((i + 1) % words.length) }, 200)
    else id = setTimeout(() => setT(del ? w.slice(0, t.length - 1) : w.slice(0, t.length + 1)), del ? 30 : 65)
    return () => clearTimeout(id)
  }, [t, del, i, words])
  return <span className="typer">{t}<i aria-hidden="true" /></span>
}

function Card({ children, className = '' }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px')
    e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px')
  }
  return (
    <motion.article className={'card ' + className} onMouseMove={move}
      initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, ease }}>
      {children}
    </motion.article>
  )
}

const Chips = ({ items }) => items.length > 0 && <div className="chips">{items.map((s) => <span key={s}>{s}</span>)}</div>
const Links = ({ items }) => <div className="links">{items.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer">{l}</a>)}</div>
const Title = ({ children }) => <Reveal><h2>{children}</h2></Reveal>

export default function App() {
  const [theme, setTheme] = useState(() => (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))
  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])
  const { scrollYProgress } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const letters = profile.name.split('')

  return (
    <>
      <motion.div className="progress" style={{ scaleX: bar }} />
      <header className="nav">
        <a href="#top" className="logo">PB</a>
        <nav aria-label="Sections">
          {['projects', 'freelancing', 'experience', 'skills', 'about', 'contact'].map((s) => <a key={s} href={'#' + s}>{s}</a>)}
        </nav>
        <button className="theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle light and dark theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="orb o1" /><div className="orb o2" /><div className="orb o3" />
          <div className="w">
            <motion.p className="kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>Hi, I’m</motion.p>
            <h1 aria-label={profile.name}>
              {letters.map((c, i) => (
                <motion.span key={i} aria-hidden="true" className={i > 6 ? 'hl' : ''} initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.7, ease }}>
                  {c === ' ' ? '\u00A0' : c}
                </motion.span>
              ))}
            </h1>
            <motion.p className="build" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              I build <Typer words={profile.roles} />
            </motion.p>
            <motion.p className="lede" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}>{profile.lede}</motion.p>
            <motion.div className="btns" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
              <a className="btn p" href="#projects">See my projects</a>
              <a className="btn" href={'mailto:' + profile.email}>Email me</a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </motion.div>
            <div className="stats">
              {stats.map((s) => <div key={s.l}><b><Count to={s.n} prefix={s.p} suffix={s.s} /></b><span>{s.l}</span></div>)}
            </div>
          </div>
        </section>

        <section id="projects"><div className="w"><Title>Projects</Title>
          <div className="grid two">
            {projects.map((p) => (
              <Card key={p.name}><h3>{p.name}</h3><p className="tag">{p.tag}</p>
                <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul><Chips items={p.stack} /><Links items={p.links} /></Card>
            ))}
          </div></div></section>

        <section id="freelancing"><div className="w"><Title>Freelancing</Title>
          <div className="grid">
            {client.map((c) => <Card key={c.name}><h3>{c.name}</h3><p className="tag">{c.tag}</p><p>{c.text}</p><Links items={c.links} /></Card>)}
          </div></div></section>

        <section id="experience"><div className="w"><Title>Experience</Title>
          <div className="timeline">
            <motion.span className="rail" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} />
            {experience.map((e) => (
              <Reveal key={e.role} className="job"><i className="dot" />
                <time>{e.when}</time><h3>{e.role}, {e.org}</h3>
                <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul><Chips items={e.stack} /></Reveal>
            ))}
          </div></div></section>

        <section id="skills"><div className="w"><Title>Skills</Title>
          <div className="marquee" aria-hidden="true"><div>
            {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((s, i) => <span key={i}>{s}</span>)}
          </div></div>
          <dl>{Object.entries(skills).map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.04} className="skill"><dt>{k}</dt><dd>{v.join(', ')}</dd></Reveal>
          ))}</dl></div></section>

        <section id="about"><div className="w"><Title>About</Title>
          <div className="grid">
            <Card><h3>Education</h3><ul>{about.education.map((x) => <li key={x}>{x}</li>)}</ul></Card>
            <Card><h3>Beyond code</h3><ul>{about.beyond.map((x) => <li key={x}>{x}</li>)}</ul></Card>
          </div></div></section>
      </main>

      <footer id="contact"><div className="w">
        <Reveal><h2>Let’s build something.</h2>
          <p className="lede">Open to internships and full-time software roles, and to freelance web projects.</p>
          <div className="btns">
            <a className="btn p" href={'mailto:' + profile.email}>{profile.email}</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div></Reveal>
      </div></footer>
    </>
  )
}
