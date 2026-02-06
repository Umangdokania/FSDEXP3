import BackButton from '../components/BackButton'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Emotional Sync',
      description: 'AI-Based Emotion Tracking System that detects user emotions via facial recognition and sentiment analysis, delivering personalized therapeutic multimedia responses.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Sentiment Analysis']
    },
    {
      title: 'Dual-Axis Solar Tracking System',
      description: 'Engineered a servo-controlled system that aligns solar panels to the sun in two axes. Improved energy absorption and system efficiency using real-time light direction tracking.',
      tech: ['Arduino', 'C++', 'Servo Control', 'IoT']
    },
    {
      title: 'OAuth Social Login',
      description: 'Implemented OAuth-based social login (Google/Facebook/Github) to enable secure, seamless user authentication and improve onboarding experience.',
      tech: ['OAuth 2.0', 'REST APIs', 'Security', 'Backend']
    },
    {
      title: 'Machine Learning Coursework',
      description: 'Comprehensive projects covering supervised and unsupervised learning, neural networks, and real-world ML applications as part of Duke University certification.',
      tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy']
    },
    {
      title: 'Database Management System',
      description: 'Built relational database systems with complex queries, optimization, and normalization techniques for efficient data management.',
      tech: ['MySQL', 'SQL', 'Database Design', 'RDBMS']
    },
    {
      title: 'AI Azure Projects',
      description: 'Explored cloud-based AI services and deployed machine learning models using Microsoft Azure platform for scalable AI solutions.',
      tech: ['Azure', 'Cloud Computing', 'AI Services', 'Deployment']
    }
  ]

  return (
    <>
      <BackButton />
      <div className="page-container projects-page">
      <div className="page-content">
        <h1 className="page-title">Featured Projects</h1>
        <p className="projects-intro">
          A showcase of my recent work and personal projects
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects
