import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sparkle, Home, Globe, UserCircle } from 'lucide-react' // Lucide icons

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-gray-900 to-zinc-900 shadow-xl border-b border-chrome-700/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-2 group">
          <Sparkle className="w-7 h-7 text-chrome-300 group-hover:text-cyan-300 transition" />
          <span className="text-2xl font-extrabold tracking-tight text-chrome-100 group-hover:text-cyan-200 drop-shadow">
            ChronoVerse
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-1 rounded-xl font-semibold transition ${
                isActive
                  ? 'bg-chrome-700/60 text-cyan-200'
                  : 'text-chrome-300 hover:bg-chrome-700/30 hover:text-cyan-100'
              }`
            }
            end
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-1 rounded-xl font-semibold transition ${
                isActive
                  ? 'bg-chrome-700/60 text-cyan-200'
                  : 'text-chrome-300 hover:bg-chrome-700/30 hover:text-cyan-100'
              }`
            }
          >
            <Globe className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-1 rounded-xl font-semibold transition ${
                isActive
                  ? 'bg-chrome-700/60 text-cyan-200'
                  : 'text-chrome-300 hover:bg-chrome-700/30 hover:text-cyan-100'
              }`
            }
          >
            <UserCircle className="w-5 h-5" />
            <span>Profile</span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
