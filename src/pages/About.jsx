import { motion, useInView } from 'framer-motion'
import { useSeason } from '../context/SeasonContext'
import { useRef } from 'react'

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'Python / Django', level: 75 },
  { name: 'PostgreSQL / MongoDB', level: 80 },
  { name: 'Git / Docker', level: 85 },
  { name: 'Figma / UI Design', level: 70 },
]

const services = [
  { num: '01', title: 'WEB DEVELOPMENT', desc: 'Building fast, responsive, and scalable web applications with modern technologies.' },
  { num: '02', title: 'UI/UX DESIGN', desc: 'Creating intuitive and visually stunning interfaces that users love.' },
  { num: '03', title: 'API DEVELOPMENT', desc: 'Designing robust RESTful and GraphQL APIs for seamless data flow.' },
  { num: '04', title: 'CONSULTING', desc: 'Helping teams make the right technical decisions for their projects.' },
]

export default function About() {
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
          <span className="text-white/30 text-sm tracking-widest uppercase mb-4 block">About</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            WHO I <span className={config.accent}>AM</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-white/60 text-lg leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating
              modern, responsive, and user-friendly applications.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or enjoying a good cup of coffee.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { num: '3+', label: 'Years' },
                { num: '50+', label: 'Projects' },
                { num: '20+', label: 'Clients' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <div className={`text-3xl font-bold ${config.accent}`}>{stat.num}</div>
                  <div className="text-white/40 text-sm mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-white/30 text-sm tracking-widest uppercase mb-8">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="text-white/70 text-sm font-medium tracking-wide">{skill.name}</span>
                    <span className={`text-sm ${config.accent}`}>{skill.level}%</span>
                  </div>
                  <div className="h-[2px] bg-white/10 overflow-hidden">
                    <motion.div
                      className={`h-full ${config.accent.replace('text-', 'bg-')}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.08, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-white/30 text-sm tracking-widest uppercase mb-12 text-center">Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-sm font-mono ${config.accent}`}>{service.num}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 group-hover:text-white/50 transition-colors">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}