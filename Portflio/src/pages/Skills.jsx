import BackButton from '../components/BackButton'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'C++', 'Java', 'HTML', 'SQL']
    },
    {
      title: 'AI/ML & Data Science',
      skills: ['Machine Learning', 'Generative AI', 'Large Language Models', 'TensorFlow', 'Kaggle', 'Origin Pro']
    },
    {
      title: 'Developer Tools',
      skills: ['Visual Studio', 'Arduino', 'MySQL', 'Git', 'Figma', 'MS Excel']
    },
    {
      title: 'Soft Skills',
      skills: ['Project Leadership', 'Event Management', 'Team Coordination', 'Public Speaking']
    },
    {
      title: 'Coursework',
      skills: ['Data Structures', 'Algorithms', 'OOPS', 'DBMS', 'Operating Systems', 'Computer Networks']
    }
  ]

  const certifications = [
    { name: 'Machine Learning', issuer: 'Duke University (Coursera)' },
    { name: 'Generative AI', issuer: 'Google' },
    { name: 'Large Language Models', issuer: 'Google' },
    { name: 'RDBMS', issuer: 'IBM' },
    { name: 'AI Azure Fundamentals', issuer: 'Microsoft' }
  ]

  return (
    <>
      <BackButton />
      <div className="page-container skills-page">
      <div className="page-content">
        <h1 className="page-title">Technical Skills & Certifications</h1>
        <p className="skills-intro">
          A comprehensive overview of technologies, tools, and industry certifications
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-dot"></span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h2 className="section-title">Professional Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">✓</div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills
