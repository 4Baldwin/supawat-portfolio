import React from 'react';

export function GlassCard({ children, className = "" }) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 bg-gradient-to-br from-cyan-500/5 via-slate-900/80 to-black/90 p-4 shadow-[0_0_20px_rgba(8,145,178,0.3)] backdrop-blur-lg ${className}`}
        >
            <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_60%)] opacity-60" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
