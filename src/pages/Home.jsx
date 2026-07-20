import { motion } from 'framer-motion'
import { useSeason } from '../context/SeasonContext'
import { Link } from 'react-router-dom'

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

export default function Home() {
  const { config } = useSeason()

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-20"
        >
         
          <div className="flex items-center gap-2">
            <span className="text-lg"></span>
            <span className="text-white/40 text-sm capitalize">{config.season}</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
              FULL STACK
              <br />
              <span className={config.accent}>DEVELOPER</span>
            </h1>
            
            <p className="text-white/40 text-lg max-w-md mb-10 leading-relaxed">
              Hi, I'm <span className="text-white font-medium">Sxatlyk</span>, a passionate developer dedicated to creating beautiful, user-friendly digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link 
                to="/blog"
                className={`px-8 py-4 text-sm font-medium text-white ${config.accent.replace('text-', 'bg-')} hover:opacity-80 transition-opacity`}
              >
                Read My Blog
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 text-sm font-medium text-white border border-white/20 hover:bg-white/5 transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Satlyk06" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/satlyk-basimov-092377270" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300">
                <LinkedInIcon />
              </a>
              <a href="mailto:basimov1404@gmail.com" className="p-3 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300">
                <MailIcon />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className={`absolute inset-0 ${config.accent.replace('text-', 'bg-')} opacity-20 blur-[100px] rounded-full`} />
              <div className="relative w-64 h-64 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <span className="text-8xl">{config.emoji}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}