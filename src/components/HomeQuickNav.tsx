import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const LINKS = [
  { to: '/treatments', label: 'Treatments' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/gallery', label: 'Gallery' },
]

function HomeQuickNavEnhanced() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <nav aria-label="Quick navigation" className="w-full py-16">
      <div className="max-w-4xl mx-auto px-4 flex justify-center">
        {/* Segmented Control */}
        <div className="inline-flex items-center bg-gray-100/80 backdrop-blur-sm rounded-full p-2 gap-2">
          {LINKS.map((link, index) => {
            const isActive = activeIndex === index
            return (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`relative px-8 py-4 rounded-full text-base font-medium transition-all duration-200 ${isActive
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white rounded-full shadow-sm" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default HomeQuickNavEnhanced