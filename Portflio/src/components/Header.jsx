import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="profile-logo">
          <div className="logo-ring"></div>
          <div className="logo-image">
            <img 
              src="/src/assets/profile.jpg" 
              alt="Umang Dokania" 
              onError={(e) => {
                e.target.onerror = null
                e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23667eea'/%3E%3Ctext x='50' y='50' font-size='40' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3EUD%3C/text%3E%3C/svg%3E`
              }}
            />
          </div>
        </div>
        <h1 className="header-title">
          <span className="title-text">Umang</span>
          <span className="title-text">Dokania</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
