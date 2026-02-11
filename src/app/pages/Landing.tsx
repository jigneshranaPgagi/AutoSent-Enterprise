import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Zap, FileText, LayoutDashboard, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 text-center relative z-10 max-w-5xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-block mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-300">
            <Zap className="w-14 h-14 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          AutoSent Enterprise
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl text-slate-300 mb-16 max-w-3xl mx-auto"
        >
          Transform Instagram engagement into measurable revenue with AI-powered automation
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/proposal">
              <Card className="bg-slate-800/50 border-purple-500/30 hover:border-purple-500 p-8 h-full cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-white">View Proposal</h2>
                <p className="text-slate-400 mb-6">
                  Interactive presentation with architecture, timeline, and deliverables
                </p>
                
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/dashboard">
              <Card className="bg-slate-800/50 border-pink-500/30 hover:border-pink-500 p-8 h-full cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-white">Live Dashboard Demo</h2>
                <p className="text-slate-400 mb-6">
                  Experience the full SaaS platform with mock data and live interactions <br /><br />
                  <h3>NOTE:</h3> This is only for showcase purposes only. The final design and functionality may differ in the actual implementation.
                </p>
                
              </Card>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-slate-500"
        >
          <p className="text-sm">Built by PG-AGI • Enterprise AI Solutions</p>
        </motion.div>
      </div>
    </div>
  );
}
