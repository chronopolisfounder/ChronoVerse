// src/App.jsx
import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Lazy-loaded pages for performance
const Home = lazy(() => import('./pages/Home.jsx'))
const ChronoNav = lazy(() => import('./pages/ChronoNav.jsx'))
const Protocol = lazy(() => import('./pages/Protocol.jsx'))
const Gene = lazy(() => import('./pages/Gene.jsx'))
const Science = lazy(() => import('./pages/Science.jsx'))
const Longevity = lazy(() => import('./pages/Longevity.jsx'))
const Simulation = lazy(() => import('./pages/Simulation.jsx'))
const Missions = lazy(() => import('./pages/Missions.jsx'))
const AvatarPage = lazy(() => import('./pages/Avatar.jsx'))
const ResearchPage = lazy(() => import('./pages/Research.jsx'))
const Settings = lazy(() => import('./pages/Settings.jsx'))

export default function App() {
  return (
    <Router>
      <Navbar />
      <main role="main" className="flex-1 p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chrononav" element={<ChronoNav />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/gene" element={<Gene />} />
            <Route path="/science" element={<Science />} />
            <Route path="/longevity" element={<Longevity />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  )
}
