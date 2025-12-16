import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll to Top visibility
      setShowScrollTop(window.scrollY > 300);

      // Active Section detection
      const sections = ["about", "skills", "projects", "contact"];
      let current = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) { // 150px offset
            current = section;
          }
        }
      }

      // Check if reached bottom of page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        current = "contact";
      }

      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-black text-slate-50 selection:bg-cyan-400/40 selection:text-white font-sans">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[80px]"
        />
        <motion.div
          className="absolute -right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/20 blur-[80px]"
        />
        <motion.div
          className="absolute bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[80px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-20">
        <Navbar activeSection={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="mt-20 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Supawat Arrakrattanakun · Portfolio
        </footer>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 rounded-full bg-cyan-500 p-3 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] transition hover:bg-cyan-400 hover:scale-110"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
