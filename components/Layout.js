import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Phone, Mail, Clock, LayoutGrid, Info, Briefcase, MessageSquare } from 'lucide-react'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-mesh-gradient selection:bg-secondary selection:text-black">
      <Head>
        <title>WAF Rentals - Futuristic Equipment & Transport</title>
        <meta name="description" content="Next-gen heavy equipment rental and transport services across the UAE. Powered by Watad Alfanar." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/logo.jpg" alt="WAF Rentals" width={140} height={50} className="object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
            <Link href="/services/lowbed-trailer-truck" className="hover:text-secondary transition-colors">Fleet</Link>
            <Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link>
            <Link href="/contact" className="cyber-button text-xs py-2 px-6">Contact Us</Link>
          </nav>

          <button className="lg:hidden p-2 text-white hover:text-secondary transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <main className="pt-24">{children}</main>

      <footer className="bg-black/80 backdrop-blur-md border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Image src="/logo.jpg" alt="WAF Rentals" width={180} height={60} className="object-contain mb-6 grayscale invert brightness-200" />
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Watad Alfanar Equipment & Machinery Rental LLC delivers high-precision machinery solutions across the UAE, driving the future of industry with reliability and power.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Connect</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3"><Phone size={18} className="text-secondary" /> 0547094260</li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-secondary" /> info@wafrentals.com</li>
                <li className="flex items-center gap-3"><Clock size={18} className="text-secondary" /> 08:00 - 18:00 (Mon-Sat)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Social</h4>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'Instagram', 'Youtube'].map((social) => (
                  <Link key={social} href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-secondary hover:text-black transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-600 rounded-sm" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-widest uppercase">
            <p>© {new Date().getFullYear()} WATAD ALFANAR EQUIPMENT. ALL SYSTEMS NOMINAL.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-secondary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-secondary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
