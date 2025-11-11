"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

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
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30">
            <Button
                variant="none"
                onClick={handleClick}
                className="flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer group bg-none hover:scale-105 hover:text-laranja-intenso"
                aria-label={isAtBottom ? "Voltar ao topo" : "Scroll para baixo"}
            >
                <span
                    className="scroll-btn-label"
                >
                    {isAtBottom ? "Voltar ao topo" : "Role para baixo"}
                </span>
                <svg
                    className={`scroll-btn-icon w-6 h-6 animate-bounce transition-transform duration-300 text-laranja-intenso group-hover:text-laranja-chama ${isAtBottom ? 'rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </Button>
        </div>
    );
}
