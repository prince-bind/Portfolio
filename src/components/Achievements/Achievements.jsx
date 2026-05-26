import { achievements } from '../../data/portfolioData';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span> & Milestones
          </h2>
          <p className="section-subtitle">
            Key highlights from my journey as a developer and learner.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div
              key={item.id}
              className="achievement-card card"
              style={{ '--ach-color': item.color, animationDelay: `${idx * 0.1}s` }}
              id={`achievement-${item.id}`}
            >
              <div className="achievement-top">
                <div className="achievement-icon-wrap" style={{ background: `${item.color}18` }}>
                  <span className="achievement-icon">{item.icon}</span>
                </div>
                <div className="achievement-meta">
                  <span className="achievement-year">{item.year}</span>
                  <span className="achievement-type" style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}12` }}>
                    {item.type}
                  </span>
                </div>
              </div>

              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>

              <div className="achievement-glow" style={{ background: item.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
