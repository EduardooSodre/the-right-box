"use client";

import Image from "next/image";
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
    const ctaText = content?.cta || "Quero performar minhas vendas, não apenas anunciar";

    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
            <BackgroundEffects />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full relative z-10 py-24 sm:py-28 md:py-32 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full items-center max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6">
                        {/* Main headline */}
                        <div className="space-y-3 md:space-y-4">
                            <h1 className="font-['AmsiPro'] font-extralight italic text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight text-white/95">
                                {headline}
                            </h1>
                            {subheadline && (
                                <p className="font-['AmsiPro'] font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-laranja-intenso leading-tight">
                                    {subheadline}
                                </p>
                            )}
                        </div>

                        {/* H1 Tagline */}
                        <div className="pt-2 md:pt-4">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-['AmsiPro'] font-light italic text-white/90 leading-tight">
                                Você não precisa <span className="font-normal">&apos;pensar fora da caixa&apos;</span>.<br />
                                Precisa da <span className="text-laranja-chama font-bold not-italic">Caixa Certa</span>.
                            </h2>
                        </div>
                    </div>

                    {/* Right Content - Contact Form */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-sm space-y-3">
                            {/* Form Title Outside */}
                            <div className="flex justify-center items-center text-center lg:text-left ">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-['AmsiPro'] font-bold leading-tight pt-4">
                                    <span className="text-white">Quero</span> <span className="text-laranja-intenso opacity-50">performar minhas vendas</span><span className="text-white">,</span><br />
                                    <span className="flex justify-center items-center text-center  text-white">{ctaText.split(",")[1]?.trim() || "não apenas anunciar"}</span>
                                </h3>
                            </div>

                            {/* Form Card */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-sm p-4 sm:p-5 shadow-2xl">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
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
                    Identificamos e corrigimos os gargalos que impedem suas vendas
                </p>
            </div>
        </section>
    );
}
