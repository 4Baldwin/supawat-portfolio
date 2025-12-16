import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Code2, Monitor, Layers, Cpu } from 'lucide-react';
import { Badge } from './ui/Badge';

export default function Hero() {
    return (
        <section id="hero" className="mt-6 grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-center">
            {/* Left Side: Text / Buttons / Tags */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                    <Terminal size={14} /> WEB · SOFTWARE · IT SUPPORT
                </p>

                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
                    Supawat Arrakrattanakun
                </h1>

                {/* Tag Skills */}
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-200">
                    <Badge><Code2 size={12} className="mr-1 inline" /> JavaScript · React.js · Node.js</Badge>
                    <Badge><Monitor size={12} className="mr-1 inline" /> Web Application</Badge>
                    <Badge><Layers size={12} className="mr-1 inline" /> UI / UX Design</Badge>
                    <Badge><Cpu size={12} className="mr-1 inline" /> Hardware & System</Badge>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">


                    <a
                        href="https://github.com/4Baldwin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-white/5 px-6 py-2.5 text-xs font-medium text-slate-100 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300/10"
                    >
                        <Github size={16} />
                        GitHub Profile
                    </a>
                </div>
            </motion.div>

            {/* Right Side: Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
            >
                <div className="relative group">
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-fuchsia-500/30 to-transparent blur-xl transition duration-500 group-hover:blur-2xl" />
                    <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition duration-500 group-hover:scale-[1.02]">
                        <img
                            src="/profile.png"
                            alt="Supawat Arrakrattanakun"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
