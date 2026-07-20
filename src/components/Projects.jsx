import { motion, useInView } from 'framer-motion'
import { useSeason } from '../context/SeasonContext'
import { useRef } from 'react'

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with React, Node.js, and Stripe payments.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'WEB APP',
    liveUrl: 'https://your-ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/ecommerce-platform',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with drag-and-drop and real-time updates.',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    category: 'WEB APP',
    liveUrl: 'https://your-taskapp-demo.vercel.app',
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/task-manager',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with 7-day forecasts and interactive maps.',
    tags: ['React', 'Tailwind', 'Chart.js'],
    category: 'DASHBOARD',
    liveUrl: 'https://your-weather-demo.vercel.app',
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/weather-dashboard',
  },
  {
    title: 'Portfolio CMS',
    description: 'Headless CMS for developers with Markdown support.',
    tags: ['Vue.js', 'GraphQL', 'PostgreSQL'],
    category: 'CMS',
    liveUrl: 'https://your-cms-demo.vercel.app',
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/portfolio-cms',
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging with end-to-end encryption.',
    tags: ['React Native', 'Firebase', 'WebRTC'],
    category: 'MOBILE',
    liveUrl: '#',
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/chat-app',
  },
  {
    title: 'AI Image Generator',
    description: 'Web app that generates images from text prompts.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
    category: 'AI TOOL',
    liveUrl: 'https://your-ai-demo.vercel.app',
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/ai-image-gen',
  },
]

export default function Projects() {
  const { config } = useSeason()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section className="min-h-screen pt-32 pb-32 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-white/30 text-sm tracking-widest uppercase mb-4 block">Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            RECENT <span className={config.accent}>WORK</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className="p-6 pb-0 flex justify-between items-start">
                <span className="text-white/30 text-xs tracking-widest">{project.category}</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white/40 hover:text-white transition-colors"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white/40 hover:text-white transition-colors"
                  >
                    <CodeIcon />
                  </a>
                </div>
              </div>

              <div className="p-6 pt-4">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs text-white/50 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`absolute inset-0 ${config.accent.replace('text-', 'bg-')} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}