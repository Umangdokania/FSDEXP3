import { Routes, Route } from 'react-router-dom'
import SpaceBackground from './components/SpaceBackground'
import Header from './components/Header'
import SolarSystem from './components/SolarSystem'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Background Layer */}
      <SpaceBackground />
      
      {/* Header with Profile Logo */}
      <Header />
      
      {/* Solar System Navigation */}
      <SolarSystem />
      
      {/* Page Content Layer */}
      <div className="content-layer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
