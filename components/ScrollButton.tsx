"use client";

import { useState, useEffect } from "react";

export default function ScrollButton() {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if user is near bottom of page (within 100px)
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const clientHeight = window.innerHeight;
            
            const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
            setIsAtBottom(isNearBottom);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        if (isAtBottom) {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Scroll down one viewport height
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
            <button
                onClick={handleClick}
                className="flex flex-col items-center gap-2 text-laranja-intenso/60 hover:text-laranja-intenso transition-all duration-300 cursor-pointer group"
                aria-label={isAtBottom ? "Voltar ao topo" : "Scroll para baixo"}
            >
                <span className="text-xs uppercase tracking-wider text-white/50 group-hover:text-white/70 transition-colors">
                    {isAtBottom ? "Voltar ao topo" : "Role para baixo"}
                </span>
                <svg
                    className={`w-5 h-5 animate-bounce transition-transform duration-300 ${isAtBottom ? 'rotate-180' : ''}`}
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
        </div>
    );
}
