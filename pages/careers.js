import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, FileUp, Briefcase } from 'lucide-react'

export default function Careers() {
  const [applied, setApplied] = useState(false)
  const submit = (e) => { e.preventDefault(); setApplied(true) }

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-secondary/20 bg-secondary/5 mb-4">
          <Briefcase size={14} className="text-secondary" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">Operational Enrollment Open</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Join The <span className="neon-text">Elite</span> Force</h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          We are always looking for precision-driven operators and logistics experts to power our next generation fleet.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!applied ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-10 relative"
            >
              <div className="absolute top-0 right-10 w-32 h-32 bg-secondary/5 blur-3xl -z-10" />

              <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Candidate Profile</label>
                  <input name="name" required placeholder="Full Name" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-white placeholder-gray-600 focus:border-secondary transition-all outline-none" />
                </div>

                <div className="space-y-2">
                  <input name="email" type="email" required placeholder="Comm-Link (Email)" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-white placeholder-gray-600 focus:border-secondary transition-all outline-none" />
                </div>

                <div className="space-y-2">
                  <input name="phone" placeholder="Access Code (Phone)" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-white placeholder-gray-600 focus:border-secondary transition-all outline-none" />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <input name="role" required placeholder="Designated Role (e.g. Crane Operator)" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-white placeholder-gray-600 focus:border-secondary transition-all outline-none" />
                </div>

                <div className="md:col-span-2">
                  <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <FileUp size={32} className="text-gray-500 group-hover:text-secondary transition-colors" />
                    <p className="text-sm font-medium text-gray-400">Deploy Curriculum Vitae (PDF/DOCX)</p>
                  </div>
                </div>

                <div className="md:col-span-2 mt-4">
                  <button className="cyber-button w-full flex items-center justify-center gap-3 py-4 text-sm tracking-[0.2em]">
                    SUBMIT APPLICATION <Send size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 text-center border-secondary/30"
            >
              <CheckCircle2 size={64} className="text-secondary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4 Outfit uppercase tracking-tight">Transmission Received</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Your credentials have been logged into our mainframe. Our logistics team will initiate contact if a mission alignment is found.
              </p>
              <button
                onClick={() => setApplied(false)}
                className="text-secondary text-xs font-bold uppercase tracking-widest hover:underline"
              >
                Reset Communication Link
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Advanced Training', desc: 'Continuous simulation and field training programs.' },
          { title: 'Elite Logistics', desc: 'Standard-setting machinery movement protocols.' },
          { title: 'Innovation First', desc: 'Work with the region\'s most modern rental fleet.' },
        ].map((info, i) => (
          <div key={i} className="glass-card p-6 text-center">
            <h4 className="text-white font-bold mb-3 Outfit">{info.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{info.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
