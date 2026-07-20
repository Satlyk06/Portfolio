import { motion, useInView } from 'framer-motion'
import { useSeason } from '../context/SeasonContext'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for structuring large-scale React apps with proper state management and component architecture.',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    category: 'REACT',
  },
  {
    id: 2,
    title: 'Why I Switched to Tailwind CSS',
    excerpt: 'A deep dive into the benefits of utility-first CSS and how it improved my development workflow significantly.',
    date: 'Feb 3, 2026',
    readTime: '5 min read',
    category: 'CSS',
  },
  {
    id: 3,
    title: 'Mastering TypeScript Generics',
    excerpt: 'Understanding TypeScript generics through practical examples and real-world use cases in web development.',
    date: 'Mar 12, 2026',
    readTime: '10 min read',
    category: 'TYPESCRIPT',
  },
  {
    id: 4,
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends like WebAssembly, Edge Computing, and AI-powered development tools.',
    date: 'Apr 8, 2026',
    readTime: '6 min read',
    category: 'TRENDS',
  },
  {
    id: 5,
    title: 'Optimizing React Performance',
    excerpt: 'Advanced techniques for improving your React app performance including memoization, lazy loading, and code splitting.',
    date: 'May 20, 2026',
    readTime: '7 min read',
    category: 'PERFORMANCE',
  },
  {
    id: 6,
    title: 'My Developer Setup 2026',
    excerpt: 'A complete breakdown of my development environment, tools, and productivity hacks I use daily.',
    date: 'Jun 5, 2026',
    readTime: '4 min read',
    category: 'SETUP',
  },
]

export default function Blog() {
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
          <span className="text-white/30 text-sm tracking-widest uppercase mb-4 block">Blog</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            LATEST <span className={config.accent}>POSTS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/10 p-8 hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className={`text-xs font-mono ${config.accent}`}>{post.category}</span>
                
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <Link 
                to={`/blog/${post.id}`}
                className={`inline-flex items-center gap-2 text-sm ${config.accent} hover:opacity-80 transition-opacity`}
              >
                Read More
                <ArrowRightIcon />
              </Link>

              <div className={`absolute inset-0 ${config.accent.replace('text-', 'bg-')} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}