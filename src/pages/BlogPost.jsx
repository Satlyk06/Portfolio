import { motion } from 'framer-motion'
import { useSeason } from '../context/SeasonContext'
import { useParams, Link } from 'react-router-dom'

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    category: 'REACT',
    content: `
      <p>When I first started with React, I thought components were just about JSX and props. But as projects grew, I realized that architecture matters more than syntax. In this post, I'll share the patterns that have saved me countless hours of debugging.</p>

      <h3>Start With Folder Structure</h3>
      <p>Group by feature, not by file type. Instead of having all components in one folder and all hooks in another, keep related files together. This makes navigation intuitive and scaling painless.</p>

      <h3>State Management Strategy</h3>
      <p>For global state, I reach for Zustand. It's minimal, has no boilerplate, and works flawlessly with TypeScript. For server state, TanStack Query is unbeatable — caching, background updates, and optimistic UI out of the box.</p>

      <h3>Component Boundaries</h3>
      <p>If a component exceeds 200 lines, it's doing too much. Split it. Keep presentational components pure and container components handling logic. This separation makes testing and reuse trivial.</p>

      <p>Remember: code is read more than it's written. Invest time in clean architecture early, and you'll thank yourself later.</p>
    `
  },
  {
    id: 2,
    title: 'Why I Switched to Tailwind CSS',
    date: 'Feb 3, 2026',
    readTime: '5 min read',
    category: 'CSS',
    content: `
      <p>I was a CSS Modules purist. The idea of utility classes felt wrong — until I tried Tailwind on a real project. Now I can't imagine going back.</p>

      <h3>The Speed Factor</h3>
      <p>No more switching between HTML and CSS files. No more naming conventions. I just describe what I want: flex, gap-4, text-white. The mental overhead disappears.</p>

      <h3>Design Consistency</h3>
      <p>Tailwind's design system enforces consistency. Spacing, colors, and typography follow a scale. No more random pixel values. Everything feels cohesive by default.</p>

      <h3>Dark Mode in Minutes</h3>
      <p>Adding dark mode used to be a nightmare. With Tailwind, it's one class: dark:bg-black. The dark variant system handles everything else.</p>

      <p>If you're on the fence, try it for one project. The productivity gain is real.</p>
    `
  },
  {
    id: 3,
    title: 'Mastering TypeScript Generics',
    date: 'Mar 12, 2026',
    readTime: '10 min read',
    category: 'TYPESCRIPT',
    content: `
      <p>Generics were the last TypeScript feature I truly understood. They seemed abstract and unnecessary — until I needed them. Now they're my most powerful tool.</p>

      <h3>What Are Generics?</h3>
      <p>Think of generics as variables for types. Instead of hardcoding string or number, you create a placeholder that gets filled later. This makes functions and components reusable across types.</p>

      <h3>Real-World Example</h3>
      <p>I built a data fetching hook that works with any API response. Without generics, I'd need separate hooks for users, posts, and comments. With generics, one hook handles all three — fully typed.</p>

      <h3>Constraints Save Lives</h3>
      <p>Generic constraints prevent misuse. By saying T extends object, you ensure only objects are passed. The compiler catches errors before they reach production.</p>

      <p>Invest time in generics. The type safety and flexibility they provide are worth every minute.</p>
    `
  },
  {
    id: 4,
    title: 'The Future of Web Development',
    date: 'Apr 8, 2026',
    readTime: '6 min read',
    category: 'TRENDS',
    content: `
      <p>The web is evolving faster than ever. What we build today might look outdated in two years. Here are the trends I'm betting on.</p>

      <h3>Edge Computing</h3>
      <p>Running code at the edge — close to users — reduces latency dramatically. Platforms like Vercel Edge and Cloudflare Workers are making this accessible to everyone.</p>

      <h3>AI-Powered Development</h3>
      <p>AI won't replace developers, but developers using AI will replace those who don't. From code completion to automated testing, the productivity boost is undeniable.</p>

      <h3>WebAssembly</h3>
      <p>Performance-critical tasks are moving to WASM. Games, video editing, and even machine learning are running in browsers at near-native speed.</p>

      <p>Stay curious. The best developers are perpetual learners.</p>
    `
  },
  {
    id: 5,
    title: 'Optimizing React Performance',
    date: 'May 20, 2026',
    readTime: '7 min read',
    category: 'PERFORMANCE',
    content: `
      <p>Slow apps kill user experience. I've spent weeks optimizing React applications, and these techniques consistently deliver the biggest impact.</p>

      <h3>Memoization Done Right</h3>
      <p>React.memo, useMemo, and useCallback are powerful but dangerous. Overuse them and you add complexity without benefit. Profile first, optimize second.</p>

      <h3>Virtualize Long Lists</h3>
      <p>Rendering 1000 items at once is never necessary. React Virtual or TanStack Virtual renders only visible items. Scroll becomes buttery smooth.</p>

      <h3>Code Splitting</h3>
      <p>Not every route needs every component. Dynamic imports with React.lazy split your bundle automatically. Users download only what they need.</p>

      <p>Performance is a feature. Treat it as one from day one.</p>
    `
  },
  {
    id: 6,
    title: 'My Developer Setup 2026',
    date: 'Jun 5, 2026',
    readTime: '4 min read',
    category: 'SETUP',
    content: `
      <p>Your environment shapes your productivity. After years of tweaking, here's the setup that keeps me in flow state.</p>

      <h3>Editor: VS Code</h3>
      <p>Fast, extensible, and free. My must-have extensions: ESLint, Prettier, Tailwind CSS IntelliSense, and GitLens. The Vim extension gives me modal editing without leaving VS Code.</p>

      <h3>Terminal: Warp</h3>
      <p>Warp is a Rust-based terminal with AI command suggestions and block-based output. It's fast, beautiful, and makes command-line work enjoyable.</p>

      <h3>Browser: Arc</h3>
      <p>Vertical tabs, spaces for different contexts, and built-in note-taking. Arc reimagines how a browser should work. I can't go back to Chrome.</p>

      <p>Tools are personal. Experiment, find what works for you, and don't be afraid to switch.</p>
    `
  },
]

export default function BlogPost() {
  const { id } = useParams()
  const { config } = useSeason()
  
  const post = blogPosts.find(p => p.id === parseInt(id))
  
  if (!post) {
    return (
      <div className="min-h-screen pt-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl text-white mb-4">Post not found</h2>
          <Link to="/blog" className={`${config.accent} hover:opacity-80`}>Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen pt-32 pb-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 text-sm"
          >
            <ArrowLeftIcon />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className={`text-xs font-mono ${config.accent}`}>{post.category}</span>
            <span className="text-white/20 text-xs">•</span>
            <span className="text-white/30 text-xs">{post.date}</span>
            <span className="text-white/20 text-xs">•</span>
            <span className="text-white/30 text-xs">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
            {post.title}
          </h1>

          <div 
            className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </article>
  )
}