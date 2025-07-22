import React from 'react'
import { ChronoRouter } from '../router/ChronoRouter'

const modules = [
  {
    title: 'Researcher Portal',
    description: 'Submit, explore, and reward open research.',
    link: '/research',
    icon: '🔬',
  },
  {
    title: 'ChronoSync',
    description: 'Log daily health data into the stream.',
    link: '/sync',
    icon: '🧠',
  },
  {
    title: 'ChronoSIM',
    description: 'Enter the metaverse simulation timeline.',
    link: '/sim',
    icon: '🌌',
  },
]

export default function SystemsGrid() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl text-center font-bold text-tronNeon mb-10 drop-shadow-neon">
        Explore the Systems
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {modules.map(({ title, description, icon, link }) => (
          <ChronoRouter key={title} to={link}>
            <div className="cursor-pointer rounded-2xl p-6 glassmorphism border border-tronNeon shadow-neon hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold text-tronPink">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          </ChronoRouter>
        ))}
      </div>
    </section>
  )
}
