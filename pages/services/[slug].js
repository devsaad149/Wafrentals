import Link from 'next/link'
import Image from 'next/image'
import { services } from '../../data/services'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Activity, Cpu } from 'lucide-react'

export default function ServicePage({ params }) {
  const slug = params?.slug || ''
  const item = services.find(s => s.slug === slug) || services[0]

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Base Navigation
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Visual Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="aspect-[4/3] relative rounded-3xl overflow-hidden glass-card border-white/5 bg-black/50">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-700 text-xs font-bold">
                <Cpu size={40} className="mb-4 opacity-20" />
                REGISTRY IMAGE NOT FOUND
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute top-6 left-6 flex gap-2">
              <div className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-secondary/30 text-[10px] font-bold text-secondary tracking-widest uppercase">UNIT_ACTIVE</div>
              <div className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-widest uppercase">FLEET_REG: {item.slug.toUpperCase()}</div>
            </div>
          </div>

          <div className="absolute -inset-2 bg-gradient-to-tr from-secondary/10 to-transparent blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>

        {/* Spec Sheet */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-secondary/50" />
              <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em]">Fleet Classification</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 Outfit">{item.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              {item.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Payload Integrity', value: 'Certified', icon: ShieldCheck },
              { label: 'Energy Matrix', value: 'High Density', icon: Zap },
              { label: 'Operational Sync', value: 'Full Link', icon: Activity },
              { label: 'Core Processor', value: 'Next-Gen', icon: Cpu },
            ].map((spec, i) => (
              <div key={i} className="glass-card p-5 flex items-center gap-4 bg-white/5">
                <spec.icon size={20} className="text-secondary" />
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{spec.label}</h4>
                  <p className="text-sm font-bold text-white Outfit">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6">
            <Link href="/contact" className="cyber-button flex-1 flex items-center justify-center gap-3 py-4 text-sm tracking-[0.2em] uppercase">
              INITIALIZE QUOTE <ArrowRight size={20} />
            </Link>
            <div className="flex items-center gap-4 px-6 text-xs font-bold text-gray-500">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              SYSTEMS NOMINAL / READY FOR DEPLOYMENT
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="fixed top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[200px] -z-20 pointer-events-none" />
    </main>
  )
}
