import { useState } from 'react';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const categories = ['All', 'AI', 'Full Stack', 'IoT'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A showcase of projects that demonstrate my technical skills and problem-solving abilities.
            </p>
          </div>

          <div className="project-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                id={`project-filter-${cat.toLowerCase().replace(' ', '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`project-card card ${project.featured ? 'featured' : ''}`}
              style={{ '--project-color': project.color, animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              id={`project-card-${project.id}`}
            >
              {/* Project Header */}
              <div className="project-card-top">
                <div className="project-icon-wrap" style={{ background: `${project.color}18` }}>
                  <div className="project-icon-dot" style={{ background: project.color }} />
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                    id={`project-${project.id}-github`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live Demo"
                    id={`project-${project.id}-live`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Category Badge */}
              <span className="project-category" style={{ color: project.color, background: `${project.color}15`, borderColor: `${project.color}30` }}>
                {project.category}
              </span>

              {project.featured && (
                <span className="project-featured-badge">⭐ Featured</span>
              )}

              {/* Content */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Highlights */}
              <div className="project-highlights">
                {project.highlights.map(h => (
                  <span key={h} className="highlight-tag">
                    <span className="highlight-check">✓</span> {h}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="project-tech">
                {project.tech.slice(0, 4).map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="tech-pill-more">+{project.tech.length - 4}</span>
                )}
              </div>

              {/* Hover gradient bar */}
              <div className="project-color-bar" style={{ background: project.color }} />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="projects-footer">
          <a
            href="https://github.com/prince-bind"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="view-all-projects-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
