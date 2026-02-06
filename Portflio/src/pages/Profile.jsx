import BackButton from '../components/BackButton'
import './Profile.css'

function Profile() {
  return (
    <>
      <BackButton />
      <div className="page-container profile-page">
        <div className="page-content">
          <div className="profile-hero">
            <div className="hero-badge">🤖 AI/ML Engineer</div>
            <h1 className="profile-main-title">Building Intelligent Systems</h1>
            <p className="profile-tagline">
              Transforming data into actionable insights through machine learning and artificial intelligence
            </p>
          </div>

          <div className="profile-summary">
            <h2 className="section-title">Professional Summary</h2>
            <p className="summary-text">
              Results-driven Computer Science and Engineering student at <strong>Chandigarh University</strong>, specializing in 
              <strong> Artificial Intelligence and Machine Learning</strong>. With a proven track record of delivering innovative solutions 
              in emotional AI, automation, and smart systems, I excel at transforming complex challenges into scalable, 
              production-ready applications.
            </p>
            <p className="summary-text">
              My expertise spans across <strong>Python, C++, Java, and SQL</strong>, with deep knowledge in modern ML frameworks 
              including <strong>TensorFlow, PyTorch, Scikit-learn, and OpenCV</strong>. I bring a unique combination of strong 
              algorithmic thinking, hands-on development experience, and leadership capabilities honed through managing 
              technical teams and hackathon victories.
            </p>
          </div>

          <div className="profile-grid">
            <div className="profile-card">
              <div className="card-icon">🎓</div>
              <h2 className="section-title">Education</h2>
              <div className="education-item">
                <h3>B.E. Computer Science (AI & ML)</h3>
                <p className="institution">Chandigarh University, Punjab</p>
                <p className="duration">Aug 2023 - Present</p>
                <ul className="detail-list">
                  <li>Specialization: Artificial Intelligence & Machine Learning</li>
                  <li>Core Competencies: DSA, OOPS, DBMS, OS, Computer Networks</li>
                  <li>Research Focus: Emotional AI, Computer Vision, Neural Networks</li>
                </ul>
              </div>
              <div className="education-item">
                <h3>Intermediate (10+2)</h3>
                <p className="institution">Sri Chaitanya Junior College, Hyderabad</p>
                <p className="duration">2021 - 2023</p>
              </div>
            </div>

            <div className="profile-card">
              <div className="card-icon">👨‍💼</div>
              <h2 className="section-title">Leadership & Experience</h2>
              <div className="experience-item">
                <h3>Secretary</h3>
                <p className="institution">Apex Techno Warriors (Technical Society)</p>
                <p className="duration">Present</p>
                <ul className="detail-list">
                  <li>Leading technical initiatives and innovation projects</li>
                  <li>Organizing workshops, hackathons, and tech events</li>
                  <li>Mentoring team members in AI/ML development</li>
                </ul>
              </div>
            </div>

            <div className="profile-card">
              <div className="card-icon">🏆</div>
              <h2 className="section-title">Key Achievements</h2>
              <ul className="achievement-list">
                <li>
                  <strong>Hackathon Winner:</strong> 1st Place for "Emotional Sync" - AI-powered emotional analysis system
                </li>
                <li>
                  <strong>Innovation Award:</strong> Dual-Axis Solar Tracking System with 40% efficiency improvement
                </li>
                <li>
                  <strong>Certified Professional:</strong> 10+ certifications from Duke, Google, IBM, Microsoft in AI/ML
                </li>
                <li>
                  <strong>Technical Leadership:</strong> Managing cross-functional teams in university tech society
                </li>
              </ul>
            </div>

            <div className="profile-card">
              <div className="card-icon">🎯</div>
              <h2 className="section-title">Core Competencies</h2>
              <div className="competency-grid">
                <div className="competency-item">
                  <h4>Machine Learning</h4>
                  <p>TensorFlow, PyTorch, Scikit-learn, Neural Networks, Deep Learning</p>
                </div>
                <div className="competency-item">
                  <h4>Computer Vision</h4>
                  <p>OpenCV, Image Processing, Facial Recognition, Object Detection</p>
                </div>
                <div className="competency-item">
                  <h4>Programming</h4>
                  <p>Python, C++, Java, SQL, Data Structures & Algorithms</p>
                </div>
                <div className="competency-item">
                  <h4>Development</h4>
                  <p>Git, API Design, System Architecture, Problem Solving</p>
                </div>
              </div>
            </div>

            <div className="profile-card full-width">
              <div className="card-icon">💡</div>
              <h2 className="section-title">What Drives Me</h2>
              <p className="summary-text">
                I'm passionate about leveraging AI and Machine Learning to solve real-world problems that make a tangible impact. 
                Whether it's developing emotion-aware systems, optimizing renewable energy solutions, or creating intelligent automation 
                tools, I thrive on challenges that push the boundaries of what's possible with technology.
              </p>
              <p className="summary-text">
                My goal is to join forward-thinking organizations where I can contribute to cutting-edge AI/ML projects, collaborate 
                with talented teams, and continue growing as an engineer while delivering measurable business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
