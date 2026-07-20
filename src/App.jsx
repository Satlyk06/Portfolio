import { Routes, Route } from 'react-router-dom'
import { SeasonProvider, useSeason } from './context/SeasonContext'
import ParticleCanvas from './components/ParticleCanvas'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function NoiseOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
      }}
    />
  )
}

function Loader() {
  const { config, progress } = useSeason()

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-black">
      <ParticleCanvas />
      
      <div className="text-center z-50 relative">
        <div className="relative inline-block mb-8">
          <div className={`absolute inset-0 rounded-full border ${config.accent.replace('text-', 'border-')} opacity-30 animate-ping`} 
               style={{ width: '80px', height: '80px', top: '-14px', left: '-14px' }} />
          <div className="text-5xl">{config.emoji}</div>
        </div>

        <h2 className="text-white/40 text-sm uppercase tracking-[0.3em] mb-2 font-medium">
          Portfolio
        </h2>
        <h3 className={`text-2xl font-bold ${config.accent} mb-8`}>
          {config.name}
        </h3>

        <div className="w-56 h-[1px] bg-white/10 rounded-full overflow-hidden mx-auto">
          <div 
            className={`h-full ${config.accent.replace('text-', 'bg-')} transition-all duration-75 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white/20 text-xs mt-3 font-mono">
          {progress}%
        </p>
      </div>
    </div>
  )
}

function AppContent() {
  const { isLoading } = useSeason()

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen relative bg-black">
      <ParticleCanvas />
      <NoiseOverlay />
      <Navbar />
      
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

function App() {
  return (
    <SeasonProvider>
      <AppContent />
    </SeasonProvider>
  )
}

export default App