import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'

const HeartIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

export default function Footer() {
  const { config, season } = useSeason()

  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/30 text-sm">
          <span>{config.emoji}</span>
          <span className="uppercase tracking-wider text-xs">{season}</span>
        </div>
        
        <div className="flex gap-6 text-white/30 text-xs tracking-wider uppercase">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        
        <p className="text-white/20 text-xs flex items-center gap-1">
          Built with <HeartIcon /> using React
        </p>
      </div>
    </footer>
  )
}