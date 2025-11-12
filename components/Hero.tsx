"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import BackgroundEffects from "./BackgroundEffects";
import type { HeroContent } from "@/types/contentful";

interface HeroProps {
    content?: HeroContent;
}

export default function Hero({ content }: HeroProps) {
    // Use content from Contentful or fallback to default
    const headline = content?.headline || "Integramos marca, tráfego e operação comercial em um único sistema para transformar interesse em receita previsível sem achismo, sem ruído, sem desperdício.";
    const subheadline = content?.subheadline || "";
    const tagline = content?.tagline || "Você não precisa \"pensar fora da caixa\". Precisa da Caixa Certa.";
    const ctaText = content?.cta || "Quero performar minhas vendas, não apenas anunciar";
    const bottomTagline = content?.bottomTagline || "Identificamos e corrigimos os gargalos que impedem suas vendas";

    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
            <BackgroundEffects />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full relative z-10 py-24 sm:py-28 md:py-32 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full items-center max-w-7xl mx-auto">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6"
                    >
                        {/* Main headline */}
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="font-['AmsiPro'] font-semibold italic text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight text-white/95"
                            >
                                {headline.toLowerCase().includes("sem achismo") ? (
                                    <>
                                        {headline.split(/sem achismo/i)[0]}
                                        <br />
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                            className="text-laranja-intenso"
                                        >
                                            {headline.split(/sem achismo/i)[1] ? `Sem achismo${headline.split(/sem achismo/i)[1]}` : "Sem achismo, sem ruído, sem desperdício."}
                                        </motion.span>
                                    </>
                                ) : (
                                    headline
                                )}
                            </motion.h1>
                            {subheadline && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="font-['AmsiPro'] font-black italic text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight text-laranja-intenso "
                                >
                                    {subheadline}
                                </motion.p>
                            )}
                        </div>

                        {/* H1 Tagline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="pt-2 md:pt-4"
                        >
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-['AmsiPro'] font-light italic text-white/90 leading-tight">
                                {tagline.includes("Caixa Certa") ? (
                                    <>
                                        {tagline.split("Caixa Certa")[0]}
                                        <span className="text-laranja-intenso font-bold not-italic">Caixa Certa</span>
                                        {tagline.split("Caixa Certa")[1]}
                                    </>
                                ) : (
                                    tagline
                                )}
                            </h2>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-sm space-y-3">
                            {/* Form Title Outside */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex justify-center items-center text-center lg:text-left "
                            >
                                <h3 className="text-lg md:text-xl lg:text-2xl font-['AmsiPro'] font-bold leading-tight pt-4">
                                    <span className="text-white">Quero</span> <span className="text-laranja-intenso opacity-50">performar minhas vendas</span><span className="text-white">,</span><br />
                                    <span className="flex justify-center items-center text-center  text-white">{ctaText.split(",")[1]?.trim() || "não apenas anunciar"}</span>
                                </h3>
                            </motion.div>

                            {/* Form Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="bg-white/95 backdrop-blur-sm rounded-sm p-4 sm:p-5 shadow-2xl"
                            >
                                <ContactForm />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom tagline - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex absolute bottom-6 lg:bottom-8 left-6 lg:left-12 xl:left-16 z-10 items-center gap-3 lg:gap-4 max-w-md xl:max-w-xl">
                <div className="w-8 h-8 lg:w-10 lg:h-10 relative shrink-0">
                    <Image
                        src="/logos/LOGO-1A.png"
                        alt="The Right Box Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="text-sm lg:text-base font-['AmsiPro'] font-light text-white/80 leading-relaxed">
                    {bottomTagline}
                </p>
            </div>
        </section>
    );
}
