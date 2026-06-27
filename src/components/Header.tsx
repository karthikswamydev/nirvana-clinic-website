import { useEffect, useState } from 'react'
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

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6 text-brand-forest"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  )
}

export default function Header() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

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
    <header className="relative z-50 w-full border-b border-brand-olive/25 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center min-h-20 py-3 gap-4">
          <Link
            to="/"
            className="shrink-0 flex items-center gap-3 sm:gap-4 min-w-0 group"
            aria-label="Nirvana Integrated Clinic home"
          >
            <img className="md:max-w-[320px] max-w-[260px] h-auto object-contain" src="/brand/nirvana-emblem.png" alt="" />
          </Link>

          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-olive/35 bg-brand-sage/30 text-brand-forest shadow-sm hover:bg-brand-sage/50 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-primary-nav"
            id="mobile-menu-toggle"
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            <HamburgerIcon open={mobileOpen} />
          </button>

          <nav
            className="hidden lg:flex items-center shrink-0"
            aria-label="Primary"
          >
            <div className="inline-flex items-center bg-brand-sage/25 backdrop-blur-lg rounded-full p-1.5 gap-1 border border-brand-olive/30 shadow-sm flex-nowrap">
              {LINKS.map((link) => {
                const active = isActive(link)
                return (
                  <Link
                    key={`${link.to}-${link.label}-${link.hash ?? ''}`}
                    to={link.to}
                    hash={link.hash}
                    hashScrollIntoView={{ behavior: 'smooth' }}
                    className={`group relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 ${
                      active ? 'text-brand-forest' : 'text-brand-forest/70'
                    }`}
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-full border transition-all duration-200 ${
                        active
                          ? 'border-brand-olive/40 bg-white/80 backdrop-blur-md shadow-md group-hover:border-brand-olive/48 group-hover:bg-white/88 group-hover:shadow-[0_4px_14px_-4px_rgba(45,74,62,0.18)]'
                          : 'border-brand-olive/22 bg-white/60 backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 group-hover:border-brand-olive/32 group-hover:bg-white/72 group-hover:shadow-md group-hover:backdrop-blur-md'
                      }`}
                      aria-hidden
                    />
                    <span className="relative z-10 group-hover:text-brand-forest">{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/25 lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="lg:hidden absolute inset-x-0 top-full z-50 border-b border-brand-olive/25 bg-white/95 backdrop-blur-lg shadow-lg">
            <nav
              id="mobile-primary-nav"
              className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1 font-['Poppins']"
              aria-label="Main menu"
            >
              {LINKS.map((link) => {
                const active = isActive(link)
                return (
                  <Link
                    key={`m-${link.to}-${link.label}-${link.hash ?? ''}`}
                    to={link.to}
                    hash={link.hash}
                    hashScrollIntoView={{ behavior: 'smooth' }}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium border transition-all duration-200 ${
                      active
                        ? 'bg-brand-sage/50 text-brand-forest border-brand-olive/35 shadow-sm hover:bg-brand-sage/56 hover:border-brand-olive/42 hover:shadow-[0_2px_10px_-2px_rgba(45,74,62,0.12)]'
                        : 'text-brand-forest/85 border-transparent shadow-none hover:bg-brand-sage/45 hover:text-brand-forest hover:border-brand-olive/28 hover:shadow-sm'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  )
}
