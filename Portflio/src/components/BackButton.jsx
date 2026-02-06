import { useNavigate } from 'react-router-dom'
import './BackButton.css'

function BackButton() {
  const navigate = useNavigate()

  return (
    <button className="back-button" onClick={() => navigate('/')}>
      <span className="back-arrow">←</span>
      <span className="back-text">Back to Hub</span>
    </button>
  )
}

export default BackButton
