import React from 'react';
import { motion } from 'framer-motion';

function FadeIn({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function Section({ id, title, children, className = "" }) {
    return (
        <section id={id} className={`mt-20 scroll-mt-24 ${className}`}>
            <FadeIn>
                <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                    <span className="h-px w-8 bg-cyan-500/50"></span>
                    {title}
                </h2>
                <div className="mt-6">{children}</div>
            </FadeIn>
        </section>
    );
}
