import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="page-container home-page">
      <div className="page-content home-content">
        <div className="hero-section">
          <div className="welcome-badge">
            <span className="badge-icon">⚡</span>
            <span>AI Engineer</span>
          </div>
          
          <h1 className="hero-title">
            Umang Dokania
          </h1>
          
          <p className="hero-subtitle">
            Building intelligent systems with AI & Machine Learning
          </p>
          
          <div className="cta-buttons">
            <button onClick={() => navigate('/projects')} className="cta-button primary">
              <span>View Projects</span>
              <span className="button-arrow">→</span>
            </button>
            <button onClick={() => navigate('/contact')} className="cta-button secondary">
              <span>Get in Touch</span>
              <span className="button-icon">✉</span>
            </button>
          </div>
          
          <div className="tech-hint">
            <p>Click any node above to explore</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
