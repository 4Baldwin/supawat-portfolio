import React from 'react';
import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { Phone, Mail, Monitor, Github, Facebook } from 'lucide-react';

function ContactItem({ label, icon, children }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-white/5 px-4 py-3 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                {icon}
            </div>
            <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300/70">
                    {label}
                </div>
                <div className="text-sm font-medium text-slate-100">{children}</div>
            </div>
        </div>
    );
}

export default function Contact() {
    return (
        <Section id="contact" title="CONTACT">
            <GlassCard>
                <p className="mb-4 text-sm text-slate-200">
                    If you are interested or need more information, feel free to contact me via the channels below. 🙂
                </p>
                <div className="grid gap-4 text-xs text-slate-100 md:grid-cols-2">
                    <ContactItem label="Tel" icon={<Phone size={16} />}>
                        <span>098-175-2447</span>
                    </ContactItem>
                    <ContactItem label="Email" icon={<Mail size={16} />}>
                        <a href="mailto:naay1928@gmail.com" className="hover:text-cyan-300">
                            naay1928@gmail.com
                        </a>
                    </ContactItem>
                    <ContactItem label="Line ID" icon={<Monitor size={16} />}>
                        <span>.198819</span>
                    </ContactItem>
                    <ContactItem label="GitHub" icon={<Github size={16} />}>
                        <a href="https://github.com/4Baldwin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
                            github.com/4Baldwin
                        </a>
                    </ContactItem>
                    <ContactItem label="Facebook" icon={<Facebook size={16} />}>
                        <a href="https://www.facebook.com/supawat.arrakrattanakun" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
                            /supawat.arrakrattanakun
                        </a>
                    </ContactItem>
                </div>
            </GlassCard>
        </Section>
    );
}
