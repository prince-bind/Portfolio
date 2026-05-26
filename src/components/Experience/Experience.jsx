import { useEffect, useRef, useState } from 'react';
import { experience } from '../../data/portfolioData';
import './Experience.css';

const TYPE_COLORS = {
  'Tech Startup': { color: '#6c63ff', bg: 'rgba(108,99,255,0.12)', border: 'rgba(108,99,255,0.25)' },
  'Internship':   { color: '#00d4aa', bg: 'rgba(0,212,170,0.10)',  border: 'rgba(0,212,170,0.22)' },
  'Part-time':    { color: '#a855f7', bg: 'rgba(168,85,247,0.10)', border: 'rgba(168,85,247,0.22)' },
};

function getTypeStyle(type) {
  return TYPE_COLORS[type] || { color: '#06b6d4', bg: 'rgba(6,182,212,0.10)', border: 'rgba(6,182,212,0.22)' };
}

function ExperienceCard({ exp, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const typeStyle = getTypeStyle(exp.type);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`exp-timeline-item ${visible ? 'exp-visible' : ''} ${hovered ? 'exp-hovered' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Connector dot */}
      <div className="exp-connector">
        <div className="exp-dot" style={{ '--dot-color': typeStyle.color }}>
          <div className="exp-dot-inner" />
        </div>
      </div>

      {/* Card */}
      <div className="exp-card card">
        {/* Glow accent */}
        <div className="exp-card-glow" style={{ '--glow-color': typeStyle.color }} />

        {/* Header row */}
        <div className="exp-card-header">
          <div className="exp-card-header-left">
            <span
              className="exp-type-badge"
              style={{ color: typeStyle.color, background: typeStyle.bg, borderColor: typeStyle.border }}
            >
              {exp.type}
            </span>
            <h3 className="exp-card-role">{exp.role}</h3>
            <div className="exp-card-company-row">
              <span className="exp-card-company">@ {exp.company}</span>
            </div>
          </div>

          <div className="exp-card-header-right">
            <div className="exp-meta-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {exp.duration}
            </div>
            <div className="exp-meta-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {exp.location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="exp-card-description">{exp.description}</p>

        {/* Responsibilities */}
        <div className="exp-card-section">
          <h4 className="exp-card-section-title">Key Responsibilities</h4>
          <ul className="exp-card-responsibilities">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="exp-card-resp-item">
                <span className="exp-resp-bullet" style={{ color: typeStyle.color }}>▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="exp-card-section">
          <h4 className="exp-card-section-title">Technologies</h4>
          <div className="exp-card-tags">
            {exp.tech.map(t => (
              <span
                key={t}
                className="exp-tech-tag"
                style={{ '--tag-color': typeStyle.color }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <p className="section-label">Work History</p>
        <h2 className="section-title">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          Hands-on experience building real-world products and solutions across different industries.
        </p>

        <div className="exp-timeline">
          {/* Central vertical line */}
          <div className="exp-timeline-line" />

          {experience.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
