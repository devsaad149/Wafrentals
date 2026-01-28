import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact <span className="neon-text">Hub</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Operational request or logistics inquiry? Secure your communication link today.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Contact info grid */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 group hover:border-secondary/40"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Direct Dial</h4>
                <a href="tel:0547094260" className="text-xl font-bold hover:text-secondary transition-colors Outfit">0547094260</a>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-10">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Central Comms</h4>
                <a href="mailto:info@wafrentals.com" className="text-sm font-bold block hover:text-secondary transition-colors Outfit mb-1">info@wafrentals.com</a>
                <a href="mailto:inquiry@wafrentals.com" className="text-sm font-bold block hover:text-secondary transition-colors Outfit">inquiry@wafrentals.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-10">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Deployment Zone</h4>
                <p className="text-sm font-bold Outfit">Dubai, United Arab Emirates</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Active Hours</h4>
                <p className="text-sm font-bold Outfit">08:00 - 18:00 (Mon - Sat)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-white/5 rounded-2xl bg-black/40"
          >
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Location Matrix</h4>
            <div className="aspect-video w-full glass-card overflow-hidden bg-gray-900 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
              <span className="text-[10px] font-bold text-gray-600 tracking-tighter uppercase">MAP_DATA_REDACTED</span>
            </div>
          </motion.div>
        </div>

        {/* Form section */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="glass-card p-10 md:p-16 border-secondary/10"
              >
                <div className="flex items-center gap-4 mb-10">
                  <MessageSquare className="text-secondary" size={28} />
                  <h2 className="text-3xl font-bold Outfit tracking-tight">Rapid Transmission</h2>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input name="name" required placeholder="Full Name" className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl text-white placeholder-gray-600 focus:border-secondary transition-all outline-none" />
                  </div>

                  <div className="space-y-2">
                    <input name="email" type="email" required placeholder="CommLink (Email)" className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl text-white placeholder-gray-600 focus:border-secondary transition-all outline-none" />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <input name="phone" placeholder="Access Code (Phone)" className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl text-white placeholder-gray-600 focus:border-secondary transition-all outline-none" />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <textarea name="message" required rows="6" placeholder="Deployment Details / Message" className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl text-white placeholder-gray-600 focus:border-secondary transition-all outline-none resize-none" />
                  </div>

                  <div className="md:col-span-2 mt-6">
                    <button className="cyber-button w-full flex items-center justify-center gap-4 py-5 text-md tracking-[0.3em]">
                      SEND TRANSMISSION <Send size={22} />
                    </button>
                    <p className="text-center text-[10px] text-gray-600 mt-6 tracking-widest uppercase font-bold opacity-50">Secure SSL-256 Encrypted Communication Link</p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-20 text-center border-secondary/50 shadow-[0_0_50px_rgba(57,255,20,0.1)]"
              >
                <CheckCircle2 size={80} className="text-secondary mx-auto mb-8" />
                <h3 className="text-4xl font-bold mb-6 Outfit tracking-tight">TRANSMISSION SECURE</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-sm mx-auto">
                  Your request has reached our headquarters. A logistics officer will be assigned to your project momentarily.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-4 border border-secondary/30 rounded-full text-secondary text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-black transition-all"
                >
                  Initiate New Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
