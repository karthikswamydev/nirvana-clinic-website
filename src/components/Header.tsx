import { Link, useLocation } from '@tanstack/react-router'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/gallery', label: 'Gallery' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="w-full border-b border-white/20 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center space-x-3">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-linear-to-r from-[#1b4280] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent font-['Italianno']">
                Nirvana Integrated Clinic
              </span>
              <span className="text-[12px] text-center text-gray-600 font-['Italianno'] -mt-1 tracking-wide">
                Where Healing Meets Harmony
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full p-2 gap-2 border border-white/30 shadow-lg">
              {LINKS.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-full shadow-lg border border-white/50" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}