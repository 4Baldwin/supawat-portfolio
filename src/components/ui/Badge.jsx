import React from 'react';

export function Badge({ children }) {
    return (
        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1 text-[10px] font-medium text-cyan-100 backdrop-blur-md">
            {children}
        </span>
    );
}
