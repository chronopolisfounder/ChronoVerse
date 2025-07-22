import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Homepage from './pages/Homepage'
// import Dashboard from './pages/Dashboard'
// import Profile from './pages/Profile'
// import ResearcherPortal from './pages/ResearcherPortal'
// import Privacy from './pages/Privacy'
// import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#011319] to-[#0f1928] flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div style={{color:"#fff",fontSize:36}}>ChronoVerse UI Test Route</div>
            } />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}
