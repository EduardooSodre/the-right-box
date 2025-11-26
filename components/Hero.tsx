"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Image from "next/image";
import type { HeroContent } from "@/types/contentful";

interface HeroProps {
    content?: HeroContent;
}

export default function Hero({ content }: HeroProps) {
    const description =
        content?.tagline ||
        "integrados em um sistema único para transformar interesse em";
    const highlight = content?.cta || "faturamento previsível.";

    return (
        <section className="relative h-screen w-full overflow-hidden text-white">

            {/* BG original */}
            <Image
                src="/Hero.png"
                alt="Hero Background"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Gradiente leve */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            {/* Conteúdo */}
            <div className="relative z-10 h-full flex items-center">
                <div
                    className="
                        container mx-auto 
                        px-6 lg:px-16
                        grid grid-cols-1 lg:grid-cols-2
                        gap-10
                        items-center
                        max-w-7xl
                    "
                >

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-lg space-y-6"
                    >
                        <h1 className="font-['AmsiPro'] text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95]">
                            MARCA, <br />
                            MARKETING & <br />
                            <span className="block">TIME COMERCIAL</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90">
                            {description}{" "}
                            <span className="text-laranja-intenso font-bold">
                                {highlight}
                            </span>
                        </p>

                        <span
                            className="font-['AmsiProCond'] text-base uppercase tracking-[0.15em] font-bold inline-block"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg,#d5a03d,#f1d77c,#f9ed9d,#d5a03d,#e4c269,#f9ed9d)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            SEM ACHISMO, SEM RUÍDO, SEM DESPERDÍCIO.
                        </span>
                    </motion.div>

                    {/* RIGHT – CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center lg:justify-end pr-4"
                    >
                        <div
                            className="
                                w-full 
                                max-w-[370px]        
                                h-[540px]            /* Altura exata do design */
                                rounded-2xl 
                                border border-white/20 
                                backdrop-blur-xl 
                                bg-white/10 
                                p-6
                                shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                                flex flex-col gap-4
                            "
                        >
                            {/* Título dentro do card – espaçamento correto */}
                            <div className="text-center space-y-1 mt-2 mb-2">
                                <h3 className="font-['AmsiProCond'] text-[22px] font-black uppercase leading-tight">
                                    <span className="text-white">QUERO </span>
                                    <span className="text-[#E95009]">
                                        ESCALAR MINHAS VENDAS,
                                    </span>
                                </h3>

                                <p className="font-['AmsiProCond'] text-[22px] font-black text-white uppercase leading-tight">
                                    NÃO APENAS ANUNCIAR
                                </p>
                            </div>

                            {/* FORM com inputs finos no tamanho da arte */}
                            <div className="flex-1">
                                <ContactForm />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
