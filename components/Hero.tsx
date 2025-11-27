"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Image from "next/image";
import type { HeroContent } from "@/types/contentful";

interface HeroProps {
    content?: HeroContent;
}

export default function Hero({ content }: HeroProps) {
    const description1 = "integrados em um sistema único";
    const description2 = "para transformar interesse em";
    const highlight = content?.cta || "faturamento previsível.";

    return (
        <section className="relative min-h-screen w-full overflow-hidden text-white pt-10">

            {/* BG */}
            <Image
                src="/Hero.png"
                alt="Hero Background"
                fill
                priority
                className="object-cover object-right md:object-right scale-125"
            />

            {/* Gradiente para melhorar legibilidade */}
            <div className="absolute inset-0" />

            <div className="relative z-10 min-h-screen flex items-center py-12 md:py-16">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* LEFT TEXT */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 text-center lg:text-left"
                        >
                            <h1 className="font-['AmsiPro'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.95]">
                                MARCA, <br />
                                MARKETING & <br />
                                <span className="block">TIME COMERCIAL</span>
                            </h1>

                            <p className="font-['AmsiPro'] font-semibold text-base sm:text-lg md:text-xl lg:text-3xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {description1}
                                <br />
                                {description2}
                                <br />
                                <span className="text-laranja-intenso font-bold">
                                    {highlight}
                                </span>
                            </p>

                            <span
                                className="font-['AmsiPro'] text-sm sm:text-lg uppercase tracking-[0.15em] font-black inline-block"
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

                        {/* RIGHT SIDE (TITLE + CARD) */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center lg:items-end w-full"
                        >

                            {/* TÍTULO FORA DO CARD */}
                            <div className="text-center mb-4 w-full max-w-[400px]">
                                <h3 className="font-['AmsiPro'] text-lg sm:text-xl md:text-[22px] font-black uppercase leading-tight">
                                    <span className="text-white">QUERO </span>
                                    <span className="text-[#E95009]">ESCALAR MINHAS VENDAS,</span>
                                </h3>
                                <p className="font-['AmsiPro'] text-lg sm:text-xl md:text-[22px] font-black text-white uppercase leading-tight">
                                    NÃO APENAS ANUNCIAR
                                </p>
                            </div>

                            {/* CARD CINZA */}
                            <div
                                className="
                                    w-full 
                                    max-w-[400px]
                                    bg-[#CFCFCF]/90
                                    border border-white/20
                                    rounded-2xl
                                    p-5 sm:p-6 md:p-8
                                    shadow-[0_4px_20px_rgba(0,0,0,0.45)]
                                "
                            >
                                <ContactForm />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
