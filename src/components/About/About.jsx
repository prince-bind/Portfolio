import { personalInfo } from '../../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left - Text Content */}
          <div className="about-content">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting Digital <br />
              <span className="gradient-text">Experiences</span>
            </h2>
            <div className="divider" />

            <p className="about-bio">{personalInfo.bio}</p>
            <p className="about-bio">{personalInfo.bio2}</p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div>
                  <span className="detail-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="detail-value detail-link">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🎓</span>
                <div>
                  <span className="detail-label">Education</span>
                  <span className="detail-value">B.Tech (Engg. Physics) 4th year, DTU</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <div>
                  <span className="detail-label">Status</span>
                  <span className="detail-value available">
                    <span className="status-dot" />
                    Available for Web Dev role
                  </span>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="about-linkedin-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="about-github-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Right - Code Block */}
          <div className="about-visual">
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className="code-filename">about.js</span>
              </div>
              <div className="code-body">
                <pre>
                  <code>
{`const developer = {
  name: "Prince Bind",
  role: "Full Stack Developer",
  location: "Delhi, India",
  
  education: {
    degree: "B.Tech (Engg. Physics)",
    university: "DTU",
    year: 2027
  },
  
  skills: [
    "React", "Node.js",
    "Python", "AI/ML",
    "TypeScript", "MongoDB"
  ],
  
  passion: [
    "Building AI apps",
    "Clean code",
    "Open source",
    "Learning daily"
  ],
  
  available: true,
  
  greet() {
    return "Let's build something!";
  }
};`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Values Cards */}
            <div className="values-grid">
              {[
                { icon: '🎯', title: 'Goal-Oriented', desc: 'Focused on delivering impact' },
                { icon: '🔥', title: 'Passionate', desc: 'Love for technology & craft' },
                { icon: '🤝', title: 'Collaborative', desc: 'Team player & communicator' },
                { icon: '📈', title: 'Growth Mindset', desc: 'Always learning, always improving' },
              ].map((v, i) => (
                <div className="value-card" key={i}>
                  <span className="value-icon">{v.icon}</span>
                  <div>
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
