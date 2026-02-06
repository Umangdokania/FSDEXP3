import { useNavigate } from 'react-router-dom'
import './Planet.css'

function Planet({ name, path, gradient, icon, label, isMain, index }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(path)
  }

  return (
    <div
      className={`neural-node ${isMain ? 'main-node' : ''}`}
      onClick={handleClick}
      style={{
        background: gradient,
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="node-core">
        <span className="node-icon">{icon}</span>
      </div>
      <div className="node-glow" style={{ background: gradient }}></div>
      <div className="node-label">{label}</div>
      <div className="node-pulse"></div>
    </div>
  )
}

export default Planet
