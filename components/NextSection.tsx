
"use client";
import React from 'react';

export default function NextSection() {
    return (
        <section id="next-section" className="relative min-h-screen bg-zinc-950 text-white flex items-center justify-center">
            <div className="container mx-auto px-12 lg:px-16 py-24">
                <div className="text-center space-y-8">
                    <h2 className="font-['AmsiPro'] font-black text-4xl md:text-5xl lg:text-6xl text-white">
                        Próxima Seção
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Conteúdo da próxima seção aqui...
                    </p>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-laranja-intenso/70 hover:text-laranja-intenso transition-colors cursor-pointer animate-bounce"
                aria-label="Voltar ao topo"
            >
                <svg
                    className="w-6 h-6 rotate-180"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </section>
    );
}
