import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'

export default function Navbar() {
  const { config } = useSeason()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg tracking-wider">PORTFOLIO</Link>
        
        <div className="flex gap-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${location.pathname === path ? 'text-white' : 'text-white/40 hover:text-white'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}