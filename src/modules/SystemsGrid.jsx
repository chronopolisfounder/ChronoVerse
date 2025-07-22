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
      <h2 className="text-3xl text-center font-extrabold text-tronNeon mb-10 drop-shadow-[0_0_8px_#00fff7]">
        Explore the Systems
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {modules.map(({ title, description, icon, link }) => (
          <ChronoRouter key={title} to={link}>
            <div className="cursor-pointer rounded-2xl p-6 glassmorphism border-2 border-tronNeon shadow-[0_0_24px_4px_#00fff7] hover:scale-105 hover:shadow-[0_0_36px_10px_#00fff7] transition-transform duration-300 backdrop-blur-lg bg-white/10">
              <div className="text-5xl mb-3 drop-shadow-[0_0_8px_#00fff7]">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-tronPink drop-shadow-[0_0_4px_#ff00f7]">
                {title}
              </h3>
              <p className="text-sm text-gray-200">{description}</p>
            </div>
          </ChronoRouter>
        ))}
      </div>
    </section>
  )
}
