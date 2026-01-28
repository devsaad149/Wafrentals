import { motion } from 'framer-motion'
import { Shield, Zap, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="neon-text">Mission</span> Control</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Pioneering the next generation of industrial efficiency across the UAE.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-4 neon-text Outfit">Watad Alfanar Equipment</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Watad Alfanar Equipment & Machinery Rental LLC is a leading provider of heavy equipment rental services across the UAE. We offer a comprehensive fleet covering construction, industrial, and infrastructure machinery, meticulously maintained for peak performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: 'Security', desc: 'Safety-first maintenance protocols.' },
              { icon: Zap, title: 'Power', desc: 'High-performance heavy machinery.' },
              { icon: Target, title: 'Precision', desc: 'Expert operators for every task.' },
              { icon: Award, title: 'Excellence', desc: 'Standard-setting service quality.' },
            ].map((feature, i) => (
              <div key={i} className="glass-card p-6 flex items-start gap-4">
                <feature.icon className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-500 leading-tight">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 bg-secondary/5 border-secondary/20"
        >
          <h2 className="text-3xl font-bold mb-8 Outfit uppercase italic">Core Operating Metrics</h2>
          <div className="space-y-10">
            {[
              { label: 'Market Reliability', value: '99.9%', width: 'w-[99.9%]' },
              { label: 'Technical Uptime', value: '98.5%', width: 'w-[98.5%]' },
              { label: 'Client Retention', value: '95%', width: 'w-[95%]' },
              { label: 'Safety Index', value: '100%', width: 'w-[100%]' },
            ].map((metric, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-gray-400">{metric.label}</span>
                  <span className="text-secondary">{metric.value}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: metric.value }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-secondary shadow-[0_0_10px_#39ff14]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border border-secondary/10 bg-black/50 rounded-xl">
            <p className="text-sm text-gray-400 leading-relaxed italic">
              "Our commitment is to ensure that every machine we deliver is a direct extension of your progress. We minimize downtime through rigorous maintenance and elite logistics."
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
