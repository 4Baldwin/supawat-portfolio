import React from 'react';

export function TitleSmall({ children, className = "" }) {
    return (
        <h3
            className={`text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300 ${className}`}
        >
            {children}
        </h3>
    );
}
