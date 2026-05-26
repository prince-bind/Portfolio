import { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const displayCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A diverse set of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-tabs">
          <button
            className={`skills-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
            id="skills-tab-all"
          >
            All Skills
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`skills-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              id={`skills-tab-${cat.id}`}
              style={{ '--tab-color': cat.color }}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className={`skills-grid ${activeCategory === 'all' ? 'skills-grid-all' : 'skills-grid-single'}`}>
          {displayCategories.map(category => (
            <div
              key={category.id}
              className="skill-category-card card"
              style={{ '--cat-color': category.color }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon" style={{ background: `${category.color}20`, color: category.color }}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="skill-category-title">{category.title}</h3>
                  <span className="skill-count">{category.items.length} skills</span>
                </div>
              </div>

              <div className="skill-tags-container">
                {category.items.map((skill, idx) => (
                  <div
                    key={skill}
                    className="skill-chip"
                    style={{
                      '--chip-color': category.color,
                      animationDelay: `${idx * 0.05}s`
                    }}
                  >
                    <span className="chip-dot" style={{ background: category.color }} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="skills-marquee">
          <p className="marquee-label">Technologies I work with</p>
          <div className="marquee-track">
            <div className="marquee-content">
              {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Git', 'Supabase', 'OpenAI', 'LangChain', 'Tailwind CSS', 'GraphQL'].map(tech => (
                <span key={tech} className="marquee-item">
                  <span className="marquee-dot" /> {tech}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Git', 'Supabase', 'OpenAI', 'LangChain', 'Tailwind CSS', 'GraphQL'].map(tech => (
                <span key={`d-${tech}`} className="marquee-item">
                  <span className="marquee-dot" /> {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
