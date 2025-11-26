"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

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
        title: "Criação de site",
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
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % solutionsData.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Calculate visible slides (5 at a time on desktop)
    const getVisibleSlides = () => {
        const slides = [];
        for (let i = 0; i < 5; i++) {
            const index = (currentIndex + i) % solutionsData.length;
            slides.push({ ...solutionsData[index], key: `${index}-${i}` });
        }
        return slides;
    };

    return (
        <section className="relative bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 sm:mb-16"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-laranja-intenso">
                    SOLUÇÕES
                </h2>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
                {/* Desktop - 5 cards grid */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto">
                    {getVisibleSlides().map((solution, idx) => (
                        <motion.div
                            key={solution.key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="group relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                                />
                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            </div>

                            {/* Title overlay at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                <h3 className="text-sm lg:text-base font-bold text-white drop-shadow-lg">
                                    {solution.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile - Single card carousel */}
                <div className="md:hidden relative max-w-sm mx-auto">
                    <div className="relative bg-zinc-900 rounded-2xl overflow-hidden">
                        {/* Image */}
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <Image
                                src={solutionsData[currentIndex].image}
                                alt={solutionsData[currentIndex].title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 90vw, 400px"
                            />
                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                        </div>

                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-xl font-bold text-white drop-shadow-lg">
                                {solutionsData[currentIndex].title}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Navigation indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {solutionsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
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
