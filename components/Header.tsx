"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Verifica a posição inicial ao carregar
        setIsScrolled(window.scrollY > 50);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    }, [isMenuOpen]);

    const menuItems = [
        { href: "/", label: "HOME" },
        { href: "/sobre-nos", label: "SOBRE NÓS" },
        { href: "/aceleracao-comercial", label: "ACELERAÇÃO COMERCIAL" },
        { href: "/servicos", label: "SERVIÇOS" },
        { href: "/blog", label: "BLOG" },
        { href: "#contato", label: "CONTATO", isButton: true },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${isScrolled
                    ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/40"
                    : "bg-transparent"
                    }`}
            >
                <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        aria-label="Voltar para a página inicial"
                        className="flex items-center hover:scale-105 transition-all duration-300"
                    >
                        <div className={`relative transition-all duration-300 ${isScrolled
                            ? 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'
                            : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32'
                            }`}>
                            <Image
                                src="/logos/logo.png"
                                alt="Logo The Right Box"
                                fill
                                priority
                                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 128px"
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-10">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative font-['AmsiPro'] font-bold uppercase tracking-wide transition-all duration-300 ${item.isButton
                                    ? "px-6 py-2 border-2 border-laranja-intenso rounded-full text-white hover:bg-laranja-intenso hover:text-black shadow-sm"
                                    : "text-white/90 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-laranja-intenso after:transition-all after:duration-300 hover:after:w-full"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center"
                        aria-label="Abrir menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <motion.span
                                animate={
                                    isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                                }
                                transition={{ duration: 0.3 }}
                                className="w-full h-0.5 bg-laranja-intenso"
                            />
                            <motion.span
                                animate={
                                    isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                                }
                                transition={{ duration: 0.3 }}
                                className="w-full h-0.5 bg-laranja-intenso"
                            />
                        </div>
                    </button>
                </nav>
                {/* header bottom anchor removed to let per-section overlays define the subtle transition */}
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black lg:hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-black opacity-95" />

                        <div className="relative h-full flex flex-col items-center justify-center px-6">
                            <nav className="flex flex-col items-center gap-8">
                                {menuItems.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="text-center"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`font-['AmsiPro'] font-bold text-3xl uppercase tracking-wide inline-block ${item.isButton
                                                ? "text-laranja-intenso border-2 border-laranja-intenso px-6 py-2 rounded-full hover:bg-laranja-intenso hover:text-black"
                                                : "text-white hover:text-laranja-intenso"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                className="absolute bottom-10 text-center"
                            >
                                <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} The Right Box</p>
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
