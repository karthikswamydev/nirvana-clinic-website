import { Link, useLocation } from '@tanstack/react-router'

type NavItem = {
  to: '/' | '/about' | '/treatments' | '/services' | '/facilities' | '/gallery' | '/contact'
  label: string
  hash?: string
}

const LINKS: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/services', label: 'Services' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/gallery', label: 'Resource' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const location = useLocation()

  const isActive = (link: NavItem) => {
    if (link.to === '/' && !link.hash) {
      return location.pathname === '/' && !location.hash
    }
    if (link.hash) {
      return location.pathname === '/' && location.hash === `#${link.hash}`
    }
    return location.pathname === link.to
  }

  return (
    <header className="w-full border-b border-brand-olive/25 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center min-h-20 py-3 gap-4">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-3 sm:gap-4 min-w-0 group"
            aria-label="Nirvana Integrated Clinic home"
          >
            <img 
            className='max-w-[200px] h-auto object-contain'
            src="/brand/nirvana-emblem.png"/>
            
          </Link>

          <nav className="flex items-center overflow-x-auto max-w-[calc(100vw-11rem)] sm:max-w-none pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex items-center bg-brand-sage/25 backdrop-blur-lg rounded-full p-1.5 gap-1 border border-brand-olive/30 shadow-sm flex-nowrap">
              {LINKS.map((link) => {
                const active = isActive(link)
                return (
                  <Link
                    key={`${link.to}-${link.label}-${link.hash ?? ''}`}
                    to={link.to}
                    hash={link.hash}
                    hashScrollIntoView={{ behavior: 'smooth' }}
                    className={`relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 ${active ? 'text-brand-forest' : 'text-brand-forest/70 hover:text-brand-forest'
                      }`}
                  >
                    {active && (
                      <span className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-full shadow-md border border-brand-olive/40" />
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
