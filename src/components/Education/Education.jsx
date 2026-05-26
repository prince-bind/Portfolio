import { education } from '../../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          The academic foundation that shaped my technical expertise and problem-solving mindset.
        </p>

        <div className="education-timeline">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="edu-card card"
              id={`education-${edu.id}`}
            >
              {/* Timeline indicator */}
              <div className="edu-timeline-dot">
                <span>{edu.icon}</span>
              </div>

              <div className="edu-content">
                <div className="edu-header">
                  <div className="edu-info">
                    <div className="edu-degree-wrap">
                      <span className="edu-grade">{edu.grade}</span>
                    </div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-field">{edu.field}</p>
                  </div>
                </div>

                <div className="edu-institution-bar">
                  <div className="edu-institution-info">
                    <div className="edu-inst-icon">🏛️</div>
                    <div>
                      <div className="edu-institution">{edu.institution}</div>
                      <div className="edu-meta-row">
                        <span className="edu-location">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {edu.location}
                        </span>
                        <span className="edu-duration-badge">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
