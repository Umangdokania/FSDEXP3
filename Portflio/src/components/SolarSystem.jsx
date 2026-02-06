import { useNavigate } from 'react-router-dom'
import Planet from './Planet'
import './SolarSystem.css'

function SolarSystem() {
  const navigate = useNavigate()
  
  const planets = [
    { name: 'Home', path: '/', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', icon: '🏠', label: 'HOME' },
    { name: 'Skills', path: '/skills', gradient: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)', icon: '⚡', label: 'SKILLS' },
    { name: 'Projects', path: '/projects', gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', icon: '🚀', label: 'PROJECTS' },
    { name: 'About', path: '/profile', gradient: 'linear-gradient(135deg, #f59e0b 0%, #eab308 100%)', icon: '🤖', label: 'ABOUT', isMain: true },
    { name: 'Contact', path: '/contact', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', icon: '📡', label: 'CONTACT' }
  ]

  return (
    <div className="neural-network">
      <div className="nodes-container">
        {planets.map((planet, index) => (
          <Planet 
            key={index}
            name={planet.name}
            path={planet.path}
            gradient={planet.gradient}
            icon={planet.icon}
            label={planet.label}
            isMain={planet.isMain}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default SolarSystem
