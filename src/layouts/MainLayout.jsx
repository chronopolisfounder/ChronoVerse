// src/layouts/MainLayout.jsx
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

/**
 * Main layout wrapper for ChronoVerse pages.
 * Provides navbar, main content area, and footer.
 */
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-chrono-black text-white">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
