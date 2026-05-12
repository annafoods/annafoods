'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/over-mij', label: 'Over mij' },
  { href: '/trajecten', label: 'Trajecten' },
  { href: '/inspiratie', label: 'Inspiratie' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 bg-[#2d1f0f] border-b-2 border-terracotta transition-shadow duration-200 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-[72px]">

          {/* Logo */}
          <Link href="/" className="group">
            <span className="font-logo text-2xl sm:text-3xl text-[#e8d5b7] font-bold tracking-wide block leading-tight">
              Anna Foods
            </span>
            <span className="font-body text-[10px] text-white/40 tracking-wide leading-none mt-0.5 block">
              Voedingswetenschapper&nbsp;·&nbsp;Diëtist&nbsp;&amp;&nbsp;orthomoleculair&nbsp;therapeut&nbsp;·&nbsp;Insider
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-[#c9956b] font-medium'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={isOpen}
          >
            <span className={`block w-6 h-0.5 bg-white/80 transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white/80 transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white/80 transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-white/10 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-1 font-body transition-colors ${
                  pathname === link.href
                    ? 'text-[#c9956b] font-medium'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
