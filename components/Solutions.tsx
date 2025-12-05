"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Dados das soluções com imagens correspondentes
const solutionsData = [
    {
        title: "Identidade Visual",
        image: "/images/Identidade-Visual.png",
    },
    {
        title: "Estratégia para anúncio",
        image: "/images/Estrategia-para-anuncio.png",
    },
    {
        title: "Criação de site e Landing Page de Conversão",
        image: "/images/Criacao-de-site.png",
    },
    {
        title: "Campanhas de e-mail",
        image: "/images/Campanhas-de-email.png",
    },
    {
        title: "Criativos para anúncios",
        image: "/images/Criativos-para-anuncios.png",
    },
];

export default function Solutions() {
    const [currentIndex, setCurrentIndex] = useState(2); // Start with middle card

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % solutionsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + solutionsData.length) % solutionsData.length);
    };

    // Get card position relative to center
    const getCardPosition = (index: number) => {
        const diff = index - currentIndex;
        if (diff > 2) return diff - solutionsData.length;
        if (diff < -2) return diff + solutionsData.length;
        return diff;
    };

    return (
        <section className="relative bg-black text-white py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-12"
            >
                <h2 className="font-[AmsiPro] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl  uppercase text-laranja-intenso">
                    SOLUÇÕES
                </h2>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative h-[480px] md:h-[580px] max-w-6xl mx-auto px-4">
                {/* Lateral blur fade effect */}
                <div className="absolute inset-0 pointer-events-none z-40">
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-black via-black/50 to-transparent" />
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-black via-black/50 to-transparent" />
                </div>

                {/* Cards Stack */}
                <div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">
                    <AnimatePresence mode="sync">
                        {solutionsData.map((solution, index) => {
                            const position = getCardPosition(index);
                            const isCenter = position === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.8, x: 0, opacity: 0, rotateY: 0, z: -200 }}
                                    animate={{
                                        scale: isCenter ? 1 : 0.82 - Math.abs(position) * 0.08,
                                        x: position * (typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 200),
                                        z: isCenter ? 0 : -Math.abs(position) * 100,
                                        opacity: Math.abs(position) > 2 ? 0 : 1 - Math.abs(position) * 0.1,
                                        rotateY: position * -12,
                                        filter: isCenter ? 'blur(0px)' : `blur(${Math.abs(position) * 0.5}px)`,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    style={{
                                        position: 'absolute',
                                        zIndex: 10 - Math.abs(position),
                                        transformStyle: 'preserve-3d',
                                    }}
                                    className={`w-60 md:w-[300px] ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
                                    onClick={() => !isCenter && setCurrentIndex(index)}
                                >
                                    {/* Card */}
                                    <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                                        {/* Image Container - 100% fill */}
                                        <div className="relative aspect-3/4">
                                            <Image
                                                src={solution.image}
                                                alt={solution.title}
                                                fill
                                                className="object-cover"
                                                sizes="300px"
                                                priority={isCenter}
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                                        </div>

                                        {/* Title overlay at bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                            <h3 className="font-[AmsiPro] text-sm md:text-base font-bold text-white drop-shadow-lg leading-tight">
                                                {solution.title}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows - positioned next to center card */}
                <button
                    onClick={prevSlide}
                    className="carousel-nav-button absolute left-20 sm:left-[calc(48%-140px)] md:left-[calc(48%-180px)] top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 flex items-center justify-center opacity-90 hover:opacity-100 cursor-pointer"
                    aria-label="Anterior"
                >
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" strokeWidth={2.5} />
                </button>

                <button
                    onClick={nextSlide}
                    className="carousel-nav-button absolute right-20 sm:right-[calc(48%-140px)] md:right-[calc(48%-180px)] top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 flex items-center justify-center opacity-90 hover:opacity-100 cursor-pointer"
                    aria-label="Próximo"
                >
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" strokeWidth={2.5} />
                </button>

                {/* Navigation indicators */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-50">
                    {solutionsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "w-8 bg-laranja-intenso"
                                : "w-2 bg-zinc-700 hover:bg-zinc-600"
                                }`}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
