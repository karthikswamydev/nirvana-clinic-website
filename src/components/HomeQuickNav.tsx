import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const LINKS = [
  { to: '/treatments', label: 'Treatments' as const },
  { to: '/services', label: 'Services' as const },
  { to: '/facilities', label: 'Facilities' as const },
  { to: '/gallery', label: 'Resource' as const },
]

function HomeQuickNavEnhanced() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <nav aria-label="Quick navigation" className="w-full py-16">
      <div className="max-w-4xl mx-auto px-4 flex justify-center">
        <div className="inline-flex items-center bg-gray-100/80 backdrop-blur-sm rounded-full p-2 gap-1 sm:gap-2 overflow-x-auto max-w-full">
          {LINKS.map((link, index) => {
            const isActive = activeIndex === index
            const className = `relative px-5 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap shrink-0 ${isActive
              ? 'text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
              }`
            const inner = (
              <>
                {isActive && (
                  <span className="absolute inset-0 bg-white rounded-full shadow-sm" />
                )}
                <span className="relative z-10">{link.label}</span>
              </>
            )
            return (
              <Link
                key={link.label}
                to={link.to}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={className}
              >
                {inner}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default HomeQuickNavEnhanced
