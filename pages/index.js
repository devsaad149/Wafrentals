import Link from 'next/link'
import Image from 'next/image'
import { services } from '../data/services'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, Activity, Cpu, ShieldCheck } from 'lucide-react'

export default function Home() {
  // Balanced grid
  const featuredServices = services.slice(0, 12)

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-secondary/20 bg-secondary/5 mb-6">
              <Activity size={14} className="text-secondary" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">System Initialized</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Modern <span className="neon-text">Equipment</span> <br /> Solutions For Industry
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              Experience unparalleled efficiency with WAF Rentals. Our high-precision elite fleet and expert logistics ensure your projects reach new heights of performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/lowbed-trailer-truck" className="cyber-button flex items-center justify-center gap-2">
                Explore Fleet <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="px-8 py-3 rounded-full border border-white/10 glass-card flex items-center justify-center hover:bg-white/5 transition-all">
                Our Mission
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/5 bg-black/40">
              <Image
                src={services[10].image}
                alt="Modern Machinery"
                width={800}
                height={600}
                className="object-cover opacity-80"
                priority
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/10 to-cyber/10 blur-xl -z-10 rounded-3xl opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Active Fleet', value: '32+', icon: Cpu },
            { label: 'Pro Operators', value: '150+', icon: ShieldCheck },
            { label: 'Projects Done', value: '1.2k', icon: Activity },
            { label: 'Success Rate', value: '100%', icon: ShieldCheck },
          ].map((stat, i) => (
            <div key={i}>
              <stat.icon size={20} className="text-secondary mx-auto mb-4 opacity-40" />
              <div className="text-3xl font-bold mb-1 Outfit">{stat.value}</div>
              <div className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="h-px w-20 bg-secondary/30 mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The <span className="neon-text uppercase italic">Elite</span> Registry</h2>
              <p className="text-gray-400 max-w-md text-xs uppercase tracking-widest font-semibold opacity-60">Secured heavy inventory across the UAE.</p>
            </div>
            <Link href="/services/lowbed-trailer-truck" className="text-secondary flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all pb-2 border-b border-secondary/20">
              Browse Entire Fleet <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-24 text-center relative border-secondary/10 bg-secondary/5">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 Outfit tracking-tight">Ready to <span className="neon-text">Initiate</span>?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">Secure your logistics link with UAE's most trusted heavy rentals partner.</p>
          <Link href="/contact" className="cyber-button px-12 py-5 text-sm tracking-[0.4em]">
            GET SECURE QUOTE
          </Link>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block glass-card overflow-hidden bg-black/40">
      <div className="h-60 relative overflow-hidden">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-700 text-[10px] font-bold tracking-tighter">DATA UNAVAILABLE</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-6 left-8">
          <div className="bg-secondary/10 backdrop-blur-md px-2 py-0.5 rounded-sm border border-secondary/30 text-[9px] font-black text-secondary tracking-widest uppercase">READY</div>
        </div>
      </div>
      <div className="p-8">
        <h4 className="font-bold text-white group-hover:text-secondary text-2xl mb-3 transition-colors Outfit tracking-tight">{service.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-1 h-6 font-medium">{service.desc}</p>
      </div>
    </Link>
  )
}
