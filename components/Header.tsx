"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevenir scroll quando menu está aberto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const menuItems = [
        { href: "/", label: "HOME" },
        { href: "/sobre-nos", label: "SOBRE NÓS" },
        { href: "/aceleracao-comercial", label: "ACELERAÇÃO COMERCIAL" },
        { href: "/servicos", label: "SERVIÇOS" },
        { href: "/blog", label: "BLOG" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
                <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 sm:gap-4 transition-opacity hover:opacity-80"
                        onClick={closeMenu}
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 relative shrink-0">
                            <Image
                                src="/logo.png"
                                alt="The Right Box Logo"
                                fill
                                priority
                                loading="eager"
                                sizes="(max-width: 640px) 48px, 64px"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-['AmsiPro'] font-black text-2xl sm:text-3xl italic leading-none tracking-tight">
                                HOME
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`font-['AmsiPro'] font-semibold text-base uppercase tracking-wide transition-colors ${item.href === "/"
                                    ? "text-laranja-intenso hover:text-laranja-chama"
                                    : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group"
                        aria-label="Menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <motion.span
                                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="w-full h-0.5 bg-laranja-intenso group-hover:bg-laranja-chama transition-colors origin-center"
                            />
                            <motion.span
                                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="w-full h-0.5 bg-laranja-intenso group-hover:bg-laranja-chama transition-colors origin-center"
                            />
                        </div>
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black lg:hidden"
                    >
                        {/* Background effect */}
                        <div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-black opacity-95" />

                        {/* Subtle orange glow */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-laranja-intenso rounded-full blur-3xl" />
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-laranja-chama rounded-full blur-3xl" />
                        </div>

                        {/* Menu Content */}
                        <div className="relative h-full flex flex-col items-center justify-center px-6">
                            <nav className="flex flex-col items-center gap-6 sm:gap-8">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={`font-['AmsiPro'] font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide transition-colors ${item.href === "/"
                                                ? "text-laranja-intenso hover:text-laranja-chama"
                                                : "text-white hover:text-laranja-intenso"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer info no menu mobile */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="absolute bottom-8 text-center"
                            >
                                <p className="text-zinc-500 text-sm font-['AmsiPro']">
                                    © {new Date().getFullYear()} The Right Box
                                </p>
                                <p className="text-zinc-600 text-xs mt-1">
                                    Transformando interesse em receita
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
